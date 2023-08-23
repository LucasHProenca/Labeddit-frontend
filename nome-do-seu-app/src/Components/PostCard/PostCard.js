import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { goToCommentsPage } from "../../Router/coordinator"

export default function PostCard (props) {

    const {post, id} = props
    const navigate = useNavigate()
    const context = useContext(globalContext)
    const {getPosts} = context

    const [isLoading, setIsLoading] = useState(false)

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
    // if(rate < 0) {
    //     rate = 0
    // }

    return (
        <div>
            <h3>Enviado por: {post.creator.name}</h3>
            <p>{post.content}</p>
            <div>
            <span>
                <p onClick={() => doLike()}>⇧</p>
                {rate}
                <p onClick={() => doDislike()}>⇩</p>
            </span>
            <span>
                
                <p onClick={() => goToCommentsPage(navigate, id)}>💬 {post.comments}</p>
            </span>
            </div>
        </div>
    )
}