import styled from "styled-components"

export const FormLogin = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`

export const LogoContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-bottom: 5%;

@media screen and (min-device-width : 320px) and (max-device-width : 725px) {
margin-bottom: 15%;
}
`

export const ImgLogo = styled.img`
width: 8.4rem;
height: 8.4021rem;
flex-shrink: 0;
text-align: center;

@media screen and (min-device-width : 320px) and (max-device-width : 725px) {
height: 20%;
width: 20%;
display: flex;
justify-content: center;
}
`

export const CabecalhoLogin = styled.h1`
color: #373737;
font-family: IBM Plex Sans;
font-size: 3.6rem;
font-style: normal;
font-weight: 700;
line-height: normal;
text-align: center;

@media screen and (min-device-width : 320px) and (max-device-width : 725px) {
font-size: 2.4rem;
}
`

export const SloganLogin = styled.p`
color: #000;
text-align: center;
font-family: IBM Plex Sans;
font-size: 1.6rem;
font-style: normal;
font-weight: 300;
line-height: normal;

@media screen and (min-device-width : 320px) and (max-device-width : 725px) {
font-size: 1.3rem;
margin-bottom: 3rem;
}
`

export const InputLogin = styled.input`
width: 36.3rem;
height: 6rem;
flex-shrink: 0;
font-size: 1.4rem;
padding: 0px 50px 0px 20px;
border-radius: 0.5rem;

@media screen and (min-device-width : 320px) and (max-device-width : 725px) {
height: 10vh;
width: 80vw;
padding: 0px 30px 0px 10px;
font-size: 1.2rem;
}
`

export const BotaoContinuar = styled.button`
display: flex;
width: 36.5rem;
padding: 1.3rem 13.3rem;
justify-content: center;
align-items: center;
gap: 1rem;
border-radius: 2.7rem;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
margin-bottom: 1rem;
color: #FFF;
text-align: center;
font-family: Noto Sans;
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

@media screen and (min-device-width : 320px) and (max-device-width : 725px) {
height: 10vh;
width: 90vw;
font-size: 1.2rem;
padding: 1rem;
}
`

export const BotaoCriarConta = styled.button`
display: flex;
width: 36.5rem;
padding: 1.3rem 13.3rem;
justify-content: center;
align-items: center;
gap: 1rem;
border-radius: 2.7rem;
border: 1px solid #FE7E02;
margin-top: 1rem;
background: white;
color: #FE7E02;
text-align: center;
font-family: Noto Sans;
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

@media screen and (min-device-width : 320px) and (max-device-width : 725px) {
height: 10vh;
width: 90vw;
font-size: 1.2rem;
padding: 1rem;
}
`

export const LinhaEntreBotoes = styled.hr`
width: 36.3006rem;
height: 0.05rem;
color:linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #ACACAC;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #ACACAC;

@media screen and (min-device-width : 320px) and (max-device-width : 725px) {
width: 80vw;
}
`

export const SeparacaoBotoes = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 2rem;
`
export const PasswordView = styled.div`
position: relative;

.eye {
    cursor: pointer;
    position: absolute;
    right: 5%;
    top: 40%;
    font-size: 1.4rem;
}
`

