const json = require('../manufacturers.json')

function validateManufacturer(req, res, next) {
    if (json.list.includes(req.body.manufacturer.toLowerCase())) {
        next()
        return
    }
    
    res.status(422).json({ message: "Fabricante inválido."})
}


module.exports = { validateManufacturer }