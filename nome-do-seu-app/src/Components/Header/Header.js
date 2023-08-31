import { useContext} from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { goToHomePage, goToLoginPage, goToUserPage} from "../../Router/coordinator"
import { HeaderContainer, ImgHeader, ButtonHeader} from "./headerStyle"
import Logo from "../../assets/midia/LogoHeader.png"
import {TfiClose} from "react-icons/tfi"
import {BiSolidUserAccount} from "react-icons/bi"

export default function Header() {

    let params = useLocation()
    const navigate = useNavigate()
    const context = useContext(globalContext)
    const { isLoggedIn, setIsLoggedIn} = context

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
                <BiSolidUserAccount class = "userBtn" onClick={() => goToUserPage(navigate)}>
                </BiSolidUserAccount>
                <ImgHeader src={Logo} alt = "logo"  />
                <ButtonHeader onClick={() => buttonAction()}>
                    {buttonText}
                </ButtonHeader>
            </HeaderContainer>
        } else if (params.pathname.includes("/post-comments/")) {
            return <HeaderContainer>
                <TfiClose class = "closeBtn" onClick={() => goToHomePage(navigate)}>
                </TfiClose>
                <ImgHeader src={Logo} alt = "logo"  />
                <ButtonHeader onClick={() => buttonAction()}>
                    {buttonText}
                </ButtonHeader>
            </HeaderContainer>
        } else if (params.pathname === ("/users")) {
            return <HeaderContainer>
                <TfiClose class = "closeBtn" onClick={() => goToHomePage(navigate)}>
                </TfiClose>
                <ImgHeader src={Logo} alt = "logo"  />
                <ButtonHeader onClick={() => buttonAction()}>
                    {buttonText}
                </ButtonHeader>
            </HeaderContainer>
        } else if (params.pathname.includes("/user-details/")) {
            return <HeaderContainer>
                <TfiClose class = "closeBtn" onClick={() => goToUserPage(navigate)}>
                </TfiClose>
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