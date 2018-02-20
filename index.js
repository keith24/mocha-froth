const crypto = require('crypto')

/* froth
 * num: number of test strings to return
 * max: maximum length of test string
 * opt: options object
 */
exports.froth = function(num, max, opt={
  // Set to true to include tests with...
  none: true, // Empty string
  whitespace: true, // Various whitespace chars
  quotes: true, // Combinations of quotes
  backslashing: true, // Combinations of backslashes
  symbols: true, // Various symbols
  foreign: true, // Foreign chars
  alphanumeric: true, // Ordinary letters and numbers
} ){
  
  let (chars,tests) = []
  
  // Whitespace characters
  if (opt.whitespace) chars.concat([
    ' ', // Space
    '  ', // Tab
    '\n', // Newline
    '\r', // Return
    '\r\n', // Carrage return
  ])
  
  // Quotation characters
  if (opt.quotes) chars.concat([
    '\'', '\'\'', '\'\'\'', // Single quotes
    '"', '""', '"""', // Double quotes
    '`', '``', '```', // Backticks
  ])
  
  // Backslashes
  if (opt.backslashing) chars.concat([
    '\\', '\\\\',
  ])
  
  // Symbols
  if (opt.symbols) chars.concat(
    '°~!@#$%€^&*()-_─=+[]{}|;:,./<>?¿¹²³¼½¬ł€¶ŧ←↓→»«¢„“”·…–'.split('')
  )
  
  // Foreign characters
  if (opt.foreign) chars.concat(
    'ßöäüñáóíúýéâêîôûŷàèìòùảẻỉỏỷÿïøþłĸŋđðſæµёйцукенгшщзхъэждлорпавыфячсмитьбюЁЙЦУКЕНГШЩЗХЪЭЖДЛОРПАВЫФЯЧСМИТЬБЮ'.split('')
  )
  
  // Ordinary letters and numbers
  if (opt.alphanumeric) chars.concat(
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split(''),
  )
  
  const min = (none)? 0 : 1
  
  // Add tests until we have enough tests
  for (let n=0; n<num; n++) {
    // Pick a random number from min to max
    len = Math.floor(Math.random() * (max - min + 1)) + min
    // Create a string of that length
    let s = ''
    for (let l=0; l<len; l++) {
      s += chars[Math.floor(Math.random()*chars.length)]
    }
    // Add that string to the tests
    tests.push(s)
  }
  
  return tests
  
}
