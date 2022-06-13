const VehicleService = require('../services/vehicleService');
const arrangeByDecade = require('../utils/arrangeByDecade');
const arrangeByManufacturer = require('../utils/arrangeByManufacturer')
const Controller = {
    addVehicle,
    findVehicles,
    findVehicleById,
    updateVehicle,
    deleteById,
    getQtdByDecades,
    getQtdByManufacturer
}

function addVehicle(req, res) {
    let gig = req.body;
    VehicleService.create(gig).
        then((data) => {
            res.json({
                message: "Veículo adicionado com sucesso.",
                instance: data
            });
        })
        .catch((error) => {
            console.log(error);
        });
}

function findVehicleById(req, res) {
    VehicleService.findById(req.params.id).
        then((data) => {
            if(data) {
                res.json(data);
                return
            }
            res.status(404).json({ message: "Veículo não encontrado." })
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    VehicleService.deleteById(req.params.id).
        then((data) => {
            if(data){
                res.status(200).json({
                    message: "Veículo removido com sucesso.",
                })
                return
            }
            res.status(404).json({ message: "Veículo não encontrado." })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateVehicle(req, res) {
    VehicleService.update(req.body, req.params.id).
        then((data) => {
            if(data[0]) {
                res.status(200).json({
                    message: "Veículo atulizado com sucesso.",
                    instance: req.body
                })
                return
            }
            res.status(404).json({ message: "Veículo não encontrado." })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findVehicles(_, res) {
    VehicleService.getAll().
        then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function getQtdByDecades(_, res) {
    VehicleService.getAll().
        then((data) => {
            res.json(arrangeByDecade(data))
        })
        .catch((error) => {
            console.log(error);
        });
}

function getQtdByManufacturer(_, res) {
    VehicleService.getAll().
        then((data) => {
            res.json(arrangeByManufacturer(data))
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = Controller;