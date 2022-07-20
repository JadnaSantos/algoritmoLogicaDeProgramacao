const showTheDay = ( day, month, year ) => {
    return {
        day,
        month,
        year,
        formatDay() {
            return `${this.day}/ ${this.month}/${this.year}`
        }
    }
}

const dateOne= showTheDay(11,09,2021)
const dateTwo = showTheDay(11,09,2021)
const dateThree =showTheDay(11,09,2021)