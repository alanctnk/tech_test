
const decadeRange = (year) => Math.floor(year / 10) * 10

const decadeSet = (year) => {
    
    const decSet = new Set(year.map(decadeRange))
    return Array.from(decSet)
}

const arrangeByDecade = (data) => {
    const years = data.map(key => key.release_year)
    const decades = decadeSet(years)
    return decades.reduce((prev, current) => {
        const filteredDecs = data.filter((key) => decadeRange(key.release_year) === current)
        return [
            ...prev,
            {[current]: filteredDecs.length}
        ]
    }, [])
    
}

// const yearsData = [{"release_year": 2004}, {"release_year": 1996}, {"release_year": 1990}, {"release_year": 2021}, {"release_year": 1989}, {"release_year": 2000}, {"release_year": 2003}]
// console.log(arrangeByDecade(yearsData))

module.exports = arrangeByDecade