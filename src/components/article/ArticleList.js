import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import { FriendContext } from "../friend/FriendProvider"
import "./Article.css"

export const ArticleList = () => {

  const { friends, getFriends } = useContext(FriendContext)

  const { articles, getArticles } = useContext(ArticleContext)
  const history = useHistory()

  useEffect(() => {
    getFriends()
    .then(getArticles)
  }, [])

  return (
    <>
    <h2>News</h2>
    <button onClick={() => {history.push("/articles/create")}}>
    Add Article
    </button>
    <div className="articles">
      {
        articles.map(article => {
          if (
            article.userId == sessionStorage.getItem("nutshell_user") || friends.find(friend => article.userId === friend.userId)
          ){          return <ArticleCard key={article.id} article={article} />
        }})
      }
    </div>
    </>
  )
}