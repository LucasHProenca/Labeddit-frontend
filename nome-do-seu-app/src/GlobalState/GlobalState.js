import axios from "axios";
import { useEffect, useState } from "react";
import { globalContext } from "./GlobalStateContext";

export const GlobalState = ({children}) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const context = {
        isLoggedIn,
        setIsLoggedIn
    }

    return (
        <globalContext.Provider value={context}>
            {children}
        </globalContext.Provider>
    )
}