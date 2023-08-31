import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { PostCreator } from "../PostCard/postCardStyle"
import {
    CardContainer,
    ContentComment,
    LikeContainer,
    LikeRate,
    CommentInformation,
    CardContainerModal,
    InputModal,
    BotaoEditPost,
    FormModal,
    FormDelModal,
    DivDeleteModal,
} from "./commentCardStyle"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { PiArrowFatUpDuotone, PiArrowFatDownDuotone } from "react-icons/pi"
import EditModal from "../Modal/editModal"
import ToastAnimated, { showToast } from "../../Components/Toast/Toast"
import DeleteModal from "../Modal/deleteModal"

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
    const [activeBtn, setActiveBtn] = useState("none")
    const [isOpenDelModal, setIsOpenDelModal] = useState(false)

    useEffect(() => {
        getLikes()
    }, [])

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
            if (typeof error.response.data === "string") {
                showToast({ type: "error", message: `${error.response.data}` })
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
            showToast({ type: "success", message: "Comentário apagado com sucesso" })
        } catch (error) {
            console.error(error.response)
            // window.alert(error.response.data)
            showToast({ type: "error", message: `${error.response.data}` })
        }
    }

    const getLikes = () => {
        setIsLoading(true)

        const token = window.localStorage.getItem("token")

        const config = {
            headers: {
                Authorization: token
            }
        }

        axios.get(BASE_URL + `/comments/${comment.id}/like`, config)
            .then((response) => {
                // console.log(response.data[0])
                const like = response.data[0]
                if (like) {
                    if (like.like === 1) {
                        setActiveBtn("like")
                    } else if (like.like === 0) {
                        setActiveBtn("dislike")
                    }
                } else {
                    setActiveBtn("none")
                }
            })
            .catch((error) => {
                console.error(error.response)
                window.alert(error.response.data)
            })
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

            if (activeBtn === "none") {
                setActiveBtn("like")
            } else if (activeBtn === "dislike") {
                setActiveBtn("like")
            } else {
                setActiveBtn("none")
            }
        } catch (error) {
            console.error(error.response)
            // window.alert(error.response.data)
            showToast({ type: "error", message: `${error.response.data}` })
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

            if (activeBtn === "none" && rate === 0) {
                setActiveBtn("dislike")
            } else if (activeBtn === "none") {
                setActiveBtn("dislike")
            } else if (activeBtn === "like") {
                setActiveBtn("dislike")
            } else {
                setActiveBtn("none")
            }
        } catch (error) {
            console.error(error.response)
            // window.alert(error.response.data)
            showToast({ type: "error", message: `${error.response.data}` })
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
                        <PiArrowFatUpDuotone id="likebtn" class={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={() => doLike()}></PiArrowFatUpDuotone>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <PiArrowFatDownDuotone id="likebtn" class={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={() => doDislike()}></PiArrowFatDownDuotone>
                    </LikeContainer>
                    <AiFillEdit id="open-modal" class="editbtn" onClick={() => setIsOpenModal(true)} />
                    <AiFillDelete class="trash" onClick={() => setIsOpenDelModal(true)}></AiFillDelete>
                </CommentInformation>
            </CardContainer>
            <EditModal isOpenModal={isOpenModal} setOpenModal={() => setIsOpenModal(!isOpenModal)}>
                <CardContainerModal>
                    <PostCreator>Enviado por: {comment.creator.nickname}</PostCreator>
                    <ContentComment>{comment.content}</ContentComment>
                    <CommentInformation>
                        <LikeContainer>
                            <PiArrowFatUpDuotone id="likebtn" class={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={() => doLike()}></PiArrowFatUpDuotone>
                            <LikeRate>{handleNumbers(rate)}</LikeRate>
                            <PiArrowFatDownDuotone id="likebtn" class={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={() => doDislike()}></PiArrowFatDownDuotone>
                        </LikeContainer>
                    </CommentInformation>
                </CardContainerModal>
                <FormModal onSubmit={editComment}>
                    <InputModal value={commentContent} onChange={(e) => setCommentContent(e.target.value)} placeholder="Edite seu comentário" />
                    <BotaoEditPost>Postar</BotaoEditPost>
                </FormModal>
            </EditModal>
            <ToastAnimated />
            <DeleteModal isOpenDelModal={isOpenDelModal} setIsOpenDelModal={() => setIsOpenDelModal(!isOpenDelModal)} >
                <CardContainerModal>
                    <PostCreator>Enviado por: {comment.creator.nickname}</PostCreator>
                    <ContentComment>{comment.content}</ContentComment>
                    <CommentInformation>
                        <LikeContainer>
                            <PiArrowFatUpDuotone id="likebtn" class={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={() => doLike()}></PiArrowFatUpDuotone>
                            <LikeRate>{handleNumbers(rate)}</LikeRate>
                            <PiArrowFatDownDuotone id="likebtn" class={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={() => doDislike()}></PiArrowFatDownDuotone>
                        </LikeContainer>
                    </CommentInformation>
                </CardContainerModal>
                <FormDelModal>
                    <h3>Tem certeza que deseja excluir seu comentário?</h3>
                    <DivDeleteModal>
                        <span onClick={() => setIsOpenDelModal(!isOpenDelModal)}>Não</span>
                        <span onClick={() => deleteComment()}>Sim</span>
                    </DivDeleteModal>
                </FormDelModal>
            </DeleteModal>
        </>
    )
}