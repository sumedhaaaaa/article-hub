import React from "react";
import { useParams } from "react-router-dom";
import { ArticleView } from "../components/ArticleView";
import { articles as fallbackArticles } from "../data/data";

export function ArticleViewPage() {
  const { id } = useParams();

  // Fetch articles from localStorage or fallback to data.js
  const savedArticles = localStorage.getItem("articles");
  const articles = savedArticles ? JSON.parse(savedArticles) : fallbackArticles;

  // Ensure id is treated consistently (string vs. number)
  const article = articles.find((article) => String(article.id) === String(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticleView article={article} />;
}
