import React, { memo, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

const TeaxtAreaInputComp = ({ name, label, ...rest }) => {
    const { fieldName, defaultValue, registerField, error } = useField(name)
    const inputRef = useRef(null)
    const style = {
        border: error && "3px solid red",
        height: "20vh"
    }
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])
    return (
        <div className='span_full'>
            <div style={{
                fontSize: "20px",
                fontWeight: "bolder",
                color: 'darkblue',
            }}>{label}</div>
            <textarea ref={inputRef} type="text" defaultValue={defaultValue} {...rest} style={style}/>
        </div>
    )
}

export const TeaxtAreaInput = memo(TeaxtAreaInputComp)