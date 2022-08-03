import React from 'react'
import { Pokeapi } from './Search'
import { CardStyled } from './StyleCard'

export const Card = ({data}) => {

    const img = (data?.sprites.other.home.front_default)
    const nombre = data?.name.toUpperCase()
  return (
    <CardStyled>
        <h2>{nombre}</h2>
        <h3>N°{data?.id}</h3>
        <img src={img} alt="" />
    </CardStyled>
  )
}
