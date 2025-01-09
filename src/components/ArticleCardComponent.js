// src/components/ArticleCardComponent.js
import React from "react";
import { Card, CardContent, CardMedia, Typography, Divider, Box } from "@mui/material";
import { Link } from "react-router-dom";

export function ArticleCardComponent({ article }) {
  return (
    <Link to={`/article/${article.id}`} style={{ textDecoration: "none" }}>
      <Card sx={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
        <CardMedia
          component="img"
          height="200"
          image={article.thumbnail}
          alt={article.title}
          sx={{ objectFit: "cover" }}
        />
        <CardContent sx={{ padding: 2, textAlign: "center" }}>
          <Typography variant="h6" gutterBottom>
            {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {article.excerpt}
          </Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="body2" color="textSecondary">
            Category: {article.category}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Tags: {article.tags.join(", ")}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Reading Time: {article.readingTime}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Last Edited: {article.lastEdited}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}
