import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "../user/UserProvider"

export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext)
    const { users, getUsers } = useContext(UserContext)

    const [message, setMessage] = useState({
            textArea: "",
            date: "",
            userId: 0,
            timeStamp: 0,
    });

    const history = useHistory

    useEffect(() => {
        getUsers()
    }, []);

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }

    const handleClickSaveMessage = (event) => {
        event.preventDefault()

        const userId = parseInt(message.userId)

        if (userId === 0) {
        window.alert("Please select a user")
        } else {

        const newMessage = {
            
        }
        }
    }

}