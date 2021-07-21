import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { MessageContext } from "./MessageProvider"
import { MessageCard } from "./MessageCard"
import { FriendContext } from "../friend/FriendProvider"
import "./Message.css"

export const MessageList = () => {
    const { getFriends, friends } = useContext(FriendContext)
    const { getMessages, messages } = useContext(MessageContext)
    const history = useHistory()

    // Initialization effect hook -> Go get animal data
    useEffect(()=>{
        console.log("MessageList: useEffect - getMessages", messages)
        getFriends().then(getMessages())
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
                    if(
                        message.userId == sessionStorage.getItem("nutshell_user")  || friends.find( friend => message.userId === friend.userId)
                    )
                return <MessageCard key={message.id} message={message} />
                })
            }
            </div>
        </>
        )
    }

