import styled from "styled-components";


const ContainerStyled = styled.div`
    width: 80vw;
    margin: auto;
    margin-top: 5%;
    border: solid 2px;
    border-radius: 5px;
    @media (min-width: 767px){
        width: 50vw;
    }
    @media (min-width: 1023px){
        width: 30vw;
    }
`

export default ContainerStyled