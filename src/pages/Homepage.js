import React, { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { CategoryChipsComponent } from "../components/CategoryChipsComponent";
import { ArticleListComponent } from "../components/ArticleListComponent";
import { SearchBarComponent } from "../components/SearchBarComponent";
import { SortBoxComponent } from "../components/SortBoxComponent";
import { articles as initialArticles } from "../data/data"; // Import initial articles

export function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState("date");
  const [articles, setArticles] = useState([]);

  // Updated categories
  const categories = [
    "Artificial Intelligence",
    "Cloud Computing",
    "Frontend Development",
    "Data Science",
    "DevOps",
  ];

  // Load articles from localStorage or fallback to initial articles
  useEffect(() => {
    const savedArticles = localStorage.getItem("articles");
    if (savedArticles) {
      setArticles(JSON.parse(savedArticles));
    } else {
      // Save initial articles to localStorage and state
      localStorage.setItem("articles", JSON.stringify(initialArticles));
      setArticles(initialArticles);
    }
  }, []);

  // Handle search
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Handle category selection
  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category); // Toggle selection
  };

  // Handle sorting
  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  return (
    <>
      <SearchBarComponent onSearch={handleSearch} />
      <Box
        sx={{
          maxWidth: "1200px",
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 6,
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Topic Match for You
        </Typography>
        {/* Container for Category and Sort, with space between them */}
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
          <CategoryChipsComponent
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
          />
          <SortBoxComponent sortOption={sortOption} onSortChange={handleSortChange} />
        </Box>
        <ArticleListComponent
          articles={articles}
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          sortOption={sortOption}
        />
      </Box>
    </>
  );
}
