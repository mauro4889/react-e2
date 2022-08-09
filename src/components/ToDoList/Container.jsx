import {List} from './List'
import {FormTodo} from './FormTodo'
import ContainerStyled from './StyleContainer';


export const Container = () => {
  return (
    <ContainerStyled>
        <FormTodo></FormTodo>
        <List/>
    </ContainerStyled>    
  )
}
