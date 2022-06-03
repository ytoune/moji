/* eslint-disable @typescript-eslint/prefer-function-type */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import * as Moji from '@eai/moji'

/**
 * 'ZE' = 全角英数
 * 'HE' = 半角英数
 * 'HG' = ひらがな
 * 'KK' = カタカナ
 * 'HS' = 半角スペース
 * 'ZS' = 全角スペース
 * 'HK' = 半角カナ
 * 'ZK' = 全角カナ (半角カナ変換用)
 */
type Mojisyu = 'ZE' | 'HE' | 'ZS' | 'HS' | 'HG' | 'KK' | 'ZK' | 'HK'

interface MojisyuRange {
	start: number
	end: number
}

interface MojisyuRegExp {
	regexp: RegExp
	list: string[]
}

interface Moji {
	convert(beforeType: Mojisyu, afterType: Mojisyu): Moji
	filter(type: Mojisyu): Moji
	reject(type: Mojisyu): Moji
	toString(): string
}

export const moji = ('function' === typeof Moji ? Moji : Moji.default) as {
	(moji: string): Moji
	readonly addMojisyu: {
		(type: string, mojisyu: MojisyuRange | MojisyuRegExp): void
	}
}

// export default moji

/**
 * 全角英数字を半角にする
 */
export const zenkaku2hankaku = (str: string) =>
	moji(str)
		.convert('ZE', 'HE')
		.convert('ZS', 'HS')
		.toString()
		.replace(/[ー－]/giu, '-')

export const toLowerHankaku = (str: string) =>
	zenkaku2hankaku(str).toLowerCase()
