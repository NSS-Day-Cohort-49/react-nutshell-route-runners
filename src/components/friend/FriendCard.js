import React, { useContext } from "react"
import { FriendContext } from "./FriendProvider"
import "./Friend.css"

export const FriendCard = ({ user }) => {
    const { deleteFriend } = useContext(FriendContext)


        return (
            <>
            <section className="friend">
                <h3 className="friend__name">{user.user.name}</h3>
                <button onClick={event => { deleteFriend(user.id) }}>Unfriend</button>

            </section>
            </>
        )
}