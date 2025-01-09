import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import FormatSizeIcon from "@mui/icons-material/FormatSize";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export const ArticleView = ({ article, onEdit }) => {
  const [fontSize, setFontSize] = useState("18px");
  const [remainingReadingTime, setRemainingReadingTime] = useState(
    article.readingTime
  );
  const contentRef = useRef();
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to toggle font size
  const handleFontSizeChange = () => {
    setFontSize((prevSize) =>
      prevSize === "18px" ? "20px" : prevSize === "20px" ? "22px" : "18px"
    );
  };

  // Calculate remaining reading time dynamically
  useEffect(() => {
    const calculateReadingTime = () => {
      const contentHeight = contentRef.current.scrollHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrolledRatio = Math.min(
        (scrollTop + windowHeight) / contentHeight,
        1
      );
      const remainingTime =
        Math.ceil(
          (1 - scrolledRatio) *
            parseInt(article.readingTime.replace(" mins", ""), 10)
        ) || 1; // Minimum 1 min
      setRemainingReadingTime(`${remainingTime} mins`);
    };

    window.addEventListener("scroll", calculateReadingTime);
    return () => {
      window.removeEventListener("scroll", calculateReadingTime);
    };
  }, [article.readingTime]);

  // Handle the edit button click
  const handleEditClick = () => {
    // Navigate to the edit route using article ID
    navigate(`/edit/${article.id}`);
  };

  return (
    <Box sx={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      {/* Sticky Header */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          background: "white",
          zIndex: 1000,
          padding: "10px 0",
          borderBottom: "1px solid #ddd",
        }}
      >
        {/* Article Title */}
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold", margin: 0 }}
        >
          {article.title}
        </Typography>

        {/* Meta Information */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            marginTop: "10px",
          }}
        >
          {/* Remaining Reading Time */}
          <Typography variant="body2" color="gray">
            Remaining: {remainingReadingTime}
          </Typography>

          {/* Font Size Button */}
          <IconButton onClick={handleFontSizeChange} aria-label="Change font size">
            <FormatSizeIcon />
          </IconButton>

          {/* Edit Button */}
          <IconButton onClick={handleEditClick} aria-label="Edit article">
            <EditIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Meta Information */}
      <Typography
        variant="body1"
        align="center"
        sx={{ color: "gray", margin: "20px 0" }}
      >
        Last edited on: {article.lastEdited}
      </Typography>

      {/* Image */}
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <img
          src={article.thumbnail}
          alt={article.title}
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "8px",
          }}
        />
      </Box>

      {/* Article Content */}
      <Box ref={contentRef} sx={{ fontSize, lineHeight: 1.6 }}>
        <div
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </Box>
    </Box>
  );
};
