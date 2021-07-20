import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParems } from 'react-router-dom';
import { ArticleContext } from "../article/ArticleProvider"
import "./Article.css"

export const ArticleForm = () => {
  const { addArticle } = useContext(ArticleContext)

  const [article, setArticle] = useState({
    title: "",
    url: "",
    synopsis: "",
  });

  const history = useHistory();

  const handleControlledInputChange = (event) => {

    const newArticle = { ...article }

    newArticle[event.target.id] = event.target.value

    setArticle(newArticle)
  }

  const handleClickSaveArticle = (event) => {
    event.preventDefault()

      const newArticle = {
        title: article.title,
        url: article.url,
        synopsis: article.synopsis,
        timestamp: new Date().toLocaleDateString(),
        userId: parseInt(sessionStorage.getItem("nutshell_user"))
      }
      addArticle(newArticle)
        .then(() => history.push("/"))
    
  }

  return (
      <>
        <form className="articleForm">
        <h2 className="articleForm__title">New Article</h2>
        <fieldset>
            <div className="form-group">
            <label htmlFor="title">Article Title:</label>
            <input type="text" id="title" required autoFocus className="form-control" placeholder="Article title" value={article.title} onChange={handleControlledInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="url">Article url:</label>
            <input type="text" id="url" required autoFocus className="form-control" placeholder="Article url" value={article.url} onChange={handleControlledInputChange} />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
            <label htmlFor="synopsis">Article synopsis:</label>
            <input type="text" id="synopsis" required autoFocus className="form-control" placeholder="Article synopsis" value={article.synopsis} onChange={handleControlledInputChange} />
            </div>
        </fieldset>
        <button className="btn btn-primary" onClick={handleClickSaveArticle}>
            Save Article
            </button>
        </form>
    </>
  )
}
