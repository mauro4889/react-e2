import React from 'react'
import styled from 'styled-components'

const MenuStyled = styled.div`
    width: 100vw;
    height: 4em;
    background-color: black;
    margin-top: 0;
    @media (min-width: 1024px){
        height: 6em;
    }
    .nav{
        display: flex;
        justify-content: space-between;
        width: 95%;
        margin: auto;
        @media (min-width: 767px){
            justify-content: space-around;
        }
    }    
    a{
        text-decoration: none;
        font-style: 15px;
        color: white;
        margin-top: 5%;
        @media (min-width: 767px){
            margin-top: 2%;
        }
        @media (min-width: 1024px){
            font-size: 20px;
        }
    }
`

export default MenuStyled
