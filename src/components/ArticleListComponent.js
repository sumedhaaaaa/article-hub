import React from "react";
import { Grid, Card, CardContent, CardMedia, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export const ArticleListComponent = ({ articles, searchTerm, selectedCategory, sortOption }) => {
  const filteredArticles = articles
    .filter((article) => {
      const matchesSearchTerm = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
      return matchesSearchTerm && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "date":
          return new Date(b.createdAt) - new Date(a.createdAt);
        case "readingTime":
          return parseInt(b.readingTime) - parseInt(a.readingTime);
        case "popularity":
          return b.popularity - a.popularity;
        case "lastEdited":
          return new Date(b.lastEdited) - new Date(a.lastEdited);
        default:
          return 0;
      }
    });

  return (
    <Grid container spacing={3}>
      {filteredArticles.map((article) => (
        <Grid item xs={12} sm={6} key={article.id}>
          <Link to={`/article/${article.id}`} style={{ textDecoration: "none" }}>
            <Card sx={{ position: "relative", height: 400, cursor: "pointer" }}>
              <CardMedia
                component="img"
                height="100%"
                image={article.thumbnail}
                alt={article.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0, 0, 0, 0.5)",
                  color: "white",
                  padding: 2,
                }}
              >
                <Typography variant="h6" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="white" gutterBottom>
                  {article.excerpt}
                </Typography>
                <Divider sx={{ my: 1 }} />
                <Typography variant="body2" color="white">
                  Category: {article.category}
                </Typography>
                <Typography variant="body2" color="white">
                  Reading Time: {article.readingTime}
                </Typography>
                <Typography variant="body2" color="white">
                  Last Edited: {article.lastEdited}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
