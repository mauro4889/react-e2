import React, { useState } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../../context/GlobalContext';

const ButtonStyled = styled.button`
    background-color: #0B5ED7;
    color: white;
    height: 25px;
    width: 25%;
    margin: auto;
    margin-top: 2%;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    @media (min-width: 767px){
        margin-top: 5%;
    }
`

const FormStyled = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
`
const InputStyled = styled.input`
    width: 80%;
    margin: auto;
    border-radius: 5px;
`


export const FormTodo = () => {
    const {tarea, handleChange, handleSubmit} = useGlobalContext()

	return (
        <FormStyled onSubmit={handleSubmit}>
            <h2>Ingrese tarea</h2>
            <InputStyled type="text"
            className='inputForm'
            onChange={handleChange} value={tarea}/>
            <ButtonStyled className='btnAgregar'
            disabled={!tarea}>
                Agregar
            </ButtonStyled>
        </FormStyled>
    );
}
