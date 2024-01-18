import { kana, map } from './map'

/**
 * 'ZE' = 全角英数
 * 'HE' = 半角英数
 * 'HG' = ひらがな
 * 'KK' = カタカナ
 * 'HS' = 半角スペース
 * 'ZS' = 全角スペース
 * 'HK' = 半角カナ
 * 'ZK' = 全角カナ (半角カナ変換用)
 * 'HSn' = 半角記号
 * 'ZSn' = 全角記号
 */
export type Mojisyu = 'ZE' | 'HE' | 'ZS' | 'HS' | 'HG' | 'KK' | 'ZK' | 'HK'

export type ConvertType =
  | readonly ['ZE', 'HE']
  | readonly ['HE', 'ZE']
  | readonly ['ZS', 'HS']
  | readonly ['HS', 'ZS']
  | readonly ['ZK', 'HK']
  | readonly ['HK', 'ZK']
  | readonly ['ZSn', 'HSn'] // 記号(シンボル)
  | readonly ['HSn', 'ZSn']
  | readonly ['ZHg', 'HHg'] // ハングル
  | readonly ['HHg', 'ZHg']
  | readonly ['HG', 'KK']
  | readonly ['KK', 'HG']

interface Moji {
  convert(...args: ConvertType): Moji
  // filter(type: Mojisyu): Moji
  // reject(type: Mojisyu): Moji
  toString(): string
}

/**
 * @internal
 */
export const unreachable = (_: never): never => {
  throw new Error('unreachable.')
}

const u16 = (num: number) => num.toString(16).padStart(4, '0')
const toRegStr = (pairs: readonly (readonly [string, string])[], i: 0 | 1) =>
  `[${pairs.map(m => `\\u${u16(m[i].codePointAt(0) || 1)}`).join('')}]`
const regMap = {
  ZE: new RegExp(`[\\u${u16(kana.ZE.start)}-\\u${u16(kana.ZE.end)}]`, 'g'),
  HE: new RegExp(`[\\u${u16(kana.HE.start)}-\\u${u16(kana.HE.end)}]`, 'g'),
  HG: new RegExp(`[\\u${u16(kana.HG.start)}-\\u${u16(kana.HG.end)}]`, 'g'),
  KK: new RegExp(`[\\u${u16(kana.KK.start)}-\\u${u16(kana.KK.end)}]`, 'g'),
  hSymbol: new RegExp(toRegStr([...map['ascii.symbol'], ...map['jis0201.symbol'], ...map['unicode.symbol']], 1), 'g'),
  zSymbol: new RegExp(toRegStr([...map['ascii.symbol'], ...map['jis0201.symbol'], ...map['unicode.symbol']], 0), 'g'),
  hHangul: new RegExp(toRegStr(map['unicode.hangul'], 1), 'g'),
  zHangul: new RegExp(toRegStr(map['unicode.hangul'], 0), 'g'),
}

const repMap = {
  ZE2HE: (m: string): string => String.fromCodePoint(kana.HE.start + (m.codePointAt(0) || 0) - kana.ZE.start),
  HE2ZE: (m: string): string => String.fromCodePoint(kana.ZE.start + (m.codePointAt(0) || 0) - kana.HE.start),
  HG2KK: (m: string): string => String.fromCodePoint(kana.KK.start + (m.codePointAt(0) || 0) - kana.HG.start),
  KK2HG: (m: string): string => String.fromCodePoint(kana.HG.start + (m.codePointAt(0) || 0) - kana.KK.start),
}

const pushMap = (pairs: readonly (readonly [string, string])[], i: 0 | 1, j: 0 | 1, map: Map<string, string>) => {
  for (const pair of pairs) map.set(pair[i], pair[j])
}
const mapMap = {
  ZK2HK: new Map<string, string>(),
  HK2ZK: new Map<string, string>(),
  ZSn2HSn: new Map<string, string>(),
  HSn2ZSn: new Map<string, string>(),
  ZHg2HHg: new Map<string, string>(),
  HHg2ZHg: new Map<string, string>(),
} as const
for (const [i, c] of kana.ZK.list.entries()) mapMap.ZK2HK.set(c, kana.HK.list[i] ?? '?')
for (const [i, c] of kana.HK.list.entries()) mapMap.HK2ZK.set(c, kana.ZK.list[i] ?? '?')
pushMap([...map['ascii.symbol'], ...map['jis0201.symbol'], ...map['unicode.symbol']], 0, 1, mapMap.ZSn2HSn)
pushMap([...map['ascii.symbol'], ...map['jis0201.symbol'], ...map['unicode.symbol']], 1, 0, mapMap.HSn2ZSn)
pushMap(map['unicode.hangul'], 0, 1, mapMap.ZHg2HHg)
pushMap(map['unicode.hangul'], 1, 0, mapMap.HHg2ZHg)

const mojiImpl = (moji: string): Moji => ({
  toString: (): string => moji,
  convert: (...args: ConvertType): Moji => {
    switch (args[0]) {
      case 'ZE':
        return mojiImpl(moji.replace(regMap.ZE, repMap.ZE2HE))
      case 'HE':
        return mojiImpl(moji.replace(regMap.HE, repMap.HE2ZE))
      case 'KK':
        return mojiImpl(moji.replace(regMap.KK, repMap.KK2HG))
      case 'HG':
        return mojiImpl(moji.replace(regMap.HG, repMap.HG2KK))
      case 'ZS':
        return mojiImpl(moji.replace(kana.ZS.patterns[0][0], kana.ZS.patterns[0][1].HS))
      case 'HS':
        return mojiImpl(moji.replace(kana.HS.patterns[0][0], kana.HS.patterns[0][1].ZS))
      case 'ZK':
        return mojiImpl(moji.replace(kana.ZK.regexp, m => mapMap.ZK2HK.get(m) || '?'))
      case 'HK':
        return mojiImpl(moji.replace(kana.HK.regexp, m => mapMap.HK2ZK.get(m) || '?'))
      case 'ZSn':
        return mojiImpl(moji.replace(regMap.zSymbol, m => mapMap.ZSn2HSn.get(m) || '?'))
      case 'HSn':
        return mojiImpl(moji.replace(regMap.hSymbol, m => mapMap.HSn2ZSn.get(m) || '?'))
      case 'ZHg':
        return mojiImpl(moji.replace(regMap.zHangul, m => mapMap.ZHg2HHg.get(m) || '?'))
      case 'HHg':
        return mojiImpl(moji.replace(regMap.hHangul, m => mapMap.HHg2ZHg.get(m) || '?'))
      default:
        return unreachable(args)
    }
  },
})

export const moji = mojiImpl

/**
 * 全角英数字を半角にする
 */
export const zenkaku2hankaku = (str: string) =>
  mojiImpl(str)
    .convert('ZE', 'HE')
    .convert('ZS', 'HS')
    .convert('ZSn', 'HSn')
    .convert('ZHg', 'HHg')
    .toString()
    .replace(/[ー－]/giu, '-')

export const toLowerHankaku = (str: string) => zenkaku2hankaku(str).toLowerCase()
