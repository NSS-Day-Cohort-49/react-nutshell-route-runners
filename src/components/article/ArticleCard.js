import React, { useContext, useEffect } from "react"
import { ArticleContext } from "./ArticleProvider"
import { useHistory } from "react-router-dom"
import "./Article.css"

export const ArticleCard = ({ article }) => {

const { deleteArticle } = useContext(ArticleContext)

const history = useHistory()

    return (
    <>
    <section className="article__card">
        <h3 className="article__name">{article.title}</h3>
        <div className="article__synopsis">{article.synopsis}</div>
        <a href={article.url}>View Article</a>
        <div className="article__url">Posted by {article.user.name} on {article.timestamp}</div>
        <button className="articleButton" onClick={() => {
            history.push(`/articles/edit/${article.id}`)
        }}>Edit</button>
        <button className="articleButton" onClick={ event => {deleteArticle(article.id) }}>
        Delete Article
        </button>
    </section>
    </>
    )}