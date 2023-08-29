import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";
import { globalContext } from "./GlobalStateContext";

export const GlobalState = ({children}) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if(window.localStorage.getItem("token")){
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    const [posts, setPosts] = useState([])
    
    const getPosts = async () => {
        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const response = await axios.get(BASE_URL + "/posts", config)
            setPosts(response.data)

        } catch (error) {
            console.error(error.response)
            window.alert(error.response.data)
        }
    }

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            const token = window.localStorage.getItem("token")

            const config = {
                headers: {
                    Authorization: token
                }
            }

            const response = await axios.get(BASE_URL + "/users", config)
            setUsers(response.data)

        } catch (error) {
            console.error(error.response)
            // window.alert(error.response.data)
        }
    }

    const context = {
        isLoggedIn,
        setIsLoggedIn,
        posts,
        getPosts,
        users,
        getUsers
    }

    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}