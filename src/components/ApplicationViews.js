import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleList } from "./article/ArticleList"
import { ArticleForm } from "./article/ArticleForm"
import { FriendProvider } from "./friend/FriendProvider"
import { FriendList } from "./friend/FriendList"

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
