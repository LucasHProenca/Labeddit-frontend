import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PostCard from "../../Components/PostCard/PostCard"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { useProtectedPage } from "../../hooks/use-protected-page"
import { goToLoginPage } from "../../Router/coordinator"

export default function HomePage() {
    const navigate = useNavigate()
    useProtectedPage(navigate)

    const context = useContext(globalContext)
    const { posts, getPosts } = context
    const [isLoading, setIsLoading] = useState(false)
    const [postContent, setPostContent] = useState("")

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            getPosts()
        }
    }, [])

    const createPost = async (e) => {
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
                content: postContent
            }

            await axios.post(BASE_URL + "/posts", body, config)
            setPostContent("")
            setIsLoading(false)
            getPosts()
        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    return (
        <div>
            <form onSubmit={createPost}>
            <textarea name="areaDeTexto" id="areaDeTexto" cols="30" rows="10" required 
            value={postContent} 
            onChange = {(e) => setPostContent(e.target.value)}
                placeholder="Escreva seu post..."></textarea>
            <button disabled = {isLoading}>Postar</button>
            </form>
            <hr/>

            <div>
                {posts.map((post) => {
                    return <PostCard key={post.id} post = {post} id = {post.id} />
                })}
            </div>
        </div>
    )
}