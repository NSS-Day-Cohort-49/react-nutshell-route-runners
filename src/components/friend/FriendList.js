import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { FriendContext } from "./FriendProvider"
import { FriendCard } from "./FriendCard"
// import "./Friend.css"

export const FriendList = () => {
  // This state changes when `getFriends()` is invoked below
  const { friends, getFriends } = useContext(FriendContext)
  const history = useHistory()

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("FriendList: useEffect - getFriends")
    getFriends()

  }, [])


  return (
    <>
    <button onClick={() => {history.push("/friends/create")}}>
          Add Friend
      </button>
    <div className="friends">
      {console.log("FriendList: Render", friends)}
      {
        friends.map(friend => {
          return <FriendCard key={friend.id} friend={friend} />
        })
      }
    </div>
    </>
  )
}