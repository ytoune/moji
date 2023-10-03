import { moji, zenkaku2hankaku } from './moji'

describe('moji', () => {
	it('{', () => {
		const result = moji('{').convert('HE', 'ZE').convert('HS', 'ZS').toString()
		expect(result).toBe('｛')
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
		expect(zenkaku2hankaku('ＨＯ、，ＧＥ')).toBe('HO、,GE')
	})
	it('-ー－', () => {
		expect(zenkaku2hankaku('-ー－')).toBe('---')
	})
	it('＋－＊／', () => {
		expect(zenkaku2hankaku('＋－＊／')).toBe('+-*/')
	})
})
