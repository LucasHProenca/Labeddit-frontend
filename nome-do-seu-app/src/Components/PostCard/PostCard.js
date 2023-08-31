import axios from "axios"
import { useContext, useEffect, useState } from "react"
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
    FormDelModal,
    DivDeleteModal
} from "./postCardStyle"
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { PiArrowFatUpDuotone, PiArrowFatDownDuotone } from "react-icons/pi"
import { BiMessage } from "react-icons/bi"
import EditModal from "../Modal/editModal"
import ToastAnimated, { showToast } from "../../Components/Toast/Toast"
import DeleteModal from "../Modal/deleteModal"

export default function PostCard(props) {

    const { post, id } = props
    const navigate = useNavigate()
    const context = useContext(globalContext)
    const { getPosts } = context
    const [postContent, setPostContent] = useState("")
    let params = useLocation()
    const [isLoading, setIsLoading] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [isOpenDelModal, setIsOpenDelModal] = useState(false)
    const [activeBtn, setActiveBtn] = useState("none")

    useEffect(() => {
        getLikes()
    }, [])

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
            showToast({ type: "success", message: "Post apagado com sucesso" })
        } catch (error) {
            console.error(error.response)
            showToast({ type: "error", message: `${error.response.data}` })
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
            if (typeof error.response.data === "string") {
                showToast({ type: "error", message: `${error.response.data}` })
            } else {
                showToast({ type: "error", message: "Não é possível publicar um post vazio" })
            }
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

        axios.get(BASE_URL + `/posts/${post.id}/like`, config)
            .then((response) => {
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

            await axios.put(BASE_URL + `/posts/${post.id}/like`, body, config)
            setIsLoading(false)
            getPosts()
            if (activeBtn === "none") {
                setActiveBtn("like")
            } else if (activeBtn === "dislike") {
                setActiveBtn("like")
            } else {
                setActiveBtn("none")
            }
        } catch (error) {
            console.error(error.response)
            showToast({ type: "error", message: `${error.response.data}` })
        }
    }

    let rate = post.likes - post.dislikes

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
    const screenRender = () => {
        if (params.pathname === "/posts") {
            return <><CardContainer>
                <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                <ContentPost>{post.content}</ContentPost>
                <PostInformation>
                    <LikeContainer>
                        <PiArrowFatUpDuotone id="likebtn" class={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={() => doLike()}></PiArrowFatUpDuotone>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <PiArrowFatDownDuotone id="likebtn" class={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={() => doDislike()}></PiArrowFatDownDuotone>
                    </LikeContainer>
                    <CommentsContainer>
                        <BiMessage onClick={() => goToCommentsPage(navigate, id)}></BiMessage>
                        <CommentsQuantity>{post.comments}</CommentsQuantity>
                    </CommentsContainer>
                    <AiFillEdit id="open-modal" class="editbtn" onClick={() => setIsOpenModal(true)} />
                    <AiFillDelete class="trash" onClick={() => setIsOpenDelModal(true)}></AiFillDelete>
                </PostInformation>
            </CardContainer>
                <EditModal isOpenModal={isOpenModal} setOpenModal={() => setIsOpenModal(!isOpenModal)} >
                    <CardContainerModal>
                        <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                        <ContentPost>{post.content}</ContentPost>
                        <PostInformation>
                            <LikeContainer>
                                <PiArrowFatUpDuotone id="likebtn" class={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={() => doLike()}></PiArrowFatUpDuotone>
                                <LikeRate>{handleNumbers(rate)}</LikeRate>
                                <PiArrowFatDownDuotone id="likebtn" class={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={() => doDislike()}></PiArrowFatDownDuotone>
                            </LikeContainer>
                            <CommentsContainer>
                                <BiMessage></BiMessage>
                                <CommentsQuantity>{post.comments}</CommentsQuantity>
                            </CommentsContainer>
                        </PostInformation>
                    </CardContainerModal>
                    <FormModal onSubmit={editPost}>
                        <InputModal value={postContent} onChange={(e) => setPostContent(e.target.value)} placeholder="Edite seu post" />
                        <BotaoEditPost>Postar</BotaoEditPost>
                    </FormModal>
                </EditModal>
                <ToastAnimated />
                <DeleteModal isOpenDelModal={isOpenDelModal} setIsOpenDelModal={() => setIsOpenDelModal(!isOpenDelModal)} >
                    <CardContainerModal>
                        <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                        <ContentPost>{post.content}</ContentPost>
                        <PostInformation>
                            <LikeContainer>
                                <PiArrowFatUpDuotone id="likebtn" class={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={() => doLike()}></PiArrowFatUpDuotone>
                                <LikeRate>{handleNumbers(rate)}</LikeRate>
                                <PiArrowFatDownDuotone id="likebtn" class={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={() => doDislike()}></PiArrowFatDownDuotone>
                            </LikeContainer>
                            <CommentsContainer>
                                <BiMessage></BiMessage>
                                <CommentsQuantity>{post.comments}</CommentsQuantity>
                            </CommentsContainer>
                        </PostInformation>
                    </CardContainerModal>
                    <FormDelModal>
                        <h3>Tem certeza que deseja excluir seu post?</h3>
                        <DivDeleteModal>
                            <span onClick={() => setIsOpenDelModal(!isOpenDelModal)}>Não</span>
                            <span onClick={() => deletePost()}>Sim</span>
                        </DivDeleteModal>
                    </FormDelModal>
                </DeleteModal>
            </>
        } else if (params.pathname.includes("/post-comments/")) {
            return <CardContainer>
                <PostCreator>Enviado por: {post.creator.name}</PostCreator>
                <ContentPost>{post.content}</ContentPost>
                <PostInformation>
                    <LikeContainer>
                        <PiArrowFatUpDuotone id="likebtn" class={`btn ${activeBtn === "like" ? "like-active" : ""}`} onClick={() => doLike()}></PiArrowFatUpDuotone>
                        <LikeRate>{handleNumbers(rate)}</LikeRate>
                        <PiArrowFatDownDuotone id="likebtn" class={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`} onClick={() => doDislike()}>⇩</PiArrowFatDownDuotone>
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