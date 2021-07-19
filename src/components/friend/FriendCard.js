import React, { useContext } from "react"
import { useHistory } from "react-router-dom"
import { FriendContext } from "./FriendProvider"
import "./Friend.css"

export const FriendCard = ({ user }) => {
    const { addFriend, deleteFriend } = useContext(FriendContext)
    const history = useHistory()

    const handleAddFriend = (userId) => {
        addFriend({
            userId: userId,
            currentUserId: parseInt(sessionStorage.getItem("nutshell_user"))
        })
            .then(() => history.push("/friends"))
    }
    if (user.currentUserId == sessionStorage.getItem("nutshell_user")) {
        return (
            <>
            <section className="friend">
                <h3 className="friend__name">{user.user.name}</h3>
                <button onClick={() => { deleteFriend(user.id) }}>Unfriend</button>

            </section>
            </>
        )
    }
    else return (
        <section className="friend">
            <h3 className="friend__name">{user.name}</h3>
            <button onClick={() => { handleAddFriend(user.id) }}>Add Friend</button>

        </section>
    )
}