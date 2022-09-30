import React,{ createContext, useState } from "react";



export const UserContext=createContext(null)


export const UserState=({children})=>{
    const [userExist,setUserExist] = useState(false)
    
        const data={
            userExist,
            setUserExist
        }

    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}