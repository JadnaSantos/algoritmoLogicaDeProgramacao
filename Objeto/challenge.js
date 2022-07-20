const date = {
    day: 1,
    month: 1,
    year: 2022,
    showDay() {
        return `${this.day} /${this.month}/ ${this.year}`;
    }
}

console.log(date.showDay())