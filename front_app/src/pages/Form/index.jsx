/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useState, useRef, useMemo } from 'react'
import { Form as Unform } from '@unform/web'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import * as Yup from 'yup'
import moment from 'moment'
import { vehicleSchema } from '../../utils/schema'
import { createVehicle, getVehicleById, updateVehicle } from '../../services/vehicle'
import { Container } from '../../components'
import { TextInput, NumInput, CheckInput, TeaxtAreaInput } from './components'
import { Save } from '../../components'
import 'moment/locale/pt-br'
moment.locale('pt-br')

const FormComp = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const isEdit = useMemo(() => location.pathname !== "/new_vehicle", [location.pathname])
  const [initValues, setInitValues] = useState({})
  const params = useParams()
  const formRef = useRef(null)

  const title = isEdit ? `Veiculo ID: ${params.id}` : "Novo Veiculo"
  const subtitle = isEdit ? `${initValues.name} / ${initValues.manufacturer}` : "Cadastre um novo veículo."

  const handleSubmit = useCallback(async (data, { reset }) => {

    try {
      await vehicleSchema.validate(data, {
        abortEarly: false
      })
      const saveVehicle = isEdit ? updateVehicle(params.id, data) : createVehicle(data)
      toast.promise(saveVehicle, {
        loading: "Salvando . . .",
        success: (data) => {
          navigate("/vehicles")
          return  `${data.data.message}`
        },
        error: (err) => `Erro: ${err.response.data.message}`
      })
      reset()
    } catch (err) {
      if(err instanceof Yup.ValidationError) {
        const errorMessages = {}
        err.inner.forEach(error => {
          errorMessages[error.path] = error.message
        })

        formRef.current.setErrors(errorMessages)
      }
    }
  }, [])

  useEffect(() => {
    if(isEdit) {
      getVehicleById(params.id)
      .then((resp) => setInitValues(resp.data))
      .catch(err => navigate("/not_found"))
    } 
  }, [])
  return (
    <Container title={title} subtitle={subtitle}>
      <Unform ref={formRef} onSubmit={handleSubmit} initialData={initValues} className="form" >
        <div className='grid'>

          <TextInput name="name" className="input" label="Veiculo"/>
          <TextInput name="manufacturer" className="input" label="Fabricante"/>
          <NumInput min="1900" max="2099" step="1" name="release_year" className="input" label="Ano De Fabricação"/>
          <TeaxtAreaInput name="description" className="input" label="Descrição"/>
          <CheckInput name="sold" className="span_half"/>
          <div className="span_half">
            <div style={{
                fontSize: "16px",
                fontWeight: "bolder",
                color: "darkblue",
                marginBottom: "10px"
            }}>Data de cadastro:</div>
            <div>
              {"createdAt" in initValues ? moment(initValues.createdAt).format('LLL') : "-"}
            </div>
          </div>
        </div>
        <button type='submit' className='btn' style={{
          color: '#32de84',
          fontSize: '19px',
          marginTop: '30px',
          alignSelf: 'center'
        }}><Save /> Salvar</button>
      </Unform>
    </Container>
  )
}

export const Form = memo(FormComp)
