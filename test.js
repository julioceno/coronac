function validateAge(day, month, year) {
    const date = new Date;

    const currentYear = date.getFullYear()
    const currentMonth = date.getMonth() + 1
    const currentDay = date.getDate()

    let currentYearOld = currentYear - year

    if (currentMonth < month || currentMonth === month && currentDay < day) currentYearOld --

    return currentYearOld
}

console.log(validateAge(30, 12, 1980))