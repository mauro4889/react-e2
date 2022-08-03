import React from 'react'
import MenuStyled from './StyleNavbar'
import {NavLink} from 'react-router-dom'

export const Navbar = () => {
  return (
    <MenuStyled>
        <div className='nav'>
            <NavLink to="/" style={({isActive})=>({color: isActive ? 'violet' : 'white'})}>Inicio</NavLink>
            <NavLink to="/todolist" style={({isActive})=>({color: isActive ? 'violet' : 'white'})}>To do List</NavLink>
            <NavLink to="pokeapi" style={({isActive})=>({color: isActive ? 'violet' : 'white'})}>PokeAPI</NavLink>
        </div>
    </MenuStyled>
  )
}
