import styled from 'styled-components'

const HomeStyled = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    .containerLink{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 5em;
        @media (min-width: 767px){
            flex-direction: row;
            justify-content: space-around;
        }
        a{
            text-decoration: none;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            @media (min-width: 767px){
                margin-top: 5%;
                font-size: 25px;
            }
            @media (min-width: 1023px){
                font-size: 25px;
            }
        }
    }
`

export default HomeStyled
