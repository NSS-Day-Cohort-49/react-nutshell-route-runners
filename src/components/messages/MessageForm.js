import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { MessageContext } from "./MessageProvider"
// import { UserContext } from "../user/UserProvider"

export const MessageForm = () => {
    const { addMessage, getMessageById, updateMessage } = useContext(MessageContext)
    // const { users, getUsers } = useContext(UserContext)

    // const [message, setMessage] = useState({
    //         textArea: "",
    //         date: "",
    //         timeStamp: 0,
    // });
    // const history = useHistory()



    //for edit, hold on to state of animal in this view
    const [message, setMessage] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);

    const {messageId} = useParams();
	const history = useHistory();

    


    // const handleControlledInputChange = (event) => {
    //     const newMessage = { ...message }
    //     newMessage[event.target.id] = event.target.value
    //     setMessage(newMessage)
    // }


    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (controlEvent) => {
        //When changing a state object or array,
        //always create a copy make changes, and then set state.
        const newMessage = { ...message }
        let selectedVal = controlEvent.target.value
        
        if (controlEvent.target.id.includes("Id")) {
        selectedVal = parseInt(selectedVal)
        }
        newMessage[controlEvent.target.id] = selectedVal
        setMessage(newMessage)
    }




    // const handleClickSaveMessage = (event) => {
    //     event.preventDefault()

    //     // const userId = parseInt(message.userId)

    //     const newMessage = {
    //         textArea: message.textArea,
    //         date: message.date,
    //         userId: parseInt(sessionStorage.getItem("nutshell_user")),
    //         timeStamp: Date.now(message.timeStamp),
    //     }
    //     addMessage(newMessage).then(() => history.push("/messages"))
        
    // }



    const handleSaveMessage = () => {
        // if (parseInt(animal.locationId) === 0) {
        //     window.alert("Please select a location")
        // } else {
        //disable the button - no extra clicks
        setIsLoading(true);
        if (messageId) {
            //PUT - update
            updateMessage({
                id: message.id,
                textArea: message.textArea,
                date: message.date,
                userId: parseInt(sessionStorage.getItem("nutshell_user")),
                timeStamp: Date.now(message.timeStamp),
            })
            .then(() => history.push("/messages"))
        } else {
            //POST - add
            addMessage({
                textArea: message.textArea,
                date: message.date,
                userId: parseInt(sessionStorage.getItem("nutshell_user")),
                timeStamp: Date.now(message.timeStamp),
            })
            .then(() => history.push("/messages"))
        }
        
    }

    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
        // getCustomers().then(getLocations).then(() => {
        if (messageId){
            getMessageById(messageId)
            .then(message => {
                setMessage(message)
                setIsLoading(false)
            })
        } else {
            setIsLoading(false)
        }
        
    }, [])

    
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
        <button className="btn btn-primary"
        disabled={isLoading}
        onClick={event => {
            event.preventDefault() // Prevent browser from submitting the form and refreshing the page
            handleSaveMessage()
        }}>
        {messageId ? "Save Message" : "Add Message" }</button>
        </form>
    )



}