import React, { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {
    const [friends] = useState([])

    const getFriends = () => {
        return fetch("http://localhost:8088/friends")
        .then(res => res.json())
        // .then(setFriends)
    }

    const getFriendById = (id) => {
        return fetch(`http://localhost:8088/friends/${id}?_expand=user`)
        .then(res => res.json()) 
    }

    return (
        <FriendContext.Provider value={{
            friends, getFriends, getFriendById
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}