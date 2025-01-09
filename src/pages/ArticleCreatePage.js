import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArticleCreate } from "../components/ArticleCreate";

export function ArticleCreatePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);

  // Load articles from localStorage and find the article to edit if `id` exists
  useEffect(() => {
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    
    if (id) {
      const articleToEdit = storedArticles.find((art) => art.id === id);
      if (articleToEdit) {
        setArticle(articleToEdit); // Populate article if found
      }
    }
  }, [id]);

  const handleArticleSave = (newArticle) => {
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    
    if (id) {
      // Handle editing the article
      const updatedArticles = storedArticles.map((art) =>
        art.id === id ? { ...art, ...newArticle } : art
      );
      localStorage.setItem("articles", JSON.stringify(updatedArticles)); // Save updated articles to localStorage
      console.log("Updated Articles:", updatedArticles);
    } else {
      // Handle creating the article
      const newArticleWithId = { ...newArticle, id: Date.now().toString() }; // Unique ID based on timestamp
      storedArticles.push(newArticleWithId);
      localStorage.setItem("articles", JSON.stringify(storedArticles)); // Save new article to localStorage
      console.log("New Articles:", storedArticles);
    }

    navigate("/"); // Redirect to home page after saving
  };

  return (
    <ArticleCreate article={article} onSave={handleArticleSave} />
  );
}
