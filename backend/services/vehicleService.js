const { Vehicle } = require('../models');
const VehicleService = {
    getAll,
    create,
    findById,
    deleteById,
    update
}

async function getAll() {
    return await Vehicle.findAll();
}

async function findById(id) {
    if(isNaN(+id)) {
        return null
    }
    return await Vehicle.findByPk(id);
}

async function deleteById(id) {
    if(isNaN(+id)) {
        return null
    }
    return await Vehicle.destroy({ where: { id: id } });
}

async function create(data) {
    const newVehicle = new Vehicle(data);
    return await newVehicle.save();
}

async function update(vehicle, id) {
    if(isNaN(+id)) {
        return [null]
    }
    const updateVehicle = {
        name: vehicle.name,
        manufacturer: vehicle.manufacturer,
        release_year: vehicle.release_year,
        description: vehicle.description,
        sold: vehicle.sold,
    };
    return await Vehicle.update(updateVehicle, { where: { id: id } });
}
module.exports = VehicleService;