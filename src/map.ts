// https://zh.wikipedia.org/wiki/%E5%85%A8%E5%BD%A2%E5%92%8C%E5%8D%8A%E5%BD%A2

// 半形字符与全形字符的比较（ASCII字符）
// ASCII	全形字符	Unicode	半形字符	Unicode
const asciiSpace = [
  // eslint-disable-next-line no-irregular-whitespace
  // 0x20	"　"	U+3000	" "	U+0020
  ['\u3000', '\u0020'],
] as const
const asciiSymbol1 = [
  // 0x21	！	U+FF01	!	U+0021
  ['\uFF01', '\u0021'],
  // 0x22	＂	U+FF02	"	U+0022
  ['\uFF02', '\u0022'],
  // 0x23	＃	U+FF03	#	U+0023
  ['\uFF03', '\u0023'],
  // 0x24	＄	U+FF04	$	U+0024
  ['\uFF04', '\u0024'],
  // 0x25	％	U+FF05	%	U+0025
  ['\uFF05', '\u0025'],
  // 0x26	＆	U+FF06	&	U+0026
  ['\uFF06', '\u0026'],
  // 0x27	＇	U+FF07	'	U+0027
  ['\uFF07', '\u0027'],
  // 0x28	（	U+FF08	(	U+0028
  ['\uFF08', '\u0028'],
  // 0x29	）	U+FF09	)	U+0029
  ['\uFF09', '\u0029'],
  // 0x2A	＊	U+FF0A	*	U+002A
  ['\uFF0A', '\u002A'],
  // 0x2B	＋	U+FF0B	+	U+002B
  ['\uFF0B', '\u002B'],
  // 0x2C	，	U+FF0C	,	U+002C
  ['\uFF0C', '\u002C'],
  // 0x2D	－	U+FF0D	-	U+002D
  ['\uFF0D', '\u002D'],
  // 0x2E	．	U+FF0E	.	U+002E
  ['\uFF0E', '\u002E'],
  // 0x2F	／	U+FF0F	/	U+002F
  ['\uFF0F', '\u002F'],
] as const
const asciiNumber = [
  // 0x30	０	U+FF10	0	U+0030
  ['\uFF10', '\u0030'],
  // 0x31	１	U+FF11	1	U+0031
  ['\uFF11', '\u0031'],
  // 0x32	２	U+FF12	2	U+0032
  ['\uFF12', '\u0032'],
  // 0x33	３	U+FF13	3	U+0033
  ['\uFF13', '\u0033'],
  // 0x34	４	U+FF14	4	U+0034
  ['\uFF14', '\u0034'],
  // 0x35	５	U+FF15	5	U+0035
  ['\uFF15', '\u0035'],
  // 0x36	６	U+FF16	6	U+0036
  ['\uFF16', '\u0036'],
  // 0x37	７	U+FF17	7	U+0037
  ['\uFF17', '\u0037'],
  // 0x38	８	U+FF18	8	U+0038
  ['\uFF18', '\u0038'],
  // 0x39	９	U+FF19	9	U+0039
  ['\uFF19', '\u0039'],
] as const
const asciiSymbol2 = [
  // 0x3A	：	U+FF1A	:	U+003A
  ['\uFF1A', '\u003A'],
  // 0x3B	；	U+FF1B	;	U+003B
  ['\uFF1B', '\u003B'],
  // 0x3C	＜	U+FF1C	<	U+003C
  ['\uFF1C', '\u003C'],
  // 0x3D	＝	U+FF1D	=	U+003D
  ['\uFF1D', '\u003D'],
  // 0x3E	＞	U+FF1E	>	U+003E
  ['\uFF1E', '\u003E'],
  // 0x3F	？	U+FF1F	?	U+003F
  ['\uFF1F', '\u003F'],
  // 0x40	＠	U+FF20	@	U+0040
  ['\uFF20', '\u0040'],
] as const
const asciiAlphabet1 = [
  // 0x41	Ａ	U+FF21	A	U+0041
  ['\uFF21', '\u0041'],
  // 0x42	Ｂ	U+FF22	B	U+0042
  ['\uFF22', '\u0042'],
  // 0x43	Ｃ	U+FF23	C	U+0043
  ['\uFF23', '\u0043'],
  // 0x44	Ｄ	U+FF24	D	U+0044
  ['\uFF24', '\u0044'],
  // 0x45	Ｅ	U+FF25	E	U+0045
  ['\uFF25', '\u0045'],
  // 0x46	Ｆ	U+FF26	F	U+0046
  ['\uFF26', '\u0046'],
  // 0x47	Ｇ	U+FF27	G	U+0047
  ['\uFF27', '\u0047'],
  // 0x48	Ｈ	U+FF28	H	U+0048
  ['\uFF28', '\u0048'],
  // 0x49	Ｉ	U+FF29	I	U+0049
  ['\uFF29', '\u0049'],
  // 0x4A	Ｊ	U+FF2A	J	U+004A
  ['\uFF2A', '\u004A'],
  // 0x4B	Ｋ	U+FF2B	K	U+004B
  ['\uFF2B', '\u004B'],
  // 0x4C	Ｌ	U+FF2C	L	U+004C
  ['\uFF2C', '\u004C'],
  // 0x4D	Ｍ	U+FF2D	M	U+004D
  ['\uFF2D', '\u004D'],
  // 0x4E	Ｎ	U+FF2E	N	U+004E
  ['\uFF2E', '\u004E'],
  // 0x4F	Ｏ	U+FF2F	O	U+004F
  ['\uFF2F', '\u004F'],
  // 0x50	Ｐ	U+FF30	P	U+0050
  ['\uFF30', '\u0050'],
  // 0x51	Ｑ	U+FF31	Q	U+0051
  ['\uFF31', '\u0051'],
  // 0x52	Ｒ	U+FF32	R	U+0052
  ['\uFF32', '\u0052'],
  // 0x53	Ｓ	U+FF33	S	U+0053
  ['\uFF33', '\u0053'],
  // 0x54	Ｔ	U+FF34	T	U+0054
  ['\uFF34', '\u0054'],
  // 0x55	Ｕ	U+FF35	U	U+0055
  ['\uFF35', '\u0055'],
  // 0x56	Ｖ	U+FF36	V	U+0056
  ['\uFF36', '\u0056'],
  // 0x57	Ｗ	U+FF37	W	U+0057
  ['\uFF37', '\u0057'],
  // 0x58	Ｘ	U+FF38	X	U+0058
  ['\uFF38', '\u0058'],
  // 0x59	Ｙ	U+FF39	Y	U+0059
  ['\uFF39', '\u0059'],
  // 0x5A	Ｚ	U+FF3A	Z	U+005A
  ['\uFF3A', '\u005A'],
] as const
const asciiSymbol3 = [
  // 0x5B	［	U+FF3B	[	U+005B
  ['\uFF3B', '\u005B'],
  // 0x5C	＼	U+FF3C		U+005C
  ['\uFF3C', '\u005C'],
  // 0x5D	］	U+FF3D	]	U+005D
  ['\uFF3D', '\u005D'],
  // 0x5E	＾	U+FF3E	^	U+005E
  ['\uFF3E', '\u005E'],
  // 0x5F	＿	U+FF3F	_	U+005F
  ['\uFF3F', '\u005F'],
  // 0x60	｀	U+FF40	`	U+0060
  ['\uFF40', '\u0060'],
] as const
const asciiAlphabet2 = [
  // 0x61	ａ	U+FF41	a	U+0061
  ['\uFF41', '\u0061'],
  // 0x62	ｂ	U+FF42	b	U+0062
  ['\uFF42', '\u0062'],
  // 0x63	ｃ	U+FF43	c	U+0063
  ['\uFF43', '\u0063'],
  // 0x64	ｄ	U+FF44	d	U+0064
  ['\uFF44', '\u0064'],
  // 0x65	ｅ	U+FF45	e	U+0065
  ['\uFF45', '\u0065'],
  // 0x66	ｆ	U+FF46	f	U+0066
  ['\uFF46', '\u0066'],
  // 0x67	ｇ	U+FF47	g	U+0067
  ['\uFF47', '\u0067'],
  // 0x68	ｈ	U+FF48	h	U+0068
  ['\uFF48', '\u0068'],
  // 0x69	ｉ	U+FF49	i	U+0069
  ['\uFF49', '\u0069'],
  // 0x6A	ｊ	U+FF4A	j	U+006A
  ['\uFF4A', '\u006A'],
  // 0x6B	ｋ	U+FF4B	k	U+006B
  ['\uFF4B', '\u006B'],
  // 0x6C	ｌ	U+FF4C	l	U+006C
  ['\uFF4C', '\u006C'],
  // 0x6D	ｍ	U+FF4D	m	U+006D
  ['\uFF4D', '\u006D'],
  // 0x6E	ｎ	U+FF4E	n	U+006E
  ['\uFF4E', '\u006E'],
  // 0x6F	ｏ	U+FF4F	o	U+006F
  ['\uFF4F', '\u006F'],
  // 0x70	ｐ	U+FF50	p	U+0070
  ['\uFF50', '\u0070'],
  // 0x71	ｑ	U+FF51	q	U+0071
  ['\uFF51', '\u0071'],
  // 0x72	ｒ	U+FF52	r	U+0072
  ['\uFF52', '\u0072'],
  // 0x73	ｓ	U+FF53	s	U+0073
  ['\uFF53', '\u0073'],
  // 0x74	ｔ	U+FF54	t	U+0074
  ['\uFF54', '\u0074'],
  // 0x75	ｕ	U+FF55	u	U+0075
  ['\uFF55', '\u0075'],
  // 0x76	ｖ	U+FF56	v	U+0076
  ['\uFF56', '\u0076'],
  // 0x77	ｗ	U+FF57	w	U+0077
  ['\uFF57', '\u0077'],
  // 0x78	ｘ	U+FF58	x	U+0078
  ['\uFF58', '\u0078'],
  // 0x79	ｙ	U+FF59	y	U+0079
  ['\uFF59', '\u0079'],
  // 0x7A	ｚ	U+FF5A	z	U+007A
  ['\uFF5A', '\u007A'],
] as const
const asciiSymbol4 = [
  // 0x7B	｛	U+FF5B	{	U+007B
  ['\uFF5B', '\u007B'],
  // 0x7C	｜	U+FF5C	|	U+007C
  ['\uFF5C', '\u007C'],
  // 0x7D	｝	U+FF5D	}	U+007D
  ['\uFF5D', '\u007D'],
  // 0x7E	～	U+FF5E	~	U+007E
  ['\uFF5E', '\u007E'],
] as const
// 日文字符
// 半形字符与全形字符的比较（日文字符）
// JIS X 0201	半形字符	Unicode	全形字符	Unicode
const jis0201Symbol = [
  // 0xA1	｡	U+FF61	。	U+3002
  ['\u3002', '\uFF61'],
  // 0xA2	｢	U+FF62	「	U+300C
  ['\u300C', '\uFF62'],
  // 0xA3	｣	U+FF63	」	U+300D
  ['\u300D', '\uFF63'],
  // 0xA4	､	U+FF64	、	U+3001
  ['\u3001', '\uFF64'],
  // 0xA5	･	U+FF65	・	U+30FB
  ['\u30FB', '\uFF65'],
] as const
const jis0201Kana = [
  // 0xA6	ｦ	U+FF66	ヲ	U+30F2
  ['\u30F2', '\uFF66'],
  // 0xA7	ｧ	U+FF67	ァ	U+30A1
  ['\u30A1', '\uFF67'],
  // 0xA8	ｨ	U+FF68	ィ	U+30A3
  ['\u30A3', '\uFF68'],
  // 0xA9	ｩ	U+FF69	ゥ	U+30A5
  ['\u30A5', '\uFF69'],
  // 0xAA	ｪ	U+FF6A	ェ	U+30A7
  ['\u30A7', '\uFF6A'],
  // 0xAB	ｫ	U+FF6B	ォ	U+30A9
  ['\u30A9', '\uFF6B'],
  // 0xAC	ｬ	U+FF6C	ャ	U+30E3
  ['\u30E3', '\uFF6C'],
  // 0xAD	ｭ	U+FF6D	ュ	U+30E5
  ['\u30E5', '\uFF6D'],
  // 0xAE	ｮ	U+FF6E	ョ	U+30E7
  ['\u30E7', '\uFF6E'],
  // 0xAF	ｯ	U+FF6F	ッ	U+30C3
  ['\u30C3', '\uFF6F'],
  // 0xB0	ｰ	U+FF70	ー	U+30FC
  ['\u30FC', '\uFF70'],
  // 0xB1	ｱ	U+FF71	ア	U+30A2
  ['\u30A2', '\uFF71'],
  // 0xB2	ｲ	U+FF72	イ	U+30A4
  ['\u30A4', '\uFF72'],
  // 0xB3	ｳ	U+FF73	ウ	U+30A6
  ['\u30A6', '\uFF73'],
  // 0xB4	ｴ	U+FF74	エ	U+30A8
  ['\u30A8', '\uFF74'],
  // 0xB5	ｵ	U+FF75	オ	U+30AA
  ['\u30AA', '\uFF75'],
  // 0xB6	ｶ	U+FF76	カ	U+30AB
  ['\u30AB', '\uFF76'],
  // 0xB7	ｷ	U+FF77	キ	U+30AD
  ['\u30AD', '\uFF77'],
  // 0xB8	ｸ	U+FF78	ク	U+30AF
  ['\u30AF', '\uFF78'],
  // 0xB9	ｹ	U+FF79	ケ	U+30B1
  ['\u30B1', '\uFF79'],
  // 0xBA	ｺ	U+FF7A	コ	U+30B3
  ['\u30B3', '\uFF7A'],
  // 0xBB	ｻ	U+FF7B	サ	U+30B5
  ['\u30B5', '\uFF7B'],
  // 0xBC	ｼ	U+FF7C	シ	U+30B7
  ['\u30B7', '\uFF7C'],
  // 0xBD	ｽ	U+FF7D	ス	U+30B9
  ['\u30B9', '\uFF7D'],
  // 0xBE	ｾ	U+FF7E	セ	U+30BB
  ['\u30BB', '\uFF7E'],
  // 0xBF	ｿ	U+FF7F	ソ	U+30BD
  ['\u30BD', '\uFF7F'],
  // 0xC0	ﾀ	U+FF80	タ	U+30BF
  ['\u30BF', '\uFF80'],
  // 0xC1	ﾁ	U+FF81	チ	U+30C1
  ['\u30C1', '\uFF81'],
  // 0xC2	ﾂ	U+FF82	ツ	U+30C4
  ['\u30C4', '\uFF82'],
  // 0xC3	ﾃ	U+FF83	テ	U+30C6
  ['\u30C6', '\uFF83'],
  // 0xC4	ﾄ	U+FF84	ト	U+30C8
  ['\u30C8', '\uFF84'],
  // 0xC5	ﾅ	U+FF85	ナ	U+30CA
  ['\u30CA', '\uFF85'],
  // 0xC6	ﾆ	U+FF86	ニ	U+30CB
  ['\u30CB', '\uFF86'],
  // 0xC7	ﾇ	U+FF87	ヌ	U+30CC
  ['\u30CC', '\uFF87'],
  // 0xC8	ﾈ	U+FF88	ネ	U+30CD
  ['\u30CD', '\uFF88'],
  // 0xC9	ﾉ	U+FF89	ノ	U+30CE
  ['\u30CE', '\uFF89'],
  // 0xCA	ﾊ	U+FF8A	ハ	U+30CF
  ['\u30CF', '\uFF8A'],
  // 0xCB	ﾋ	U+FF8B	ヒ	U+30D2
  ['\u30D2', '\uFF8B'],
  // 0xCC	ﾌ	U+FF8C	フ	U+30D5
  ['\u30D5', '\uFF8C'],
  // 0xCD	ﾍ	U+FF8D	ヘ	U+30D8
  ['\u30D8', '\uFF8D'],
  // 0xCE	ﾎ	U+FF8E	ホ	U+30DB
  ['\u30DB', '\uFF8E'],
  // 0xCF	ﾏ	U+FF8F	マ	U+30DE
  ['\u30DE', '\uFF8F'],
  // 0xD0	ﾐ	U+FF90	ミ	U+30DF
  ['\u30DF', '\uFF90'],
  // 0xD1	ﾑ	U+FF91	ム	U+30E0
  ['\u30E0', '\uFF91'],
  // 0xD2	ﾒ	U+FF92	メ	U+30E1
  ['\u30E1', '\uFF92'],
  // 0xD3	ﾓ	U+FF93	モ	U+30E2
  ['\u30E2', '\uFF93'],
  // 0xD4	ﾔ	U+FF94	ヤ	U+30E4
  ['\u30E4', '\uFF94'],
  // 0xD5	ﾕ	U+FF95	ユ	U+30E6
  ['\u30E6', '\uFF95'],
  // 0xD6	ﾖ	U+FF96	ヨ	U+30E8
  ['\u30E8', '\uFF96'],
  // 0xD7	ﾗ	U+FF97	ラ	U+30E9
  ['\u30E9', '\uFF97'],
  // 0xD8	ﾘ	U+FF98	リ	U+30EA
  ['\u30EA', '\uFF98'],
  // 0xD9	ﾙ	U+FF99	ル	U+30EB
  ['\u30EB', '\uFF99'],
  // 0xDA	ﾚ	U+FF9A	レ	U+30EC
  ['\u30EC', '\uFF9A'],
  // 0xDB	ﾛ	U+FF9B	ロ	U+30ED
  ['\u30ED', '\uFF9B'],
  // 0xDC	ﾜ	U+FF9C	ワ	U+30EF
  ['\u30EF', '\uFF9C'],
  // 0xDD	ﾝ	U+FF9D	ン	U+30F3
  ['\u30F3', '\uFF9D'],
  // 0xDE	ﾞ	U+FF9E	゛	U+309B
  ['\u309B', '\uFF9E'],
  // 0xDF	ﾟ	U+FF9F	゜	U+309C
  ['\u309C', '\uFF9F'],
] as const
// 韩文字符
// 半形字符与全形字符的比较（韩文字符）
// 半形字符	Unicode	全形字符	Unicode
const unicodeHangul = [
  // ﾠ	U+FFA0	ㅤ	U+3164
  ['\u3164', '\uFFA0'],
  // ﾡ	U+FFA1	ㄱ	U+3131
  ['\u3131', '\uFFA1'],
  // ﾢ	U+FFA2	ㄲ	U+3132
  ['\u3132', '\uFFA2'],
  // ﾣ	U+FFA3	ㄳ	U+3133
  ['\u3133', '\uFFA3'],
  // ﾤ	U+FFA4	ㄴ	U+3134
  ['\u3134', '\uFFA4'],
  // ﾥ	U+FFA5	ㄵ	U+3135
  ['\u3135', '\uFFA5'],
  // ﾦ	U+FFA6	ㄶ	U+3136
  ['\u3136', '\uFFA6'],
  // ﾧ	U+FFA7	ㄷ	U+3137
  ['\u3137', '\uFFA7'],
  // ﾨ	U+FFA8	ㄸ	U+3138
  ['\u3138', '\uFFA8'],
  // ﾩ	U+FFA9	ㄹ	U+3139
  ['\u3139', '\uFFA9'],
  // ﾪ	U+FFAA	ㄺ	U+313A
  ['\u313A', '\uFFAA'],
  // ﾫ	U+FFAB	ㄻ	U+313B
  ['\u313B', '\uFFAB'],
  // ﾬ	U+FFAC	ㄼ	U+313C
  ['\u313C', '\uFFAC'],
  // ﾭ	U+FFAD	ㄽ	U+313D
  ['\u313D', '\uFFAD'],
  // ﾮ	U+FFAE	ㄾ	U+313E
  ['\u313E', '\uFFAE'],
  // ﾯ	U+FFAF	ㄿ	U+313F
  ['\u313F', '\uFFAF'],
  // ﾰ	U+FFB0	ㅀ	U+3140
  ['\u3140', '\uFFB0'],
  // ﾱ	U+FFB1	ㅁ	U+3141
  ['\u3141', '\uFFB1'],
  // ﾲ	U+FFB2	ㅂ	U+3142
  ['\u3142', '\uFFB2'],
  // ﾳ	U+FFB3	ㅃ	U+3143
  ['\u3143', '\uFFB3'],
  // ﾴ	U+FFB4	ㅄ	U+3144
  ['\u3144', '\uFFB4'],
  // ﾵ	U+FFB5	ㅅ	U+3145
  ['\u3145', '\uFFB5'],
  // ﾶ	U+FFB6	ㅆ	U+3146
  ['\u3146', '\uFFB6'],
  // ﾷ	U+FFB7	ㅇ	U+3147
  ['\u3147', '\uFFB7'],
  // ﾸ	U+FFB8	ㅈ	U+3148
  ['\u3148', '\uFFB8'],
  // ﾹ	U+FFB9	ㅉ	U+3149
  ['\u3149', '\uFFB9'],
  // ﾺ	U+FFBA	ㅊ	U+314A
  ['\u314A', '\uFFBA'],
  // ﾻ	U+FFBB	ㅋ	U+314B
  ['\u314B', '\uFFBB'],
  // ﾼ	U+FFBC	ㅌ	U+314C
  ['\u314C', '\uFFBC'],
  // ﾽ	U+FFBD	ㅍ	U+314D
  ['\u314D', '\uFFBD'],
  // ﾾ	U+FFBE	ㅎ	U+314E
  ['\u314E', '\uFFBE'],
  // ￂ	U+FFC2	ㅏ	U+314F
  ['\u314F', '\uFFC2'],
  // ￃ	U+FFC3	ㅐ	U+3150
  ['\u3150', '\uFFC3'],
  // ￄ	U+FFC4	ㅑ	U+3151
  ['\u3151', '\uFFC4'],
  // ￅ	U+FFC5	ㅒ	U+3152
  ['\u3152', '\uFFC5'],
  // ￆ	U+FFC6	ㅓ	U+3153
  ['\u3153', '\uFFC6'],
  // ￇ	U+FFC7	ㅔ	U+3154
  ['\u3154', '\uFFC7'],
  // ￊ	U+FFCA	ㅕ	U+3155
  ['\u3155', '\uFFCA'],
  // ￋ	U+FFCB	ㅖ	U+3156
  ['\u3156', '\uFFCB'],
  // ￌ	U+FFCC	ㅗ	U+3157
  ['\u3157', '\uFFCC'],
  // ￍ	U+FFCD	ㅘ	U+3158
  ['\u3158', '\uFFCD'],
  // ￎ	U+FFCE	ㅙ	U+3159
  ['\u3159', '\uFFCE'],
  // ￏ	U+FFCF	ㅚ	U+315A
  ['\u315A', '\uFFCF'],
  // ￒ	U+FFD2	ㅛ	U+315B
  ['\u315B', '\uFFD2'],
  // ￓ	U+FFD3	ㅜ	U+315C
  ['\u315C', '\uFFD3'],
  // ￔ	U+FFD4	ㅝ	U+315D
  ['\u315D', '\uFFD4'],
  // ￕ	U+FFD5	ㅞ	U+315E
  ['\u315E', '\uFFD5'],
  // ￖ	U+FFD6	ㅟ	U+315F
  ['\u315F', '\uFFD6'],
  // ￗ	U+FFD7	ㅠ	U+3160
  ['\u3160', '\uFFD7'],
  // ￚ	U+FFDA	ㅡ	U+3161
  ['\u3161', '\uFFDA'],
  // ￛ	U+FFDB	ㅢ	U+3162
  ['\u3162', '\uFFDB'],
  // ￜ	U+FFDC	ㅣ	U+3163
  ['\u3163', '\uFFDC'],
] as const
// 其他字符
// 半形字符与全形字符的比较（其他字符）
// 半形字符	Unicode	全形字符	Unicode
const unicodeOtherSymbol = [
  // ⦅	U+2985	｟	U+FF5F
  ['\uFF5F', '\u2985'],
  // ⦆	U+2986	｠	U+FF60
  ['\uFF60', '\u2986'],
  // ¢	U+00A2	￠	U+FFE0
  ['\uFFE0', '\u00A2'],
  // £	U+00A3	￡	U+FFE1
  ['\uFFE1', '\u00A3'],
  // ¬	U+00AC	￢	U+FFE2
  ['\uFFE2', '\u00AC'],
  // ¯	U+00AF	￣	U+FFE3
  ['\uFFE3', '\u00AF'],
  // ¦	U+00A6	￤	U+FFE4
  ['\uFFE4', '\u00A6'],
  // ¥	U+00A5	￥	U+FFE5
  ['\uFFE5', '\u00A5'],
  // ₩	U+20A9	￦	U+FFE6
  ['\uFFE6', '\u20A9'],
  // ￨	U+FFE8	│	U+2502
  ['\u2502', '\uFFE8'],
  // ￩	U+FFE9	←	U+2190
  ['\u2190', '\uFFE9'],
  // ￪	U+FFEA	↑	U+2191
  ['\u2191', '\uFFEA'],
  // ￫	U+FFEB	→	U+2192
  ['\u2192', '\uFFEB'],
  // ￬	U+FFEC	↓	U+2193
  ['\u2193', '\uFFEC'],
  // ￭	U+FFED	■	U+25A0
  ['\u25A0', '\uFFED'],
  // ￮	U+FFEE	○	U+25CB
  ['\u25CB', '\uFFEE'],
  // ⟨	U+27E8	〈	U+3008
  ['\u3008', '\u27E8'],
  // ⟩	U+27E9	〉	U+3009
  ['\u3009', '\u27E9'],
  // ⟪	U+27EA	《	U+300A
  ['\u300A', '\u27EA'],
  // ⟫	U+27EB	》	U+300B
  ['\u300B', '\u27EB'],
  // ⟬	U+27EC	〘	U+3018
  ['\u3018', '\u27EC'],
  // ⟭	U+27ED	〙	U+3019
  ['\u3019', '\u27ED'],
  // ⟦	U+27E6	〚	U+301A
  ['\u301A', '\u27E6'],
  // ⟧	U+27E7	〛	U+301B
  ['\u301B', '\u27E7'],
] as const

export const map = {
  'ascii.space': asciiSpace,
  'ascii.symbol': [...asciiSymbol1, ...asciiSymbol2, ...asciiSymbol3, ...asciiSymbol4],
  'ascii.number': asciiNumber,
  'ascii.alphabet': [...asciiAlphabet1, ...asciiAlphabet2],
  'jis0201.symbol': jis0201Symbol,
  'jis0201.kana': jis0201Kana,
  'unicode.hangul': unicodeHangul,
  'unicode.symbol': unicodeOtherSymbol,
} as const

export const kana = {
  ZE: { start: 0xff01, end: 0xff5e }, // 全角英数
  HE: { start: 0x0021, end: 0x007e }, // 半角英数
  HG: { start: 0x3041, end: 0x3096 }, // ひらがな
  KK: { start: 0x30a1, end: 0x30f6 }, // カタカナ

  HS: { patterns: [[/(\s|\u00A0)/g, { ZS: '　' }]] }, // 半角スペース
  ZS: { patterns: [[/(\u3000)/g, { HS: ' ' }]] }, //全角スペース

  HK: {
    regexp: /([\uff66-\uff9c]\uff9e)|([\uff8a-\uff8e]\uff9f)|([\uff61-\uff9f])/g, // 半角カナ
    // prettier-ignore
    list: ['｡', '｢', '｣', '､', '･', 'ｦ', 'ｧ', 'ｨ', 'ｩ', 'ｪ', 'ｫ', 'ｬ', 'ｭ', 'ｮ', 'ｯ', 'ｰ', 'ｱ', 'ｲ', 'ｳ', 'ｴ', 'ｵ', 'ｶ', 'ｷ', 'ｸ', 'ｹ', 'ｺ', 'ｻ', 'ｼ', 'ｽ', 'ｾ', 'ｿ', 'ﾀ', 'ﾁ', 'ﾂ', 'ﾃ', 'ﾄ', 'ﾅ', 'ﾆ', 'ﾇ', 'ﾈ', 'ﾉ', 'ﾊ', 'ﾋ', 'ﾌ', 'ﾍ', 'ﾎ', 'ﾏ', 'ﾐ', 'ﾑ', 'ﾒ', 'ﾓ', 'ﾔ', 'ﾕ', 'ﾖ', 'ﾗ', 'ﾘ', 'ﾙ', 'ﾚ', 'ﾛ', 'ﾜ', 'ﾝ', 'ﾞ', 'ﾟ', 'ｦﾞ', 'ｳﾞ', 'ｶﾞ', 'ｷﾞ', 'ｸﾞ', 'ｹﾞ', 'ｺﾞ', 'ｻﾞ', 'ｼﾞ', 'ｽﾞ', 'ｾﾞ', 'ｿﾞ', 'ﾀﾞ', 'ﾁﾞ', 'ﾂﾞ', 'ﾃﾞ', 'ﾄﾞ', 'ﾊﾞ', 'ﾊﾟ', 'ﾋﾞ', 'ﾋﾟ', 'ﾌﾞ', 'ﾌﾟ', 'ﾍﾞ', 'ﾍﾟ', 'ﾎﾞ', 'ﾎﾟ', 'ﾜﾞ'],
  },
  ZK: {
    regexp: /([\u30a1-\u30f6])/g, //全角カナ (半角カナ変換用)
    // prettier-ignore
    list: ['。', '「', '」', '、', '・', 'ヲ', 'ァ', 'ィ', 'ゥ', 'ェ', 'ォ', 'ャ', 'ュ', 'ョ', 'ッ', 'ー', 'ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ', 'タ', 'チ', 'ツ', 'テ', 'ト', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ', 'マ', 'ミ', 'ム', 'メ', 'モ', 'ヤ', 'ユ', 'ヨ', 'ラ', 'リ', 'ル', 'レ', 'ロ', 'ワ', 'ン', '゛', '゜', 'ヺ', 'ヴ', 'ガ', 'ギ', 'グ', 'ゲ', 'ゴ', 'ザ', 'ジ', 'ズ', 'ゼ', 'ゾ', 'ダ', 'ヂ', 'ヅ', 'デ', 'ド', 'バ', 'パ', 'ビ', 'ピ', 'ブ', 'プ', 'ベ', 'ペ', 'ボ', 'ポ', 'ヷ'],
  },
} as const
