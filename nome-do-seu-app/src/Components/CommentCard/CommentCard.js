import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { PostCreator } from "../PostCard/postCardStyle"
import { CardContainer, 
    ContentComment, 
    LikeContainer, 
    LikeRate, 
    CommentInformation,
    CardContainerModal,
    InputModal,
    BotaoEditPost,
    FormModal,
} from "./commentCardStyle"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { PiArrowFatUpDuotone, PiArrowFatDownDuotone } from "react-icons/pi"
import EditModal from "../Modal/editModal"
import ToastAnimated, { showToast } from "../../Components/Toast/Toast"

export default function CommentCard(props) {

    const context = useContext(globalContext)
    const { posts, getPosts } = context
    const { comment, getComments } = props
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    let pathParams = useParams()
    // console.log(pathParams)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [commentContent, setCommentContent] = useState("")

    const editComment = async (e) => {
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

            await axios.put(BASE_URL + `/comments/${comment.id}`, body, config)
            setCommentContent("")
            setIsLoading(false)
            getComments()
            showToast({ type: "success", message: "Editado com sucesso" })
        } catch (error) {
            console.error(error.response)
            // window.alert(error.response.data)
            if(typeof error.response.data === "string") {
                showToast({ type: "error", message: `${error.response.data}`})
            } else {
                showToast({ type: "error", message: "Não é possível publicar um comentário vazio" })
            }
        }
    }

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
    return (
        <>
            <CardContainer>
                <PostCreator>Enviado por: {comment.creator.nickname}</PostCreator>
                <ContentComment>{comment.content}</ContentComment>
                <CommentInformation>
                    <LikeContainer>
                        <PiArrowFatUpDuotone class="like" onClick={() => doLike()}></PiArrowFatUpDuotone>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <PiArrowFatDownDuotone class="dislike " onClick={() => doDislike()}></PiArrowFatDownDuotone>
                    </LikeContainer>
                    <AiFillEdit id="open-modal" onClick={() => setIsOpenModal(true)} />
                    <AiFillDelete class="trash" onClick={() => deleteComment()}></AiFillDelete>
                </CommentInformation>
            </CardContainer>
            <EditModal isOpenModal={isOpenModal} setOpenModal={() => setIsOpenModal(!isOpenModal)}>
            <CardContainerModal>
                <PostCreator>Enviado por: {comment.creator.nickname}</PostCreator>
                <ContentComment>{comment.content}</ContentComment>
                <CommentInformation>
                    <LikeContainer>
                        <PiArrowFatUpDuotone class="like" onClick={() => doLike()}></PiArrowFatUpDuotone>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <PiArrowFatDownDuotone class="dislike" onClick={() => doDislike()}></PiArrowFatDownDuotone>
                    </LikeContainer>
                </CommentInformation>
            </CardContainerModal>
            <FormModal onSubmit = {editComment}>
                <InputModal value={commentContent} onChange = {(e) => setCommentContent(e.target.value)} placeholder = "Edite seu comentário"/>
                <BotaoEditPost>Postar</BotaoEditPost>
            </FormModal>
            </EditModal>
            <ToastAnimated />
        </>
    )
}