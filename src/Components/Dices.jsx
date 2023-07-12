import React from 'react'
import dice from '../assets/Diceicons'

export default function Dices(props) {
    

    const handleclick=(event)=>{
        if(props.selectedvalue[0]===false)
        props.handleselectedvalue(props.number)
    }
  return (
    <button className={`btn col-2  ${props.selectedvalue[1]===props.number?'text-success':'bg-secondary'}`} onClick={handleclick}>{dice[props.number]}</button>
  )
}
