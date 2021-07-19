import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"




export const MessageDetail = () => {
    const { getMessageById, releaseMessage } = useContext(MessageContext)

    const [message, setMessage] = useState({})

    const {messageId} = useParams();

    const  history = useHistory()

    useEffect(() => {
        console.log("useEffect", messageId)
        getMessageById(messageId)
        .then((response) => {
        setMessage(response)
        })
    }, [])
    
    const handleRelease = () => {
        releaseMessage(message.id)
            .then(() => {
                history.push("/messages")
            })
    }

    return (
        <section className="message">
        <h3 className="message__textArea">{message.textArea}</h3>
        <div className="message__user">user: {message.user?.name}</div>
        <button onClick={handleRelease}>Release Message</button>
        </section>
    )
    }
