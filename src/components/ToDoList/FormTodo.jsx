import React, { useState } from 'react'
import styled from 'styled-components';

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


export const FormTodo = props => {
    const {agregarTarea} = props
    const [tarea, setTarea] = useState("");

    const handleSubmit = e => {
        e.preventDefault();  
        agregarTarea({tarea});
        setTarea("");
    };

    const saveData = () =>{
        localStorage.setItem('tareas', tarea)
    }

	return (
        <FormStyled onSubmit={handleSubmit}>
            <h2>Ingrese tarea</h2>
            <InputStyled type="text" 
            className='inputForm'
            onChange={e=> setTarea(e.target.value)}/>
            <ButtonStyled className='btnAgregar'
            disabled={!tarea} onClick={saveData}>
                Agregar
            </ButtonStyled>
        </FormStyled>
    );
}
