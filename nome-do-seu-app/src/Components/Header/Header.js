import { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { goToHomePage, goToLoginPage } from "../../Router/coordinator"
import { HeaderContainer, ImgHeader, ButtonHeader, BtnBackPage } from "./headerStyle"
import Logo from "../../assets/midia/LogoHeader.png"
export default function Header() {

    let params = useLocation()
    const navigate = useNavigate()
    const context = useContext(globalContext)
    const { isLoggedIn, setIsLoggedIn } = context

    const buttonAction = () => {
        if (isLoggedIn) {
            localStorage.removeItem("token")
            setIsLoggedIn(false)
        }
        goToLoginPage(navigate)

    }

  let buttonText = isLoggedIn ? "Logout" : "Login"

    const screenRender = () => {
        if (params.pathname === "/") {
            return <div></div>

        } else if (params.pathname === "/signup") {
            return <HeaderContainer>
                <ImgHeader src={Logo} alt = "logo" />
                <ButtonHeader onClick={() => buttonAction()}>
                    {buttonText}
                </ButtonHeader>
            </HeaderContainer>
        } else if (params.pathname === "/posts") {
            return <HeaderContainer>
                <ImgHeader src={Logo} alt = "logo"  />
                <ButtonHeader onClick={() => buttonAction()}>
                    {buttonText}
                </ButtonHeader>
            </HeaderContainer>
        } else if (params.pathname.includes("/post-comments/")) {
            return <HeaderContainer>
                <BtnBackPage onClick={() => goToHomePage(navigate)}>
                    ❌
                </BtnBackPage>
                <ImgHeader src={Logo} alt = "logo"  />
                <ButtonHeader onClick={() => buttonAction()}>
                    {buttonText}
                </ButtonHeader>
            </HeaderContainer>
        }
    }

    return (
        screenRender()
    )
}