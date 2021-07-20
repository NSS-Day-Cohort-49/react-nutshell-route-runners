import React, { useContext, useEffect } from "react"
import { useHistory } from 'react-router-dom';
import { ArticleContext } from "./ArticleProvider"
import { ArticleCard } from "./ArticleCard"
import "./Article.css"

export const ArticleList = () => {

  const { articles, getArticles } = useContext(ArticleContext)
  const history = useHistory()

  useEffect(() => {
    getArticles()

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
          return <ArticleCard key={article.id} article={article} />
        })
      }
    </div>
    </>
  )
}