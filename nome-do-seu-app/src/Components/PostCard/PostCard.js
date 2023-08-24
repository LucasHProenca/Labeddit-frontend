import axios from "axios"
import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { goToCommentsPage } from "../../Router/coordinator"
import { CardContainer, PostCreator, ContentPost, PostInformation, LikeContainer, LikeRate, CommentsContainer, CommentsQuantity } from "./postCardStyle"

export default function PostCard(props) {

    const { post, id } = props
    const navigate = useNavigate()
    const context = useContext(globalContext)
    const { getPosts } = context
    let params = useLocation()

    const [isLoading, setIsLoading] = useState(false)

    const deletePost = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            await axios.delete(BASE_URL + `/posts/${post.id}`, config)

            setIsLoading(false)
            getPosts()
        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    const doLike = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const body = {
                like: true
            }

            await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config)

            setIsLoading(false)
            getPosts()
        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    const doDislike = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const body = {
                like: false
            }

            await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config)

            setIsLoading(false)
            getPosts()
        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    let rate = post.likes - post.dislikes

    const handleNumbers = (number) => {
        if (number < 0) {
            return 0
        }
        if (number / 1000 > 1) {
            return `${(number / 1000).toFixed(1)}k`
        }
        if (number / 1000000 > 1) {
            return `${(number / 1000).toFixed(1)}M`
        }
        return number
    }

    const screenRender = () => {
        if (params.pathname === "/posts") {
            return <CardContainer>
                <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                <ContentPost>{post.content}</ContentPost>
                <PostInformation>
                    <LikeContainer>
                        <button class="like" onClick={() => doLike()}>⇧</button>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <button class="dislike" onClick={() => doDislike()}>⇩</button>
                    </LikeContainer>
                    <CommentsContainer>
                        <block onClick={() => goToCommentsPage(navigate, id)}>💬</block>
                        <CommentsQuantity>{post.comments}</CommentsQuantity>
                    </CommentsContainer>
                    <block class = "trash"onClick={() => deletePost()}>🗑</block>
                </PostInformation>
            </CardContainer>
        } else if (params.pathname.includes("/post-comments/")) {
            return <CardContainer>
                <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                <ContentPost>{post.content}</ContentPost>
                <PostInformation>
                    <LikeContainer>
                        <block class="like" onClick={() => doLike()}>⇧</block>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <block class="dislike" onClick={() => doDislike()}>⇩</block>
                    </LikeContainer>
                    <CommentsContainer>
                        <block>💬</block>
                        <CommentsQuantity>{post.comments}</CommentsQuantity>
                    </CommentsContainer>
                </PostInformation>
            </CardContainer>
        }
    }

    return (
        screenRender()
    )
}