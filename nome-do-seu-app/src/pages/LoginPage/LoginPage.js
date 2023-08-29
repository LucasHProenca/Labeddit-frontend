import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/constants"
import axios from "axios";
import { goToHomePage, goToSignupPage } from "../../Router/coordinator";
import Logo from "../../assets/midia/Logo.png";
import { FormLogin, LinhaEntreBotoes, SeparacaoBotoes, LogoContainer, ImgLogo, CabecalhoLogin, SloganLogin, InputLogin, BotaoContinuar, BotaoCriarConta, PasswordView } from "./loginStyle"
import { globalContext } from "../../GlobalState/GlobalStateContext";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import ToastAnimated, { showToast } from "../../Components/Toast/Toast"

export default function LoginPage() {

    const navigate = useNavigate()
    const context = useContext(globalContext)
    const { isLoggedIn, setIsLoggedIn } = context

    const [isLoading, setIsLoading] = useState(false)

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = (type) => {
        setShowPassword(type);
    };

    const login = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)

            const body = {
                email: form.email,
                password: form.password
            }
            await axios.post(BASE_URL + "/users/login", body)
                .then((res) => {
                    localStorage.setItem("token", res.data.token)

                })

            setIsLoading(false)
            goToHomePage(navigate)
            setIsLoggedIn(true)
        } catch (error) {
            setIsLoading(false)
            console.error(error.response)
            // window.alert(error.response.data)
            if(typeof error.response.data === "string") {
                showToast({ type: "error", message: `${error.response.data}`})
            } else {
                showToast({ type: "error", message: "Verifique suas informações" })
            }
        }
    }

    return (
        <>
            <LogoContainer>
                <ImgLogo src={Logo} alt="logo" />
                <CabecalhoLogin>LabEddit</CabecalhoLogin>
                <SloganLogin>O projeto de rede social da Labenu</SloganLogin>
            </LogoContainer>
            <FormLogin onSubmit={login} autoComplete="off">

                <InputLogin
                    name={"email"}
                    value={form.email}
                    onChange={onChangeForm}
                    placeholder="E-mail"
                    required
                    autoComplete="email"
                />

                <PasswordView>
                <InputLogin
                    name={"password"}
                    value={form.password}
                    onChange={onChangeForm}
                    type={showPassword ? "text" : "password"}
                    placeholder="Senha"
                    required
                    autoComplete="current-password"
                />
                {showPassword === false ? (
                    <AiOutlineEye
                        class = "eye"
                        onClick={() => handleShowPassword(true)}
                    />
                ) : (
                    <AiOutlineEyeInvisible
                        class = "eye"          
                        onClick={() => handleShowPassword(false)}
                    />
                )}
                </PasswordView>
                <ToastAnimated />
                <BotaoContinuar disabled={isLoading}>Continuar</BotaoContinuar>
            </FormLogin>
            <LinhaEntreBotoes></LinhaEntreBotoes>
            <SeparacaoBotoes>
                <BotaoCriarConta disabled={isLoading} onClick={() => goToSignupPage(navigate)}>Crie uma conta!</BotaoCriarConta>
            </SeparacaoBotoes>
        </>
    )
}