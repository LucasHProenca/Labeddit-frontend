import styled from "styled-components"

export const CreatePostContainer = styled.form`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10vh;
gap: 2vh;
`

export const PostCreation = styled.textarea `
width: 36.4rem;
height: 13.1rem;
flex-shrink: 0;
border-radius: 1.2rem;
background: #EDEDED;
font-size: 1.4rem;
padding: 0px 50px 0px 20px;

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
width: 80vw;
padding: 0px 30px 0px 10px;
}
`

export const PostBtn = styled.button `
display: flex;
width: 35.9rem;
padding: 1.2rem 14.5rem;
justify-content: center;
align-items: center;
border-radius: 1.2rem;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
color: #FFF;
font-family: IBM Plex Sans;
font-size: 1.4rem;
font-style: normal;
font-weight: 700;
line-height: normal;
cursor: pointer;
opacity: 0.9;

:hover{
    transform: scale(1.05);
    opacity: 1;
}

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
width: 85vw;
padding: 1.2rem 7rem;
}
`

export const FormLine = styled.hr `
display: flex;
justify-content: center;
margin-top: 5vh;
margin-bottom: 3vh;
width: 36.3006rem;
height: 0.05rem;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #ACACAC;

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
width: 85vw;
}
`

export const CardsPosition = styled.div `
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
gap: 1.5rem;
`



