const express = require('express');
const router = express.Router();
const VehicleController = require('../controllers/vehicleController');
const VehicleMiddleware = require('../middlewares')
const VehicleValidator = require('../validators')

router.post('/', VehicleValidator.bodySchema, VehicleMiddleware.validateManufacturer, VehicleController.addVehicle);

router.get('/', VehicleController.findVehicles);
router.get('/decades', VehicleController.getQtdByDecades);
router.get('/manufacturers', VehicleController.getQtdByManufacturer);
router.get('/:id', VehicleController.findVehicleById);

router.put('/:id', VehicleValidator.bodySchema, VehicleMiddleware.validateManufacturer, VehicleController.updateVehicle);
router.delete('/:id', VehicleController.deleteById);

module.exports = router;