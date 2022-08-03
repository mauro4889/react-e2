import React, { useState } from 'react';
import {List} from './List'
import {FormTodo} from './FormTodo'
import ContainerStyled from './StyleContainer';

export const Container = () => {
  const [lista, setLista] = useState([]);

  const agregarTarea = addItem =>{
    setLista([...lista, addItem]);
  }

  return (
    <ContainerStyled>
        <FormTodo agregarTarea={agregarTarea}></FormTodo>
        <List lista={lista} setLista={setLista} />
    </ContainerStyled>    
  )
}
