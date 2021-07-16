import React from "react"
import { Route } from "react-router-dom"
import { FriendProvider } from "./friend/FriendProvider"
import { FriendList } from "./friend/FriendList"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageForm } from "./messages/MessageForm"
import { MessageCard } from "./messages/MessageCard"
import { MessageDetail } from "./messages/MessageDetail"
// import { UserProvider } from "./users/UserProvider"

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

      <MessageProvider>
        {/* <UserProvider> */}
          <Route exact path="/messages">
            <MessageList />
          </Route>
          <Route exact path= "/messages/create">
            <MessageForm />
          </Route>
          <Route exact path="/messages/detail/:messageId(\d+)">
            <MessageDetail />
          </Route>
        {/* </UserProvider> */}
      </MessageProvider>
      

      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>

      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>

    </>
  )
}
