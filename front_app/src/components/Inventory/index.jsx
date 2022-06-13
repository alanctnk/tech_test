/* eslint-disable react-hooks/exhaustive-deps */
import React, { memo, useCallback, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { getQtdByDecade, getQtdByManufacturers } from '../../services/vehicle'

const InventoryComp = () => {
    const [qtdDecade, setQtdDecade] = useState([])
    const [qtdMan, setQtMan] = useState([])

    const fetchData = useCallback(async () => {

        try {
            const decadeResp = await getQtdByDecade()
            setQtdDecade(decadeResp.data)

            const manResp = await getQtdByManufacturers()
            setQtMan(manResp.data)
        } catch(err) {
            toast.error("Erro: " + err.message)
        }
    }, [])
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div style={{
                height: '2px',
                backgroundColor: 'black',
                margin: '70px 0 30px 0'
            }}/>
            <h3>Inventário:</h3>
            <div style={{
                display: 'flex',
                gap: '120px'
            }}>
                <ul>
                    <h5>Por Fabricante:</h5>
                    {qtdMan.map((el, id) => {
                        const [key, value] = Object.entries(el)[0]
                        return <li key={id}>{`${key}: ${value}`}</li>
                    })}
                </ul>
                <ul>
                    <h5>Por década de fab.:</h5>
                    {qtdDecade.map((el, id) => {
                        const [key, value] = Object.entries(el)[0]
                        return <li key={id}>{`${key}: ${value}`}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export const Inventory = memo(InventoryComp)