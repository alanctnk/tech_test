/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Container } from '../../components'
import { getAllVehicles, deleteVehicle } from '../../services/vehicle'
import { XCircle, PencilAlt, PlusCircle } from '../../components'
import moment from 'moment'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
import 'moment/locale/pt-br'
moment.locale('pt-br')

const VehiclesComp = () => {

  const [vehicles, setVehicles] = useState([])
  const getLastWeeksDate = () => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  }
  const [filter, setFilter] = useState("showAll")
  const showAll = useCallback(vehicle => vehicle, [vehicles])
  const notSold = useCallback(vehicle => !vehicle.sold, [vehicles])
  const createdLastWeek = useCallback(vehicle => new Date(vehicle.createdAt) >= getLastWeeksDate(), [vehicles])
  const vehiclesFilters = useMemo(() => ({
    showAll,
    notSold,
    createdLastWeek
  }), [notSold, createdLastWeek])

  const refresh = useCallback(async () => {
    try{
      const resp = await getAllVehicles()
    
      setVehicles(resp.data)

    } catch (err) {
      toast.error(`Erro: ${err.message}`)
    }
  }, [filter])
  
  const handleClick = useCallback( async (id) => {

    const deletePromise = deleteVehicle(id)
    toast.promise(deletePromise, {
      loading: "Aguarde . . .",
      success: (data) => {
        refresh()
        return `${data.data.message}`
      },
      error: (err) => "Erro: " + err.response.data.message
    })
  }, [vehicles])

  useEffect(() => {
    refresh()
  }, [filter])
  return (
    <Container title='Veículos' subtitle='Consulta e cadastro de veículos.'>
      <div className='box'>
        <div className="filters">

          <div className='btn' onClick={() => setFilter("showAll")}>Todos veículos</div>
          <div className='btn' onClick={() => setFilter("notSold")}>Não vendidos</div>
          <div className='btn' onClick={() => setFilter("createdLastWeek")}>Últimos lançamentos{"(7dias)"}</div>
        </div>
        <Link className='btn' to='/new_vehicle'>
          <PlusCircle />
          Adicionar veículo
        </Link>
        <table>
          <tr>
            <th>ID</th>
            <th>Veiculo</th>
            <th>Fabricante</th>
            <th>Ano</th>
            <th>Vendido</th>
            <th></th>
          </tr>
          {vehicles.filter(vehiclesFilters[filter]).map((vehicle) => (

            <tr key={vehicle.id}>
              <td>{vehicle.id}</td>
              <td>{vehicle.name}</td>
              <td>{vehicle.manufacturer}</td>
              <td>{vehicle.release_year}</td>
              <td>{vehicle.sold ? "Sim" : "Não"}</td>
              <td className='options'>
                <Link className='btn' to={"/edit_vehicle/" + vehicle.id}><PencilAlt /></Link>
                <div className='btn' onClick={() => handleClick(vehicle.id)}><XCircle /></div>                
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Container>
  )
}

export const Vehicles = memo(VehiclesComp)