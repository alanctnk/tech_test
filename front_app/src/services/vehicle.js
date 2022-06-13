import { api } from './api'

export const getAllVehicles = async () => await api.get('/')

export const createVehicle = async (data) => await api.post('/', data)

export const deleteVehicle = async (id) => await api.delete(`/${id}`)

export const getVehicleById = async (id) => await api.get(`/${id}`)

export const updateVehicle = async (id, data) => await api.put(`${id}`, data)

export const getQtdByDecade = async () => await api.get('/decades')

export const getQtdByManufacturers = async () => await api.get('/manufacturers')