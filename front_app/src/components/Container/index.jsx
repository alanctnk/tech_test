import React, { memo } from 'react'

const ContainerComp = (props) => {
  return (
    <div className='container'>
        <header>
            <div className='title'>{props.title} {" >"}</div>
            <div className='subtitle'>{props.subtitle}</div>
        </header>
        <div className='content'>
            {props.children}
        </div>
    </div>
  )
}

export const Container = memo(ContainerComp)