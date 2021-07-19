import React, { useState, createContext } from "react"

export const FriendContext = createContext()

export const FriendProvider = (props) => {
    const [friends, setFriends] = useState([])
    const [users, setUsers] = useState([])

    const getUsers = () => {
        return fetch("http://localhost:8088/users")
        .then(res => res.json())
        .then(setUsers)
    }

    const getFriends = (id) => {
        return fetch(`http://localhost:8088/friends/?_expand=user`)
        .then(res => res.json())
        .then(setFriends) 
    }

    const addFriend = friendObj => {
        return fetch("http://localhost:8088/friends", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(friendObj)
        })
        .then(response => response.json())
        .then(getFriends)
    }

const deleteFriend = friendId => {
    return fetch(`http://localhost:8088/friends/${friendId}`, {
        method: "DELETE",
    })
    .then(getFriends)
}

    return (
        <FriendContext.Provider value={{
            users, getUsers, setUsers, friends, getFriends, setFriends, addFriend, deleteFriend
        }}>
            {props.children}
        </FriendContext.Provider>
    )
}