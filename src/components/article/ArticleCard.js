import React from "react"
import "./Article.css"

export const ArticleCard = ({ article }) => (
    <section className="article">
        <h3 className="article__name">{article.title}</h3>
        <div className="article__synopsis">{article.synopsis}</div>
        <div className="article__url">{article.url}</div>
        <div className="article__url">Posted by {article.userId}</div>
    </section>
)