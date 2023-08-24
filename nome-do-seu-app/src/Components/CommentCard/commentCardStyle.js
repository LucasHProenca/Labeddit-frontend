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

export const CommentInformation = styled.div`
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