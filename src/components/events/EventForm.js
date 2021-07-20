
import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from "react-router-dom"
import { EventContext } from "./EventProvider"
import { LocationContext } from "./EventLocationProvider.js"
import "./Event.css"

export const EventForm = () => {
    const { addEvent, getEventById, getEvents, updateEvent } = useContext(EventContext)
    const { locations, getLocations } = useContext(LocationContext)

  
    const [event, setEvent] = useState({

        name: "",
        date: "",
        locationId: ""
    });

    useEffect(() => {
      getEvents()
      .then(getLocations())
  }, [])

    const [isLoading, setIsLoading] = useState(true);
    const { eventId } = useParams();
    const history = useHistory();
 

      const handleControlledInputChange = (controlEvent) => {
        const newEvent = { ...event }
        let selectedVal = controlEvent.target.value
        
         if (controlEvent.target.id.includes("Id")) {
          selectedVal = parseInt(selectedVal)
         }
          newEvent[controlEvent.target.id] = selectedVal
          setEvent(newEvent)
        }
  
      const handleClickSaveEvent = (controlEvent) => {
        controlEvent.preventDefault() 
        const locationId = parseInt(event.locationId)
        if (event.location === "" || event.name === "" || event.date === "") {
            window.alert("Please fill in all fields")
        
    } else {
        setIsLoading(true);
        
    } if  (eventId){
        updateEvent({
            id: eventId,
            name: event.name,
            date: event.date,
            locationId: locationId
            
        })
        .then(() => history.push("/events"))
    } else {
            addEvent({
                name: event.name,
                date: event.date,
                locationId: locationId,
                
            })
            .then(() => history.push("/events"))
          }
        }
      
        useEffect(() => {
          getEvents()
          .then(getLocations())
          .then(() => {
            if (eventId) {
              getEventById(eventId)
              .then(event => {
                  setEvent(event)
                  setIsLoading(false)
              })
            } else {
              setIsLoading(false)
            }
          })
        }, [])
     
  

    return (
        <form className="events__Form">
            <h2 className="eventFormTitle">New Event</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Event name:</label>
                    <input type="text" id="name" 
                    onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Please enter name" value={event.name}/>
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label htmlFor="date">Event Date:</label>
                    <input type="date" id="date" 
                    onChange={handleControlledInputChange} required autoFocus className="form-control" value={event.date} />
                </div>
          </fieldset>
          <fieldset>
            <div className="form-group">
                    <label htmlFor="location">Event Location:</label>
                    <select name="locationId" id="locationId" className="form-control" value={event.locationId} onChange={handleControlledInputChange}>
                <option value="0">Select a location</option>
                {locations.map(l => (
                  <option key={l.id} value={l.id}>
                    {l.name}
                  </option>
                ))}
              </select>
                </div>
          </fieldset>
            <button className="btn btn-primary"
             disabled={isLoading}
            onClick={handleClickSaveEvent}> 
            Save Event
          </button>
      </form>
    )
    }
