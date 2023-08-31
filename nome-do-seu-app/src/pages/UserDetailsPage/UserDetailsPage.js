import { useContext, useEffect } from "react"
import { useLocation, useParams } from "react-router-dom"
import UserCard from "../../Components/UserCard/UserCard"
import { globalContext } from "../../GlobalState/GlobalStateContext"

export default function UserDetailsPage() {
    const context = useContext(globalContext)
    const { users, getUsers } = context
    let pathParams = useParams()
    let params = useLocation()

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        if (token) {
            getUsers()
        }
    }, [])
    const id = params.pathname.split("/")[2]

    const findUser = users.find((user) =>
        user.id === id
    )
        
    const result = () => {
        if(findUser) {
            return <UserCard user = {findUser}/>
        }
    }
    return (
        <>
            {result()}
        </>
    )
}