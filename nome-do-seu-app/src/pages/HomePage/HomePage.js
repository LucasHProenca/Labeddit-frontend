import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import PostCard from "../../Components/PostCard/PostCard"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { useProtectedPage } from "../../hooks/use-protected-page"
import { CreatePostContainer, PostCreation, PostBtn, FormLine, CardsPosition} from "./homestyle"
import ToastAnimated, { showToast } from "../../Components/Toast/Toast"


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
            showToast({ type: "success", message: "Publicado com sucesso" })
        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    // const handleClick = () => {
    //     showToast({ type: "success", message: "Publicado com sucesso" });
    // }
    

    return (
        <div>
            <CreatePostContainer onSubmit={createPost}>
                <PostCreation name="areaDeTexto" id="areaDeTexto" cols="5" rows="5" maxLength={200} required
                    value={postContent}
                    onChange={(e) => setPostContent(e.target.value)}
                    placeholder="Escreva seu post..."></PostCreation>
                    <ToastAnimated />
                <PostBtn disabled={isLoading}>Postar</PostBtn>
            </CreatePostContainer>
            <FormLine />
            <CardsPosition>
                {posts
                    .sort((a, b) => {
                        return new Date(b.createdAt) - new Date(a.createdAt)
                    })
                    .map((post) => {
                        return <PostCard key={post.id} post={post} id={post.id} />
                    })
                }
            </CardsPosition>
        </div>
    )
}