import React from "react"
import { Link } from "react-router-dom"

export const MessageCard = ({message}) => (
    <section className= "message__card">
        <h3 className="message_header"> 
        <Link to={`/messages/detail/${message.id}`}>
            { message.textArea }
        </Link>
        </h3>
        <div className="message_date"> { message.date }</div>
    </section>
)