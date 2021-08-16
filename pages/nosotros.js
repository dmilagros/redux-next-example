import Link from 'next/link'
import React from 'react'
import { useSelector } from 'react-redux'

const nosotros = () => {

  const state = useSelector(state => state)

  console.log(state.auth)
  return (
    <div>
      <Link href="/">
        <a href="">Inicio</a>
      </Link>
      <br />
      using useSelector
    </div>
  )
}

export default nosotros
