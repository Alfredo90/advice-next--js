"use client"

import {useEffect, useState} from 'react'

import Advice from '../Advice/Advice';

const Card = () => {
  const [advices, setAdvices] = useState({})

const handleClick = async () => {
  try {
      const res = await fetch('https://api.adviceslip.com/advice')
      const data = await res.json()
      setAdvices(data.slip)
  } catch (err) {
      console.log(err.message)
  }
}

return (
  <div className='border-2 flex flex-col justify-center items-center'>
      <h2>ADVICE #{advices.id}</h2>
      <h1>"{advices.advice}"</h1>

      <button  type="submit" onClick={handleClick} >Generate</button>

  </div>
)
}
export default Card
