import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router"
import CommentCard from "../../Components/CommentCard/CommentCard"
import PostCard from "../../Components/PostCard/PostCard"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { useProtectedPage } from "../../hooks/use-protected-page"

export default function CommentsPage () {
    const context = useContext(globalContext)
    const { posts, getPosts } = context
    const [isLoading, setIsLoading] = useState(false)
    const [comments, setComments] = useState([])
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
        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const response = await axios.get(BASE_URL + `/comments/${pathParams.id}`, config)
            setComments(response.data)

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
            {result()}
            <div>
                {comments.map((comment) => {
                    return <CommentCard key = {comment.id} comment = {comment} getComments = {getComments}/>
                })}
            </div>
        </div>
    )
}