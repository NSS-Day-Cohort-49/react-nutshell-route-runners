import React, { useContext, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "./FriendProvider"
import { FriendCard } from "./FriendCard"
import "./Friend.css"

export const FriendList = () => {
  
  const { friends, getFriends } = useContext(FriendContext)
  const history = useHistory()

  
  useEffect(() => {
    console.log("FriendList: useEffect - getUsers")
    getFriends()

  }, [])


  return (
    <>
    <h1>Friends</h1>
    <button onClick={() => {history.push("/friends/create")}}>
          Add Friend
      </button>
      <div className="friends">
    {
      friends.map(friend => { if(friend.currentUserId == sessionStorage.getItem("nutshell_user")){
         return <FriendCard key={friend.id} user={friend} />

      }})
    }
    </div>
    </>
  )
}