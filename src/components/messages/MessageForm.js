import React, { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
// import { UserContext } from "../user/UserProvider"

export const MessageForm = () => {
    const { addMessage } = useContext(MessageContext)
    // const { users, getUsers } = useContext(UserContext)

    const [message, setMessage] = useState({
            textArea: "",
            date: "",
            timeStamp: 0,
    });

    const history = useHistory()

    const handleControlledInputChange = (event) => {
        const newMessage = { ...message }
        newMessage[event.target.id] = event.target.value
        setMessage(newMessage)
    }

    const handleClickSaveMessage = (event) => {
        event.preventDefault()

        // const userId = parseInt(message.userId)

        const newMessage = {
            textArea: message.textArea,
            date: message.date,
            userId: parseInt(sessionStorage.getItem("nutshell_user")),
            timeStamp: Date.now(message.timeStamp),
        }
        addMessage(newMessage).then(() => history.push("/messages"))
        
    }

    return(
        <form className="messageForm">
        <h2 className="messageForm_header"> New Message</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="textArea">Write your message here:</label>
            <input
                type="text"
                id="textArea"
                required
                autoFocus
                className="form-control"
                placeholder="Message TextArea"
                value={message.textArea}
                onChange={handleControlledInputChange}
                />
            </div>
        </fieldset>
        <fieldset>
                <div className="form-group">
                    <label htmlFor="date">message date</label>
                    <input type="date" 
                    id="date" 
                    required autoFocus className="form-control" 
                    placeholder="Message Date" 
                    value={message.date} 
                    onChange={handleControlledInputChange} 
                    />
                </div>
            </fieldset>
            {/* <fieldset>
                <div className="form-group">
                    <label htmlFor="date">message sent to</label>
                    <select
                        id="user" 
                        required autoFocus className="form-control" 
                        placeholder="Message receiver" 
                        value={message.userId} 
                        onChange={handleControlledInputChange} 
                    >
                        <option value="0"> Select User</option>
                        {users.map((l) => (
                        <option key={l.id} value={l.id}>
                            {l.name}
                        </option>
                        ))}
                    </select>
                </div>
            </fieldset> */}
        <button className="btn btn-primary" onClick={handleClickSaveMessage}>
            Save Message
        </button>
        </form>
    )
















}