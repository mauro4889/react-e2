import styled from "styled-components";


const SearchStyled = styled.div`
    margin: auto;
    margin-top: 10%;
    width: 90%;
    border: solid 1px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 15px 5px #000000; 
    box-shadow: 0px 0px 15px 5px #000000;
    @media (min-width: 1023px){
        width: 50vw;
        margin-top: 2%;
    }
    
    .search{
        display: flex;
        flex-direction: column;
            input{
                width: 70%;
                height: 2em;
                margin: auto;
                margin-bottom: 2%;
                border-radius: 5px;
                @media (min-width: 767px){
                    height: 3em;
                }
            }
            button{
                width: 50%;
                height: 3em;
                margin: auto;
                background-color: #555ba6;
                color: #fff;
                border: none;
                border-radius: 5px;
                @media (min-width: 767px){
                    margin-top: 5%;
                    margin-bottom: 4%;
                }
            }
    }
`

export default SearchStyled