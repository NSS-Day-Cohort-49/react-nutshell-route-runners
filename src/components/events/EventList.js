import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { EventCard } from "./EventCard"
import { FriendContext } from "../friend/FriendProvider"
import "./Event.css"

export const EventList = () => {

const { friends, getFriends } = useContext(FriendContext)

const { events, getEvents } = useContext(EventContext)    
const history = useHistory()

let sortedEvents = events.sort((a,b) => {
    return parseInt(a.date.split("-").join("")) - parseInt(b.date.split("-").join(""))
  })

useEffect(() => {
  getFriends()
    .then(getEvents)
}, [])

  return (
     <>
    <div className="allEvents">
        
      <h3>Events</h3>
       	      <button className= "eventButton" onClick={() => {history.push("/events/create")}}>
            Add Event
          </button>
      {
       
        sortedEvents.map(event => {
        if (
            event.userId == sessionStorage.getItem("nutshell_user") || friends.find(friend => event.userId === friend.userId)
          ){                    return <EventCard key={event.id} event={event} />
        }})
      }
    </div>
   </> 
  )

}