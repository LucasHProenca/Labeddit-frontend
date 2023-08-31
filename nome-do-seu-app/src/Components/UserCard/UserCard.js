import { useLocation, useNavigate } from "react-router-dom"
import { AiFillEdit } from "react-icons/ai"
import { goToLoginPage, goToUserDetailsPage, goToUserPage } from "../../Router/coordinator"
import { useContext, useState } from "react"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { BASE_URL } from "../../constants/constants"
import ToastAnimated, { showToast } from "../../Components/Toast/Toast"
import axios from "axios"
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BotaoEditar, DetailsContainer, ContainerUserDetails, BtnOptions, CardModal, ContainerModal, CardContainer, DivDeleteModal, FormDelModal, FormEditUser, InputEditUser, PasswordView } from "./userCardStyle"
import DeleteModal from "../Modal/deleteModal"

export default function UserCard(props) {

    const { user, id } = props
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
    const context = useContext(globalContext)
    const { getUsers, setIsLoggedIn } = context
    let params = useLocation()
    const [showElement, setShowElement] = useState(false)
    const [isOpenDelModal, setIsOpenDelModal] = useState(false)
    const [form, setForm] = useState({
        nickname: "",
        email: "",
        password: ""
    })

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (type) => {
        setShowPassword(type);
    };

    const deleteUser = async () => {
        setIsLoading(true)
        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            await axios.delete(BASE_URL + `/users/${user.id}`, config)

            setIsLoading(false)
            window.localStorage.removeItem("token")
            setIsLoggedIn(false)
            goToLoginPage(navigate)

            showToast({ type: "success", message: "Usuário apagado com sucesso" })
        } catch (error) {
            console.error(error.response)
            showToast({ type: "error", message: `${error.response.data}` })
        }
    }

    const editUser = async (e) => {
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
                nickname: form.nickname || undefined,
                email: form.email || undefined,
                password: form.password || undefined
            }

            await axios.put(BASE_URL + `/users/${user.id}`, body, config)
            setForm("")
            setIsLoading(false)
            getUsers()
            showToast({ type: "success", message: "Informações editadas com sucesso" })
        } catch (error) {
            console.error(error.response)
            if (typeof error.response.data === "string") {
                showToast({ type: "error", message: `${error.response.data}` })
            } else {
                showToast({ type: "error", message: "Você não tem permissão pra editar esse usuário" })
            }
        }
    }


    const screenRender = () => {
        if (params.pathname === "/users") {
            return <>
                <CardContainer>
                    <h2>{user.nickname}</h2>
                    <p>{user.email}</p>
                    <AiFillEdit class="editbtn" onClick={() => goToUserDetailsPage(navigate, id)} />
                </CardContainer>
            </>
        } else if (params.pathname.includes("/user-details/")) {
            return <ContainerUserDetails>
                <BtnOptions onClick={() => setShowElement(!showElement)}>Editar Informações</BtnOptions>
                {showElement ?
                    <DetailsContainer>
                        <CardContainer>
                            <h2>{user.nickname}</h2>
                            <p>{user.email}</p>
                        </CardContainer>
                        <FormEditUser onSubmit={editUser} autoComplete="off">
                            <InputEditUser
                                name={"nickname"}
                                value={form.nickname}
                                onChange={onChangeForm}
                                placeholder="Apelido"
                            />

                            <InputEditUser
                                name={"email"}
                                value={form.email}
                                onChange={onChangeForm}
                                placeholder="E-mail"
                                autoComplete="email"
                            />

                            <PasswordView>
                                <InputEditUser
                                    name={"password"}
                                    value={form.password}
                                    onChange={onChangeForm}
                                    placeholder="Senha"
                                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,12}$"
                                    title="Sua senha deve ter entre 8 e 12 caracteres, sendo um maíusculo, um número e um caracter especial"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                />

                                {showPassword === false ? (
                                    <AiOutlineEye
                                        class="eye"
                                        onClick={() => handleShowPassword(true)}
                                    />
                                ) : (
                                    <AiOutlineEyeInvisible
                                        class="eye"
                                        onClick={() => handleShowPassword(false)}
                                    />
                                )}
                            </PasswordView>
                            <ToastAnimated />
                            <BotaoEditar disabled={isLoading}>Concluir</BotaoEditar>
                        </FormEditUser>
                    </DetailsContainer>
                    : null}
                <BtnOptions onClick={() => setIsOpenDelModal(!isOpenDelModal)}>Excluir Conta!</BtnOptions>
                <DeleteModal isOpenDelModal={isOpenDelModal} setIsOpenDelModal={() => setIsOpenDelModal(!isOpenDelModal)} >
                    <ContainerModal>
                        <CardModal>
                            <h2>{user.nickname}</h2>
                            <p>{user.email}</p>
                        </CardModal>
                    </ContainerModal>
                    <FormDelModal>
                        <h3>Tem certeza que deseja excluir essa conta?</h3>
                        <DivDeleteModal>
                            <span onClick={() => setIsOpenDelModal(!isOpenDelModal)}>Não</span>
                            <span onClick={() => deleteUser()}>Sim</span>
                        </DivDeleteModal>
                    </FormDelModal>
                    <ToastAnimated/>
                </DeleteModal>
            </ContainerUserDetails>

        }
    }

    return (
        screenRender()
    )
}