import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleList } from "./article/ArticleList"
import { ArticleForm } from "./article/ArticleForm"
import { FriendProvider } from "./friend/FriendProvider"
import { FriendList } from "./friend/FriendList"
import { TaskProvider } from "./task/TaskProvider"
import { TaskList } from "./task/TaskList"
import { TaskForm } from "./task/TaskForm"
import { EventProvider } from "../events/EventProvider"
import { EventList } from "../events/EventList"
import { EventForm } from "../events/EventForm"

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
        <Route  path="/friends">
          <FriendList />
        </Route>
        {/* <Route exact path="/friends/create">
          <SearchFriend />
      </Route> */}
      </FriendProvider>
      <Route path="/messages">
        {/* Render the component for the messages */}
      </Route>
      <TaskProvider>

        <Route exact path="/tasks">
          {/* Render the component for the user's tasks */}
          <TaskList />
        </Route>

        <Route  path="/tasks/create">
            <TaskForm />
        </Route>

      </TaskProvider>
      <Route path="/events">
        {/* Render the component for the user's events */}
      </Route>
      <Route path="/tasks">
        {/* Render the component for the user's tasks */}
      </Route>
      <EventProvider>
        <Route exact path="/events">
          <EventList />
        </Route>
        <Route path="/events/create">
          <EventForm />
        </Route>
        <Route path="/events/edit/:eventId(\d+)">
          <EventForm />
        </Route>
      </EventProvider>
    </>
  )
}
