import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import { useGlobalContext } from '../../context/GlobalContext'
import HomeStyled from './StyleHome'

export const Home = () => {

  const {lista} = useGlobalContext()

  const [pendientes, setPendientes] = useState('');


  useEffect(()=>{
    setPendientes(lista);
    console.log(pendientes)
  })

  return (
    <HomeStyled>
        <h1>Inicio de la pagina</h1>
        <div className="containerLink">
          <a href="/todolist" style={
            {color: pendientes.length ? 'red' : 'black', fontWeight: pendientes.length ? 'bolder' : 'bold', fontSize: pendientes.length ? '25px' : '20px'}
            }>To do List</a>
          <a href="/pokeapi">PokeAPI</a>
        </div>        
    </HomeStyled>    
  )
}
