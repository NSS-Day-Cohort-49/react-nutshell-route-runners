import React, { useContext, useEffect, useState } from "react"
import { MessageContext } from "./MessageProvider"
import { useParams, useHistory } from "react-router-dom"

const  history = useHistory()


export const MessageDetail = () => {
    const { getMessageById, releaseMessage } = useContext(MessageContext)

    const [message, setMessage] = useState({})

    const {messageId} = useParams();

    useEffect(() => {
        console.log("useEffect", messageId)
        getMessageById(messageId)
        .then((response) => {
        setMessage(response)
        })
    }, [])
    
    const handleRelease = () => {
        releaseAnimal(animal.id)
            .then(() => {
                history.push("/animals")
            })
    }

    return (
        <section className="message">
        <h3 className="message__textArea">{message.textArea}</h3>
        <div className="message__user">user: {message.user?.name}</div>
        <button onClick={handleRelease}>Release Animal</button>
        </section>
    )
    }
