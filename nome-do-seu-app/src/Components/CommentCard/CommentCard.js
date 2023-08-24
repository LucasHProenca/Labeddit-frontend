import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { PostCreator } from "../PostCard/postCardStyle"
import { CardContainer, CommentCreator, ContentComment, LikeContainer, LikeRate, CommentInformation } from "./commentCardStyle"

export default function CommentCard (props) {

    const context = useContext(globalContext)
    const { posts, getPosts } = context
    const {comment, getComments} = props
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    let pathParams = useParams()
    // console.log(pathParams)

    const deleteComment = async () => {
        setIsLoading(true)

        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            await axios.delete(BASE_URL + `/comments/${comment.id}`, config)

            setIsLoading(false)
            getComments()
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

            await axios.put(BASE_URL + `/comments/${comment.id}/like`, body, config)
            setIsLoading(false)
            getComments()
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

            await axios.put(BASE_URL + `/comments/${comment.id}/like`, body, config)
            setIsLoading(false)
            getComments()
        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

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

    let rate = comment.likes - comment.dislikes
    return(
        <CardContainer>
            <PostCreator>Enviado por: {comment.creator.nickname}</PostCreator>
            <ContentComment>{comment.content}</ContentComment>
            <CommentInformation>
            <LikeContainer>
                <block class = "like" onClick={() => doLike()}>⇧</block>
                <LikeRate>{handleNumbers(rate)}</LikeRate>
                <block class = "dislike "onClick={() => doDislike()}>⇩</block>
            </LikeContainer>
            <block class = "trash"onClick={() => deleteComment()}>🗑</block>
            </CommentInformation>
        </CardContainer>
    )
}