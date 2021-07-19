import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleList } from "./article/ArticleList"
import { ArticleForm } from "./article/ArticleForm"
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

      <ArticleProvider>
        <Route exact path="/">
            <ArticleList />
        </Route>

        <Route exact path="/articles/create">
            <ArticleForm />
        </Route>
      </ArticleProvider>
      
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
