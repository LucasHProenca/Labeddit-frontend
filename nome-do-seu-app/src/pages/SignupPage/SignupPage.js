import { Checkbox } from "@chakra-ui/react"
import axios from "axios"
import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../../constants/constants"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { goToHomePage } from "../../Router/coordinator"
import { FormSignup, InputSignup, BotaoCadastrar, TermosContrato, CabeçalhoSignUp } from "./signupStyle"

export default function SignUpPage() {

    const navigate = useNavigate()
    const context = useContext(globalContext)
    const {isLoggedIn, setIsLoggedIn} = context
    const [isLoading, setIsLoading] = useState(false)

    const [form, setForm] = useState({
        nickname: "",
        email: "",
        password: ""
    })

    const onChangeForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const [showPassword, setShowPassword] = useState(false)

    const signUp = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)
            const body = {
                nickname: form.nickname,
                email: form.email,
                password: form.password
            }
            await axios.post(BASE_URL + "/users/signup", body)
                .then((res) => {
                    localStorage.setItem("token", res.data.token)
                    console.log(res)
                })
            setIsLoggedIn(true)
            setIsLoading(false)
            goToHomePage(navigate)
        } catch (error) {
            setIsLoading(false)
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    return (
        <div>
            <CabeçalhoSignUp>Olá, boas vidas ao LabEddit ;)</CabeçalhoSignUp>
            <FormSignup onSubmit={signUp} autoComplete="off">
                <label></label>
                <InputSignup
                    name={"nickname"}
                    value={form.nickname}
                    onChange={onChangeForm}
                    placeholder="Apelido"
                />

                <label></label>
                <InputSignup
                    name={"email"}
                    value={form.email}
                    onChange={onChangeForm}
                    placeholder="E-mail"
                />

                <label></label>
                <InputSignup
                    name={"password"}
                    value={form.password}
                    onChange={onChangeForm}
                    placeholder="Senha"
                    type={showPassword? "text" : "password"}
                />
                <TermosContrato>
                    Ao continuar, você concorda com o nosso <a href="https://www.labenu.com.br/?utm_term=labenu&utm_campaign=&utm_source=googleads&utm_medium=cpc&hsa_acc=3391787529&hsa_cam=20417453410&hsa_grp=147104971850&hsa_ad=667659725933&hsa_src=g&hsa_tgt=kwd-949277095394&hsa_kw=labenu&hsa_mt=b&hsa_net=googleads&hsa_ver=3&gad=1&gclid=Cj0KCQjwuZGnBhD1ARIsACxbAVhiq3PttnH_AbjK5XMjcsoLzNBpTSfvEpDjyap7BTBZPkLwA-kBCI0aAtlREALw_wcB">
                        Contrato de usuário
                    </a> e nossa <a href="https://www.labenu.com.br/?utm_term=labenu&utm_campaign=&utm_source=googleads&utm_medium=cpc&hsa_acc=3391787529&hsa_cam=20417453410&hsa_grp=147104971850&hsa_ad=667659725933&hsa_src=g&hsa_tgt=kwd-949277095394&hsa_kw=labenu&hsa_mt=b&hsa_net=googleads&hsa_ver=3&gad=1&gclid=Cj0KCQjwuZGnBhD1ARIsACxbAVhiq3PttnH_AbjK5XMjcsoLzNBpTSfvEpDjyap7BTBZPkLwA-kBCI0aAtlREALw_wcB">
                        Política de Privacidade
                    </a>
                </TermosContrato>
                <div>
                <input type="checkbox" id="exemple1"/>
                <label for = "exemple1">Eu concordo em receber email sobre coisas legais no Labeddit</label>
                </div> 
                <BotaoCadastrar disabled = {isLoading}>Cadastrar</BotaoCadastrar>
            </FormSignup>
        </div>
    )
}