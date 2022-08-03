import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card } from './Card'
import SearchStyled from './StyleSearch'


export const Search = () => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState('')
    const [pokemon, setPokemon] = useState('');


    const handleSubmit = async (e, pokemon) =>{
        e.preventDefault();
        setError('')
        let selectedPokemon = pokemon.toLowerCase().trim()
        try{
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`) /* Se puede usar data para acceder directamente o crear un variable y depues usar {variable.data} */
            setData(data)
        }  
        catch(error){
            setError('No se encontro pokemon')
        }
    }

  return (
    <SearchStyled>
        <h2>PokeAPI</h2>
        <form onSubmit={(e)=> handleSubmit(e, pokemon)} className='search'>
            <input type="text" onChange={e => setPokemon(e.target.value)}/>
            <button disabled={!pokemon} type='submit'>BUSCAR</button>
            {error && <h3>{error}</h3>}
        </form>
        <Card data={data}/>
    </SearchStyled>
  )
}
