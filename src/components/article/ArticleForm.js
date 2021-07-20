import React, { useContext, useEffect, useState } from "react"
import { useHistory, useParams } from 'react-router-dom';
import { ArticleContext } from "./ArticleProvider"
import "./Article.css"

export const ArticleForm = () => {
  const { addArticle, getArticleById, getArticles, updateArticle } = useContext(ArticleContext)

  const [article, setArticle] = useState({
    title: "",
    url: "",
    synopsis: ""
  });

  useEffect(() => {
    getArticles()
}, [])

  const [isLoading, setIsLoading] = useState(true);
  const { articleId } = useParams();
  const history = useHistory();

  const handleControlledInputChange = (controlArticle) => {
    const newArticle = { ...article }
    let selectedVal = controlArticle.target.value
        
    if (controlArticle.target.id.includes("Id")) {
     selectedVal = parseInt(selectedVal)
    }
     newArticle[controlArticle.target.id] = selectedVal
     setArticle(newArticle)
  }

  // const newArticle = { ...article }
  // newArticle[event.target.id] = event.target.value
  // setArticle(newArticle)

  const handleClickSaveArticle = (controlArticle) => {
    controlArticle.preventDefault()
    if (article.title === "" || article.url === "" || article.synopsis === "") {
      window.alert("Please fill in all fields")
        
  } else {
      setIsLoading(true);

    } if  (articleId){
      updateArticle({
          id: articleId,
          title: article.title,
          url: article.url,
          synopsis: article.synopsis,
          timestamp: new Date().toLocaleDateString(),
          userId: parseInt(sessionStorage.getItem("nutshell_user"))
          
      })
      .then(() => history.push("/"))
  } else {
        addArticle({
        title: article.title,
        url: article.url,
        synopsis: article.synopsis,
        timestamp: new Date().toLocaleDateString(),
        userId: parseInt(sessionStorage.getItem("nutshell_user"))
      })
      .then(() => history.push("/"))
    }
  }

  useEffect(() => {
    getArticles().then(() => {
      if (articleId) {
        getArticleById(articleId)
        .then(article => {
            setArticle(article)
            setIsLoading(false)
        })
      } else {
        setIsLoading(false)
      }
    })
  }, [])
      

  //     const newArticle = {
  //       title: article.title,
  //       url: article.url,
  //       synopsis: article.synopsis,
  //       timestamp: new Date().toLocaleDateString(),
  //       userId: parseInt(sessionStorage.getItem("nutshell_user"))
  //     }
  //     addArticle(newArticle)
  //       .then(() => history.push("/"))

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
        <button className="btn btn-primary" disabled={isLoading} onClick={handleClickSaveArticle}>
            Save Article
            </button>
        </form>
    </>
  )
}
