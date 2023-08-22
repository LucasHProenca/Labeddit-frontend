import { useEffect } from "react"
import { goToLoginPage } from "../Router/coordinator"

export const useProtectedPage = (navigate) => {
    useEffect(() => {
        const token = localStorage.getItem("token")
        if(!token) {
            goToLoginPage(navigate)
        }
    }, [navigate])
}