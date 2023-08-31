import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
width: 25vw;
padding: 0.9rem 1rem;
flex-direction: column;
align-items: flex-start;
gap: 1.8rem;
border-radius: 1.2rem;
border: 1px solid #E0E0E0;
background: #FBFBFB;
overflow: hidden;
text-overflow: ellipsis;
white-space: wrap;
margin-top: 3rem;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
margin-left: 1.5rem;

:hover{
    transform: scale(1.05)
  }

.editbtn {
    cursor: pointer;
}

.editbtn:hover {
    color: orange;
}

@media screen and (min-device-width : 701px) and (max-device-width : 1280px) {
width: 40vw;
margin-left: 0rem;
}

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
width: 80vw;
margin-left: 0rem;
}
`

export const ContainerUserDetails = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`

export const CardModal = styled.div`
display: flex;
width: 25rem;
padding: 0.9rem 1rem;
flex-direction: column;
align-items: flex-start;
gap: 1.8rem;
border-radius: 1.2rem;
border: 1px solid #E0E0E0;
background: #FBFBFB;
overflow: hidden;
text-overflow: ellipsis;
white-space: wrap;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

@media screen and (min-device-width : 320px) and (max-device-width : 760px) {
width: 80vw;
padding: 0px 30px 0px 10px;
}
`

export const ContainerModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const DetailsContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
`

export const FormEditUser = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;
`

export const InputEditUser = styled.input`
width: 36.3rem;
height: 6rem;
flex-shrink: 0;
font-size: 1.4rem;
padding: 0px 50px 0px 20px;
border-radius: 0.5rem;

@media screen and (min-device-width : 320px) and (max-device-width : 760px) {
height: 10vh;
width: 80vw;
padding: 0px 30px 0px 10px;
font-size: 1.2rem;
}
`

export const BotaoEditar = styled.button`
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

@media screen and (min-device-width : 320px) and (max-device-width : 760px) {
height: 10vh;
width: 90vw;
font-size: 1.4rem;
padding: 1rem;
}
`

export const BtnOptions = styled.button`
display: flex;
width: 36.5rem;
padding: 1.3rem 10rem;
justify-content: center;
align-items: center;
background: gray;
border-radius: 1rem;
gap: 1rem;
margin-bottom: 0.5rem;
color: #FFF;
text-align: center;
font-family: Noto Sans;
font-size: 1.4rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 1rem;
cursor: pointer;
opacity: 0.9;

:hover{
    transform: scale(1.05);
    opacity: 1;
}

@media screen and (min-device-width : 320px) and (max-device-width : 760px) {
height: 10vh;
width: 90vw;
font-size: 1.4rem;
padding: 1rem;
}
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

export const DivDeleteModal = styled.div `
display: flex;
flex-direction: row;
justify-content: space-around;

span {
    cursor: pointer;
}
`

export const FormDelModal = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;

h3 {
    display: flex;
    justify-content: center;
}

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {

h3{
    font-size: 1rem;
}
}
`