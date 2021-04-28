import React, { createContext, useState, useEffect }from "react";
import axios from "axios"

export const Context = createContext();

export const UserContext = ({children}) => {
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const getUser = async () =>{
            const {data} = await axios.get("/users")
            setCurrentUser(data)
        }
        getUser()
    }, [])

    const changeCurrentUser = (user) =>{
        console.log(user)
        if(!user){
            return 
        }
        setCurrentUser(user)
    }

    return (
        <Context.Provider value={{currentUser, changeCurrentUser}}>
            {children}
        </Context.Provider>
    )
}