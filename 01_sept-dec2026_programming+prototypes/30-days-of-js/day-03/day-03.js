// Check if type of '10' is equal to 10
'10' === 10 // false

// 3 truthy values
Boolean([])
Boolean(Infinity)
Boolean('poop')

// Find the length of python and jargon and make a falsy comparison statement.
'python'.length != 'jargon'.length

// What is the year today?
new Date().getFullYear()

// What is the month today as a number?
new Date().getMonth()

// What is the date today?
new Date().getDate()

// What is the day today as a number?
new Date().getDay()
new Date().getHours()

// Find out the numbers of seconds elapsed from January 1, 1970 to now.
Math.floor(new Date().getTime() / 1000) // 1789653531

// Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
let base = prompt('Enter base:')
let height = prompt('Enter height:')
let product = base * height * 0.5
alert(`The area is ${product}`)

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
let side_a = +prompt('Enter side A:')
let side_b = +prompt('Enter side B:')
let side_c = +prompt('Enter side C:')
let per = side_a + side_b + side_c
alert(`Perimeter is ${per}`)


// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
let length = +prompt('Enter length:')
let width = +prompt('Enter width:')
let per = (length + width) * 2
let area = length * width
alert(`Perimeter: ${per}; area: ${area}`)


// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
let radius = +prompt('Enter radius:')
let area = Math.floor(radius * radius *  Math.PI)
let circumference = Math.floor(radius * 2 * Math.PI)
alert(`area: ${area}; circumference: ${circumference}`)

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
let hours = +prompt('Enter hours:')
let payrate = +prompt('Enter payrate:')
let wage = hours * payrate
alert(`\$${wage}`)

// If the length of your name is greater than 7 say, your name is long else say your name is short.
'Valerii'.length > 7 ? 'long' : 'short'

// Compare your first name length and your family name length.
let name = 'Valerii', surname = 'Shevchenko'
name.length > surname.length ? `Your name ${name} is longer than surname ${surname}` : `Your surname ${surname} is longer than name ${name}`

// Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 32, yourAge = 63
console.log(`You are ${yourAge - myAge} years older that me`)


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
let year = +prompt('Enter birth year:')
let age = new Date().getFullYear() - year
age > 18 
	? alert(`You are ${age} and enough to drive.`) 
	: alert(`You are ${age}. You can drive in ${18 - age} years.`)

// Create a human readable time format where 7 → 07, etc
let now = new Date()
let year = now.getFullYear()
let month = now.getMonth() + 1
let day = now.getDate()
let hour = now.getHours()
let minutes = now.getMinutes()

const zeroAdder = (num) => num < 10 ? '0' + num : num

console.log(`${zeroAdder(day)}-${zeroAdder(month)}-${year} ${zeroAdder(hour)}:${zeroAdder(minutes)}`)


// Check if the season is Autumn, Winter, Spring or Summer depending on input text
const sorter = () => {
    let month = prompt('Enter month:')
    switch(true) {
        case month == 'September' 
            || month == 'October' 
            || month == 'November': 
            return 'Autumn'
        case month == 'December' 
            || month == 'January'
            || month == 'February': 
            return 'Winter' 
        case month == 'March'
            || month == 'April'
            || month == 'May': 
            return 'Spring'
        case month == 'June' 
            || month == 'July'
            || month == 'August': 
            return 'Summer'
        default: return 'Enter MONTH'
    }
}


// Write a program which tells the number of days in a month.
const dayTeller = () => {
    let month = prompt('Enter a month:').toLowerCase()
    let longMonths = ['january', 'march', 'may', 'july', 'august','october', 'december']
    let shortMonths = ['april', 'june', 'september', 'november', ]
    switch(true) {
        case longMonths.includes(month):
            return '31 days'
        case month == 'february' :
            return '28 days'
        case shortMonths.includes(month): 
            return '30 days'
    }
}
