import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router"
import CommentCard from "../../Components/CommentCard/CommentCard"
import PostCard from "../../Components/PostCard/PostCard"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { useProtectedPage } from "../../hooks/use-protected-page"
import { CreateCommentContainer, CommentCreation, CommentBtn, CommentLine, CardsPosition } from "./commentsStyle"

export default function CommentsPage () {
    const context = useContext(globalContext)
    const { posts, getPosts } = context
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
    const [commentContent, setCommentContent] = useState("")
    let pathParams = useParams()
    let params = useLocation()
    // console.log(pathParams)
    const navigate = useNavigate()
    useProtectedPage(navigate)

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            getPosts()
            getComments()
        }
    }, [])

    

    const getComments = async () => {
        setIsLoading(true)
        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const response = await axios.get(BASE_URL + `/comments/${pathParams.id}`, config)
            setIsLoading(false)
            setComments(response.data)

        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    const createComment = async (e) => {
        e.preventDefault()

        setIsLoading(true)
        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const body = {
                content: commentContent
            }

            const response = await axios.post(BASE_URL + `/comments/${pathParams.id}`, body, config)
            setCommentContent("")
            setIsLoading(false)
            getComments()
            getPosts()
        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    const id = params.pathname.split("/")[2]

    const findPost = posts.find((post) => 
        post.id === id
    )

    const result = () => {
        if(findPost) {
            return <div>
            {posts.map((post) => {
                if(post.id === pathParams.id) {
                    return<PostCard key = {post.id} post = {post}/>
                }
            })}
            </div>
        }
    }
    return (
        <div>
            <CardsPosition>
            {result()}
            </CardsPosition>
            <CreateCommentContainer onSubmit={createComment}>
            <CommentCreation name="areaDeTexto" id="areaDeTexto" cols="30" rows="10" required 
            value={commentContent} 
            onChange = {(e) => setCommentContent(e.target.value)}
                placeholder="Adicionar comentário"></CommentCreation>
            <CommentBtn disabled = {isLoading}>Responder</CommentBtn>
            </CreateCommentContainer>
            <CommentLine/>
            <CardsPosition>
                {comments.map((comment) => {
                    return <CommentCard key = {comment.id} comment = {comment} getComments = {getComments}/>
                })}
            </CardsPosition>
        </div>
    )
}