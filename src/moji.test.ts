/* eslint-disable @typescript-eslint/ban-ts-comment */
import { describe, it, expect } from 'vitest'

// @ts-ignore
import * as Moji from '@eai/moji'

import { kana } from './map'
import { moji, zenkaku2hankaku as orig } from './moji'

describe('map', () => {
  it('ok', () => {
    expect(kana.HE.end - kana.HE.start).toBe(kana.ZE.end - kana.ZE.start)
    expect(kana.KK.end - kana.KK.start).toBe(kana.HG.end - kana.HG.start)
  })
})

// @ts-ignore

const moji2 = ('function' === typeof Moji ? Moji : Moji.default) as typeof moji
const zenkaku2hankaku = (str: string) => {
  const u = moji2(str)
    .convert('ZE', 'HE')
    .convert('ZS', 'HS')
    .toString()
    .replace(/[ー－]/giu, '-')
    .replace(/[、]/giu, '､')
  const v = orig(str)
  const { stringify: e } = JSON
  if (v !== u) throw new Error(`? ${e(v)} !== ${e(u)}`)
  return v
}

describe('moji', () => {
  it('{', () => {
    const result = moji2('{').convert('HE', 'ZE').toString()
    expect(result).toBe('｛')
  })
  it('{', () => {
    const result = moji('{').convert('HE', 'ZE').toString()
    expect(result).toBe('｛')
  })
  it('！！！ ZE to HE', () => {
    const result = moji('！！！').convert('ZE', 'HE').toString()
    expect(result).toBe('!!!')
  })
  it('！！！ ZSn to HSn', () => {
    const result = moji('！！！').convert('ZSn', 'HSn').toString()
    expect(result).toBe('!!!')
  })
  it('｛〘', () => {
    const result = moji('｛〘').convert('ZSn', 'HSn').toString()
    expect(result).toBe('{⟬')
  })
  it('ＨＯ、，ＧＥ', () => {
    const result = moji('ＨＯ、，ＧＥ').convert('ZE', 'HE').convert('ZSn', 'HSn').toString()
    expect(result).toBe('HO､,GE')
  })
})

describe('core', () => {
  const assert = {
    strictEqual: (q: string, w: string) => {
      expect(q).toBe(w)
    },
  }

  it('全角英数から半角英数', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('ZE', 'HE').toString(),
      'ABCD　01234あいうアイウABCD 01234ｱｲｳ',
    )
  })

  it('全角スペースを半角スペースに', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('ZS', 'HS').toString(),
      'ＡＢＣＤ ０１２３４あいうアイウABCD 01234ｱｲｳ',
    )
  })

  it('半角スペースを全角スペースに', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('HS', 'ZS').toString(),
      'ＡＢＣＤ　０１２３４あいうアイウABCD　01234ｱｲｳ',
    )
  })

  it('半角英数から全角英数', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('HE', 'ZE').toString(),
      'ＡＢＣＤ　０１２３４あいうアイウＡＢＣＤ ０１２３４ｱｲｳ',
    )
  })

  it('全角カナから半角カナ', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('ZK', 'HK').toString(),
      'ＡＢＣＤ　０１２３４あいうｱｲｳABCD 01234ｱｲｳ',
    )
  })

  it('半角カナから全角カナ', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('HK', 'ZK').toString(),
      'ＡＢＣＤ　０１２３４あいうアイウABCD 01234アイウ',
    )
  })

  it('ひらがなからカタカナ', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('HG', 'KK').toString(),
      'ＡＢＣＤ　０１２３４アイウアイウABCD 01234ｱｲｳ',
    )
  })

  it('カタカナからひらがな', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('KK', 'HG').toString(),
      'ＡＢＣＤ　０１２３４あいうあいうABCD 01234ｱｲｳ',
    )
  })

  it('複数の文字種を置換', () => {
    assert.strictEqual(
      moji('ＡＢＣＤ　０１２３４あいうアイウABCD 01234ｱｲｳ').convert('HK', 'ZK').convert('KK', 'HG').toString(),
      'ＡＢＣＤ　０１２３４あいうあいうABCD 01234あいう',
    )
  })
})
describe('zenkaku2hankaku', () => {
  it('Ｃ２－５，ＮＴ', () => {
    expect(zenkaku2hankaku('Ｃ２－５，ＮＴ')).toBe('C2-5,NT')
  })
  it('　ほＨＯＥＧＥ', () => {
    expect(zenkaku2hankaku('　ほＨＯＥＧＥ')).toBe(' ほHOEGE')
  })
  it('ﾎｹﾞﾎｹﾞ', () => {
    expect(zenkaku2hankaku('ﾎｹﾞﾎｹﾞ')).toBe('ﾎｹﾞﾎｹﾞ')
  })
  it('💘❤💓💔💕💖', () => {
    expect(zenkaku2hankaku('💘❤💓💔💕💖')).toBe('💘❤💓💔💕💖')
    expect('💘❤💓💔💕💖'.length).toBe('💘❤💓💔💕💖'.length)
  })
  it('comma', () => {
    expect(zenkaku2hankaku('ＨＯ、，ＧＥ')).toBe('HO､,GE')
  })
  it('-ー－', () => {
    expect(zenkaku2hankaku('-ー－')).toBe('---')
  })
  it('＋－＊／', () => {
    expect(zenkaku2hankaku('＋－＊／')).toBe('+-*/')
  })
})
