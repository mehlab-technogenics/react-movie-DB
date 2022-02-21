import React from 'react'

const Button = ({color,text}) => {
    const onClick = () => {
        console.log('Add')
        console.log('Click')
      }
  return (
    <div>
         <button className='btn' style={{backgroundColor:color}}  onClick={onClick}>{text}</button>
    </div>
  )
}

export default Button