import axios from "axios"
import { useContext, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { goToCommentsPage } from "../../Router/coordinator"
import {
    CardContainer,
    PostCreator,
    ContentPost,
    PostInformation,
    LikeContainer,
    LikeRate,
    CommentsContainer,
    CommentsQuantity,
    CardContainerModal,
    InputModal,
    BotaoEditPost,
    FormModal,
} from "./postCardStyle"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { PiArrowFatUpDuotone, PiArrowFatDownDuotone } from "react-icons/pi"
import { BiMessage } from "react-icons/bi"
import EditModal from "../Modal/editModal"
import ToastAnimated, { showToast } from "../../Components/Toast/Toast"

export default function PostCard(props) {

    const { post, id } = props
    const navigate = useNavigate()
    const context = useContext(globalContext)
    const { getPosts } = context
    const [postContent, setPostContent] = useState("")
    let params = useLocation()
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

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

    const editPost = async (e) => {
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

            await axios.put(BASE_URL + `/posts/${post.id}`, body, config)
            setPostContent("")
            setIsLoading(false)
            getPosts()
            showToast({ type: "success", message: "Editado com sucesso" })
        } catch (error) {
            console.error(error.response)
            // window.alert(error.response.data)
            if(typeof error.response.data === "string") {
                showToast({ type: "error", message: `${error.response.data}`})
            } else {
                showToast({ type: "error", message: "Não é possível publicar um post vazio" })
            }
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
            return <><CardContainer>
                <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                <ContentPost>{post.content}</ContentPost>
                <PostInformation>
                    <LikeContainer>
                        <PiArrowFatUpDuotone class="like" onClick={() => doLike()}></PiArrowFatUpDuotone>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <PiArrowFatDownDuotone class="dislike" onClick={() => doDislike()}></PiArrowFatDownDuotone>
                    </LikeContainer>
                    <CommentsContainer>
                        <BiMessage onClick={() => goToCommentsPage(navigate, id)}></BiMessage>
                        <CommentsQuantity>{post.comments}</CommentsQuantity>
                    </CommentsContainer>
                    <AiFillEdit id="open-modal" onClick={() => setIsOpenModal(true)} />
                    <AiFillDelete class="trash" onClick={() => deletePost()}></AiFillDelete>
                </PostInformation>
            </CardContainer>
                <EditModal isOpenModal={isOpenModal} setOpenModal = {() => setIsOpenModal(!isOpenModal)} >
                <CardContainerModal>
                <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                <ContentPost>{post.content}</ContentPost>
                <PostInformation>
                    <LikeContainer>
                        <PiArrowFatUpDuotone class="like" onClick={() => doLike()}></PiArrowFatUpDuotone>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <PiArrowFatDownDuotone class="dislike" onClick={() => doDislike()}></PiArrowFatDownDuotone>
                    </LikeContainer>
                    <CommentsContainer>
                        <BiMessage></BiMessage>
                        <CommentsQuantity>{post.comments}</CommentsQuantity>
                    </CommentsContainer>
                </PostInformation>
            </CardContainerModal>
            <FormModal onSubmit = {editPost}>
                <InputModal value={postContent} onChange = {(e) => setPostContent(e.target.value)} placeholder = "Edite seu post"/>
                <BotaoEditPost>Postar</BotaoEditPost>
            </FormModal>
                </EditModal>
                <ToastAnimated />
            </>
        } else if (params.pathname.includes("/post-comments/")) {
            return <CardContainer>
                <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                <ContentPost>{post.content}</ContentPost>
                <PostInformation>
                    <LikeContainer>
                        <PiArrowFatUpDuotone class="like" onClick={() => doLike()}></PiArrowFatUpDuotone>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <PiArrowFatDownDuotone class="dislike" onClick={() => doDislike()}>⇩</PiArrowFatDownDuotone>
                    </LikeContainer>
                    <CommentsContainer>
                        <BiMessage></BiMessage>
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