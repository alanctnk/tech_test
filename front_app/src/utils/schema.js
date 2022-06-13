import * as Yup from 'yup'

const message = "Campo obrigatório"

export const vehicleSchema = Yup.object().shape({
    name: Yup.string().required(message),
    manufacturer: Yup.string().required(message),
    release_year: Yup.string().required(message),
    description: Yup.string().required(message)
})