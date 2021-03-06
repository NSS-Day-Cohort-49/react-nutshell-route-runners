import React from "react"
import { Route } from "react-router-dom"
import { ArticleProvider } from "./article/ArticleProvider"
import { ArticleList } from "./article/ArticleList"
import { ArticleForm } from "./article/ArticleForm"
import { FriendProvider } from "./friend/FriendProvider"
import { FriendList } from "./friend/FriendList"
import { SearchFriend } from "./friend/SearchFriend"
import { TaskProvider } from "./task/TaskProvider"
import { TaskList } from "./task/TaskList"
import { TaskForm } from "./task/TaskForm"
import { EventProvider } from "./events/EventProvider"
import { EventList } from "./events/EventList"
import { EventForm } from "./events/EventForm"
import { LocationProvider } from "./events/LocationProvider.js"
import { MessageList } from "./messages/MessageList"
import { MessageProvider } from "./messages/MessageProvider"
import { MessageForm } from "./messages/MessageForm"
import { MessageDetail } from "./messages/MessageDetail"


export const ApplicationViews = () => {
  return (
    <>
      <FriendProvider>
        <ArticleProvider>
          <Route exact path="/">
              <ArticleList />
          </Route>

          <Route exact path="/articles/create">
              <ArticleForm />
          </Route>

          <Route path="/articles/edit/:articleId(\d+)">
            <ArticleForm />
          </Route>
        </ArticleProvider>
      </FriendProvider>
      
      <FriendProvider>
        <Route path="/friends/create">
          <SearchFriend />
        </Route>
        <Route  path="/friends">
          <FriendList />
        </Route>
      </FriendProvider>
    
      <MessageProvider>
        <FriendProvider>
          <Route exact path="/messages">
            <MessageList />
          </Route>
          <Route path= "/messages/create">
            <MessageForm />
          </Route>
          <Route path="/messages/detail/:messageId(\d+)">
            <MessageDetail />
          </Route>
          <Route path="/messages/edit/:messageId(\d+)">
              <MessageForm />
          </Route>
        </FriendProvider>
      </MessageProvider>
      
      <TaskProvider>
        <Route exact path="/tasks">

          <TaskList />
        </Route>

        <Route  path="/tasks/create">
            <TaskForm />
        </Route>

        <Route path="/tasks/edit/:taskId(\d+)">
          <TaskForm />
        </Route>

      </TaskProvider>
      <Route path="/events">

      </Route>
      <Route path="/tasks">

      </Route>
      <FriendProvider>
        <EventProvider>
          <LocationProvider>
            <Route exact path="/events">
              <EventList />
            </Route>

            <Route path="/events/create">
              <EventForm />
            </Route>

            <Route path="/events/edit/:eventId(\d+)">
              <EventForm />
            </Route>

          </LocationProvider>
        </EventProvider>
      </FriendProvider>
    </>
  )
}
