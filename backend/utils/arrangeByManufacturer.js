const keySet = (data) => {
    const keys = new Set(data.map((el) => (el.manufacturer).toUpperCase()))
    return Array.from(keys)
}

const arrangeByManufacturer = (data) => {
    const manufacturers = keySet(data)
    return manufacturers.reduce((prev, current) => {
        const filteredManufacturers = data.filter((key) => (key.manufacturer).toUpperCase() === current)
        return [
            ...prev,
            {[current]: filteredManufacturers.length}
        ]
    }, [])
    
}

module.exports = arrangeByManufacturer