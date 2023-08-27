import styled from "styled-components";

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
`

export const PostCreator = styled.h3`
color: #6F6F6F;
text-align: center;
font-family: IBM Plex Sans;
font-size: 1.2rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const ContentPost = styled.p`
color: #000;
font-family: IBM Plex Sans;
font-size: 1.8rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const PostInformation = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
gap: 1.5rem;

.trash:hover{
    color: orange;
}
.trash {
    cursor: pointer;
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

.like {
    border: none;
    background: white;
    cursor: pointer;
}
.like:focus{
    color: orange;
}

.dislike {
    border: none;
    background: white;
    cursor:pointer;
}
.dislike:focus {
    color:orange;
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

export const CommentsContainer = styled.span`
display: inline-flex;
padding: 0.4667rem;
justify-content: center;
align-items: center;
gap: 0.8rem;
border-radius: 2.8rem;
border: 0.793px solid #ECECEC;
cursor:pointer;

`

export const CommentsQuantity = styled.p`
display: inline;
color: #6F6F6F;
text-align: center;
font-family: IBM Plex Sans;
font-size: 0.9561rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`
export const ContainerModal = styled.div`

#modal {
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
z-index: 10;
background-color: #FFF;
width: 500px;
max-width: 90%;
padding: 1.2rem;
border-radius: 0.5rem;
opacity:0;
}

#modal {
transition: .5s;
opacity: 1;
pointer-events: all;
}

#modal.hide {
    opacity: 0;
    pointer-events: none
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
}

.modal-body {
    margin-bottom: 1rem;
}

#close-modal {
    padding: 0.6rem 1.2rem;
    background-color: #888;
    color: #FFF;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    opacity: 0.9;
    font-size: 1rem;
    transition: 0.4s;
}

#close-modal:hover{
    opacity: 1;
}
`
export const FadeModal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.6);
z-index: 5;
opacity: 0;
transition: .5s;
opacity: 1;
pointer-events: all;

#fade.hide {
    opacity: 0;
    pointer-events: none
}
`
