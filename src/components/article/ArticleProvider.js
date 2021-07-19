import React, { useState, createContext } from "react"

export const ArticleContext = createContext()

export const ArticleProvider = (props) => {
    const [articles, setArticles] = useState([])

    const getArticles = () => {
        return fetch("http://localhost:8088/articles")
        .then(res => res.json())
        .then(setArticles)
    }

    const addArticle = articleObj => {
        return fetch("http://localhost:8088/articles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(articleObj)
        })
        .then(getArticles)
    }

    return (
        <ArticleContext.Provider value={{
            articles, getArticles, addArticle
        }}>
            {props.children}
        </ArticleContext.Provider>
    )
}