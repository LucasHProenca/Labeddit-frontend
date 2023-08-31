import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
width: 100%;
height: 10vh;
justify-content: space-between;
align-items: center;
background: #EDEDED;

.closeBtn {
position: absolute;
left: 10%;
font-size: 1.8rem;
font-weight: 600;
cursor: pointer;
opacity: 0.9;

:hover{
    transform: scale(1.05);
    opacity: 1;
}
}

.userBtn {
position: absolute;
left: 10%;
font-size: 1.8rem;
font-weight: 600;
cursor: pointer;
opacity: 0.9;

:hover{
    transform: scale(1.05);
    opacity: 1;
}
}

@media screen and (min-device-width : 320px) and (max-device-width : 760px) {
.closeBtn {
font-size: 1.4rem;
}
}
`

export const ImgHeader = styled.img`
width: 2.8023rem;
height: 2.8639rem;
flex-shrink: 0;
position: absolute;
left: 45%;
`

export const ButtonHeader = styled.p`
color: #4088CB;
text-align: center;
font-family: Noto Sans;
font-size: 1.8rem;
font-style: normal;
font-weight: 600;
line-height: normal;
position: absolute;
left: 80%;
cursor: pointer;
opacity: 0.9;

:hover{
    transform: scale(1.05);
    opacity: 1;
}

@media screen and (min-device-width : 320px) and (max-device-width : 760px) {
font-size: 1.4rem;
left: 75%;
}
`
