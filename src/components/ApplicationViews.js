import React from "react"
import { Route } from "react-router-dom"
import { FriendProvider } from "./friend/FriendProvider"
import { FriendList } from "./friend/FriendList"

export const ApplicationViews = () => {
  return (
    <>

      <Route exact path="/">
        {/* Render the component for news articles */}
      </Route>
      <FriendProvider>
        <Route path="/friends">
          <FriendList />
        </Route>
        {/* <Route exact path="/friends/create">
          <SearchFriend />
      </Route> */}
      </FriendProvider>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
    </>
  )
}
