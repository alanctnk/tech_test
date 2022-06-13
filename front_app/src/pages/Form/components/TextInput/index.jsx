import React, { memo, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

const TextInputComp = ({ name, label, ...rest }) => {
    const { fieldName, defaultValue, registerField, error } = useField(name)
    const inputRef = useRef(null)

    const errorStyle = {
        border: "3px solid red"
    }

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])
    return (
        <div className='span2'>  
            <div style={{
                fontSize: "20px",
                fontWeight: "bolder",
                color: 'darkblue'
            }}>{label}</div>
            <input ref={inputRef} type="text" defaultValue={defaultValue} {...rest} style={error && errorStyle}/>
        </div>
    )
}

export const TextInput = memo(TextInputComp)