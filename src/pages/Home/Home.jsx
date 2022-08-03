import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from '../../components/Navbar/Navbar'
import HomeStyled from './StyleHome'

export const Home = () => {

  const [pendientes, setPendientes] = useState('');

  const getData = () =>{
    return localStorage.getItem('tareas')
  }

  useEffect(()=>{
    setPendientes(getData());
    console.log(pendientes);
  })

  return (
    <HomeStyled>
        <h1>Inicio de la pagina</h1>
        <div className="containerLink">
          <a href="/todolist" style={
            {color: pendientes ? 'red' : 'black', fontWeight: pendientes ? 'bolder' : 'bold', fontSize: pendientes ? '25px' : '20px'}
            }>To do List</a>
          <a href="/pokeapi">PokeAPI</a>
        </div>        
    </HomeStyled>    
  )
}
