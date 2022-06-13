import React, { memo, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

const CheckInputComp = ({ name, ...rest }) => {
    const { fieldName, defaultValue, registerField } = useField(name)
    const inputRef = useRef(null)
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'checked'
        })
    }, [fieldName, registerField])
    return (
        <>
            <input ref={inputRef} defaultChecked={defaultValue} {...rest} type="checkbox" id="sold"/>
            <label htmlFor="sold" style={{
                fontSize: "16px",
                fontWeight: "bolder",
                color: 'darkblue'
            }}>Vendido</label>
        </>
    )
}

export const CheckInput = memo(CheckInputComp)