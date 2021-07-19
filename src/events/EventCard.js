import React, { useContext }from "react"
  import { EventContext } from "./EventProvider"
  import { useHistory } from "react-router-dom"
  import "./Event.css"


  export const EventCard = ({ event }) => {
  const { deleteEvent } = useContext(EventContext)
  
  
  const history = useHistory()

  const handleRelease = () => {
      deleteEvent(event.id)
        .then(() => {
          history.push("/events")
        })
    }
  
    
  return   (
      <div className="eventCard">
        
      <section className="eventList" id="eventId">
          <h3 className="eventName">{event.name}</h3>
          <div className="eventDate">Date:  {event.date}</div>
          <div className="eventLocation">Location:  {event.location}</div>
      </section>
      <article className="weatherAndButtons">
          <img className="weatherPic" src="https://media.gettyimages.com/photos/concept-photo-oxygen-with-white-cloud-picture-id1176356747?k=6&m=1176356747&s=612x612&w=0&h=65o22MsDpULjY-Y0X2X3ajpPSy2X5_ciTkzHZQBHjTA=" alt=""></img>
          <div className="eventButtons">
          {/* <button className="eventButton" onClick={() => {
              history.push(`/events/edit/${event.id}`)
            }}>Edit</button> */}
          {/* <button className="eventButton" onClick={handleRelease}>Delete Event</button>
          <button className="eventButton">Show Weather</button> */}
         </div>
      </article>

          </div>
    
   )
  }