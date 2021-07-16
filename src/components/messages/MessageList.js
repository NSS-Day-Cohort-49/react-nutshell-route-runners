import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import "./Message.css"

export const MessageList = () => {

    const { getMessages, messages } = useContext(MessageContext)
    const history = useHistory()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        getMessages()
    }, [])

    return (
        <>
            <h1>Messages</h1>

            <button onClick={() => history.push("/messages/create")}>
            Write a new Message
            </button>
            <div className="messages">
            {
                messages.map(message => {
                return <MessageCard key={message.id} message={message} />
                })
            }
            </div>
        </>
        )
    }

