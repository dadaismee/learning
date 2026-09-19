let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substr(3,21))
console.log(challenge.substr(0,3))
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))

let faang = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(faang.split(','))

console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')

console.log('\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"')

console.log(Math.ceil(parseFloat(9.8)))

let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon')) //true 

// random number generator 50-100
console.log(100 - Math.floor(Math.random() * 51))

// random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 256))
// «правильное решение»:
// Math.floor(Math.random() * 51) + 50
// Нужно ПРИБАВЛЯТЬ, а не вычитать, потому что так легче читать и так не запутаешься в границах

// Access the 'JavaScript' string characters using a random number.
let poop = 'JavaScript'
poop[Math.floor(Math.random() * poop.length)]
// не нужно прибавлять +1 к length, потому что массив строки начинается с 0

// print the following pattern
// 1 1 1 1 1
// 2 1 2 4 8
// 3 1 3 9 27
// 4 1 4 16 64
// 5 1 5 25 125
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125')

// slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let string = 'You cannot end a sentence with because because because is a conjunction'
let word = 'because '
string.substr(string.indexOf(word), word.repeat(3).trim().length)

// Count the number of word love in this sentence.
let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
sentence.match(/love/gi).length // 3

// Calculate the total annual income of the person by extracting the numbers from the following text. 
let sentence = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let nums = sentence.match(/\d+/g)
+nums[0] * 12 + +nums[1] + +nums[2] * 12 //250 000

// ❌ — не решил. Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
