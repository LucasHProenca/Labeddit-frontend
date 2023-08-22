import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import {BASE_URL} from "../../constants/constants"
import axios from "axios";
import { goToHomePage, goToSignupPage } from "../../Router/coordinator";
import Logo from "../../assets/midia/Logo.png";
import {FormLogin, LinhaEntreBotoes, SeparacaoBotoes, LogoContainer, ImgLogo, CabecalhoLogin, SloganLogin, InputLogin, BotaoContinuar, BotaoCriarConta} from "./loginStyle"
import { globalContext } from "../../GlobalState/GlobalStateContext";

export default function LoginPage () {

    const navigate = useNavigate()
    const context = useContext(globalContext)
    const {isLoggedIn, setIsLoggedIn} = context

    const [isLoading, setIsLoading] = useState(false)

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const onChangeForm = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const [showPassword, setShowPassword] = useState(false)

    const login = async(e) => {
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
            window.alert(error.response.data)
        }
    }

    return (
        <div>
           <LogoContainer>
            <ImgLogo src ={Logo} alt = "logo" />
            <CabecalhoLogin>LabEddit</CabecalhoLogin>
            <SloganLogin>O projeto de rede social da Labenu</SloganLogin>
           </LogoContainer>
            <FormLogin onSubmit={login} autoComplete="off">
               
                    <label></label>
                    <InputLogin
                    name = {"email"}
                    value = {form.email}
                    onChange = {onChangeForm}
                    placeholder="E-mail"
                    />
                
                
                    <label></label>
                    <InputLogin
                    name= {"password"}
                    value={form.password}
                    onChange = {onChangeForm}
                    type={showPassword? "text" : "password"}
                    placeholder="Senha"
                    />
                
                <BotaoContinuar disabled = {isLoading}>Continuar</BotaoContinuar>
            </FormLogin>
            <LinhaEntreBotoes></LinhaEntreBotoes>
            <SeparacaoBotoes>
            <BotaoCriarConta disabled={isLoading} onClick = {() => goToSignupPage(navigate)}>Crie uma conta!</BotaoCriarConta>
            </SeparacaoBotoes>
        </div>
    )
}