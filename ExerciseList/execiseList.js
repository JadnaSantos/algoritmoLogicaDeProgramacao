const sayWelcome = (name) => {
    const greeting = 'Hi'

    return `${greeting} ${name}`
}

console.log(sayWelcome('Jadna!'))


const convertAgeInYearsToDaysOne = (ageInYears) => {
   const dayOfYear = 365

   return dayOfYear * ageInYears
}

const convertAgeInYearsToDays = (dayOfYear, ageInYears) => {
    return dayOfYear * ageInYears
}

console.log(convertAgeInYearsToDays(365, 25))


const calculateSalary = (workedDays, salary) => {
    const salaryWork =  workedDays * salary

    return `Salary equal to R$ ${salaryWork}`
}


const nameOfMonth = (number) => {
    switch (number) {
        case 1: 
            return 'January'
        case 2: 
            return 'February'
        case 3: 
            return 'March'
        case 4: 
            return 'April'
        case 5: 
            return 'May'
        case 6: 
            return 'Jun'
        case 7: 
            return 'July'
        case 8: 
            return 'August'
        case 9: 
            return 'September'
        case 10: 
            return 'October'
        case 11: 
            return 'November'
        case 12: 
            return 'December'
    }
}

console.log(nameOfMonth(8))


const biggerOrEqual = (one, two) => {
    if (one >= two || one === two) {
        return true
    }
    return false
}

console.log(biggerOrEqual(25, 3))
