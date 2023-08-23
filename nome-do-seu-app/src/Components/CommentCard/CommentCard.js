import axios from "axios"
import { useState } from "react"
import { useNavigate, useParams } from "react-router"
import { BASE_URL } from "../../constants/constants"

export default function CommentCard (props) {

    const {comment, getComments} = props
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    let pathParams = useParams()
    // console.log(pathParams)

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

    let rate = comment.likes - comment.dislikes
    return(
        <div>
            <h3>Enviado por: {comment.creator.nickname}</h3>
            <p>{comment.content}</p>
            <div>
            <span>
                <p onClick={() => doLike()}>⇧</p>
                {rate}
                <p onClick={() => doDislike()}>⇩</p>
            </span>
            </div>
        </div>
    )
}