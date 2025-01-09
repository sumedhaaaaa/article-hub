import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppBarComponent } from "./components/AppBarComponent";
import { HomePage } from "./pages/Homepage";
import { ArticleViewPage } from "./pages/ArticleViewPage";
import { ArticleCreatePage } from "./pages/ArticleCreatePage";

export default function App() {
  return (
    <Router>
      <AppBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticleViewPage />} />
        <Route path="/create" element={<ArticleCreatePage />} />
        <Route path="/edit/:id" element={<ArticleCreatePage />} />
      </Routes>
    </Router>
  );
}
