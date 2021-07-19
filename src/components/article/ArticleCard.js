import React, { useContext } from "react"
import { useHistory } from 'react-router-dom';
import { ArticleContext, ArticleProvider } from "../article/ArticleProvider"
import "./Article.css"

export const ArticleCard = ({ article }) => {

// const users = getUsers();

// const foundUser = users.find(user => user.id === parseInt(article.userId));  

const history = useHistory();

const { deleteArticle } = useContext(ArticleContext)
    
    // const handleDelete = () => {
    //     deleteArticle(article.id)
    //         .then(() => {
    //         history.push("/")
    //         })
    //       }
    //   }

    return (
    <>
    <section className="article">
        <h3 className="article__name">{article.title}</h3>
        <div className="article__synopsis">{article.synopsis}</div>
        <a href={article.url}>View Article</a>
        <div className="article__url">Posted by {article.userId}</div>
        <button onClick={ event => {deleteArticle(article.id) }}>
        Delete Article
        </button>
    </section>
    </>
    )}