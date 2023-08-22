import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useProtectedPage } from "../../hooks/use-protected-page"
import { goToLoginPage } from "../../Router/coordinator"

export default function HomePage () {
    const navigate = useNavigate()
    useProtectedPage(navigate)
    return (
        <div>
            Oi vc está na Home
        </div>
    )
}