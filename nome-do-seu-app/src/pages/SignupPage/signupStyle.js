import styled from "styled-components"

export const FormSignup = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`

export const InputSignup = styled.input`
width: 36.3rem;
height: 6rem;
flex-shrink: 0;
font-size: 1.4rem;
padding: 0px 50px 0px 20px;
`

export const BotaoCadastrar = styled.button`
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
`

export const TermosContrato = styled.p`
color: #000;
font-family: Noto Sans;
font-size: 1.4rem;
font-style: normal;
font-weight: 400;
line-height: normal;
width: 36.5rem;

a {
color: #4088CB;
font-family: Noto Sans;
font-size: 1.4rem;
font-style: normal;
font-weight: 500;
line-height: normal;
}
`

export const CabeçalhoSignUp = styled.h1`
display: flex;
color: #373737;
font-family: IBM Plex Sans;
font-size: 3.3rem;
font-style: normal;
font-weight: 700;
line-height: normal;
justify-content: center;
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