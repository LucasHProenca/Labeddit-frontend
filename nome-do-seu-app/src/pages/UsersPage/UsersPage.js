import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UserCard from "../../Components/UserCard/UserCard"
import { globalContext } from "../../GlobalState/GlobalStateContext"
import { useProtectedPage } from "../../hooks/use-protected-page"
import { ContainerUsersPage } from "./usersPageStyle"

export default function UsersPage() {

    const navigate = useNavigate()
    useProtectedPage(navigate)
    const context = useContext(globalContext)
    const { users, getUsers} = context

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            getUsers()
        }
    }, [])

    return (
        <ContainerUsersPage>
            {users
            .sort((a, b) => {
                return new Date(b.createdAt) - new Date(a.createdAt)
            })
            .map((user) => {
                return <UserCard key={user.id} user = {user} id = {user.id} />
            })
            }
        </ContainerUsersPage>

    )
}