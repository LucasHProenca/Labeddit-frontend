import styled from "styled-components"

export const CardContainer = styled.div`
display: flex;
width: 36.4rem;
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

:hover{
    transform: scale(1.05)
  }

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
width: 80vw;
padding: 0px 30px 0px 10px;
}
`

export const CommentCreator = styled.h3`
color: #6F6F6F;
text-align: center;
font-family: IBM Plex Sans;
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const ContentComment = styled.p`
color: #000;
font-family: IBM Plex Sans;
font-size: 1.8rem;
font-style: normal;
font-weight: 400;
line-height: normal;

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
font-size: 1.5rem;
}
`

export const LikeContainer = styled.span`
display: flex;
width: 9.8rem;
height: 2.7886rem;
padding: 0.4667rem;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
border-radius: 2.8rem;
border: 0.797px solid #ECECEC;

#likebtn {
    cursor: pointer;
}

.like-active {
    color: green;
}

.dislike-active {
    color: red;
}

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
width: 6rem;
}
`

export const LikeRate = styled.p`
display: inline;
color: #6F6F6F;
text-align: center;
font-family: IBM Plex Sans;
font-size: 0.9561rem;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const CommentInformation = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 1.5rem;

.editbtn {
    cursor: pointer;
}

.editbtn:hover {
    color: orange;
}

.trash:hover{
    color: orange;
}
.trash {
    cursor: pointer;
}

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
gap: 0.8rem;
justify-content: space-between;
}
`

export const CardContainerModal = styled.div`
display: flex;
width: 36.4rem;
max-width: 90%;
padding: 0.9rem 1rem;
flex-direction: column;
align-items: flex-start;
gap: 1rem;
border-radius: 1.2rem;
border: 1px solid #E0E0E0;
background: #FBFBFB;
overflow: hidden;
text-overflow: ellipsis;
white-space: wrap;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
width: 80vw;
padding: 0px 30px 0px 10px;
}
`

export const InputModal = styled.input`
width: 50%;
max-width: 70%;
margin-top: 3%;
height: 10%;
flex-shrink: 0;
font-size: 1rem;
padding: 0px 50px 0px 20px;
border-radius: 2.7rem;

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
margin-top: 5%;
padding: 0px 30px 0px 10px;
}
`

export const BotaoEditComment = styled.button`
display: flex;
width: 100px;
justify-content: center;
align-items: center;
border-radius: 2.7rem;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%);
color: #FFF;
margin-top: 3%;
text-align: center;
font-family: Noto Sans;
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
opacity: 0.9;
cursor: pointer;

:hover {
    opacity: 1;
}

@media screen and (min-device-width : 320px) and (max-device-width : 700px) {
margin-top: 5%;
}
`

export const FormModal = styled.form`
display: flex;
justify-content: flex-start;
align-items: center;
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