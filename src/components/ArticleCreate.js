import React, { useState, useEffect } from "react";
import { TextField, Box, Button, Typography, MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { EditorState, RichUtils, ContentState } from "draft-js";
import { Editor } from "draft-js";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "draft-js/dist/Draft.css"; // Import Draft.js styles

const sharedStyles = {
  borderRadius: "25px", 
  border: "2px solid black", 
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none", 
    },
    "&:hover fieldset": {
      border: "none", 
    },
    "&.Mui-focused fieldset": {
      border: "none", 
    },
  },
};

export function ArticleCreate({ article = null }) {
  const [title, setTitle] = useState(article ? article.title : "");
  const [excerpt, setExcerpt] = useState(article ? article.excerpt : "");
  const [category, setCategory] = useState(article ? article.category : "");
  const [tags, setTags] = useState(article ? article.tags : []);
  const [thumbnail, setThumbnail] = useState(article ? article.thumbnail : "");
  const [editorState, setEditorState] = useState(() => {
    if (article && article.content) {
      const contentState = ContentState.createFromText(article.content); // Convert plain text to ContentState
      return EditorState.createWithContent(contentState);
    }
    return EditorState.createEmpty(); // Default empty editor state if no article
  });
  
  useEffect(()=>{
    if(article)
    {
        setTitle(article.title);
        setExcerpt(article.excerpt);
        setCategory(article.category);
        setTags(article.tags);
        setThumbnail(article.thumbnail);
        setEditorState(()=>{
            const contentState = ContentState.createFromText(article.content); // Convert plain text to ContentState
            return EditorState.createWithContent(contentState);
        })
    }
  },[article])

  const navigate = useNavigate();

  const categories = ["Artificial Intelligence", "Cloud Computing", "Frontend Development", "Data Science", "DevOps"];

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleExcerptChange = (e) => setExcerpt(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleTagChange = (e) => setTags(e.target.value.split(","));
  const handleThumbnailChange = (e) => setThumbnail(e.target.value);

  const handleSubmit = () => {
    const newArticle = {
      id: article ? article.id : (new Date().getTime()).toString(),
      title,
      excerpt,
      content: editorState.getCurrentContent().getPlainText(),
      category,
      tags,
      thumbnail,
      readingTime: "10 mins",
      lastEdited: new Date().toISOString(),
    };

    // Get current articles from localStorage
    const storedArticles = JSON.parse(localStorage.getItem("articles")) || [];
    const updatedArticles = article
      ? storedArticles.map((art) => (art.id === article.id ? newArticle : art)) // Update existing article
      : [...storedArticles, newArticle]; // Add new article if no article prop

    // Save updated articles back to localStorage
    localStorage.setItem("articles", JSON.stringify(updatedArticles));

    navigate(`/article/${newArticle.id}`);

    // Reset form if creating new article
    if (!article) {
      setTitle("");
      setExcerpt("");
      setCategory("");
      setTags([]);
      setThumbnail("");
      setEditorState(EditorState.createEmpty());
    }
  };

  const handleFormat = (style) => {
    setEditorState(RichUtils.toggleInlineStyle(editorState, style));
  };

  const handleBlockFormat = (blockType) => {
    setEditorState(RichUtils.toggleBlockType(editorState, blockType));
  };

  return (
    <Box sx={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
      <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
        {article ? "Edit Article" : "Create New Article"}
      </Typography>

      {/* Title */}
      <TextField
        variant="outlined"
        placeholder="Enter article title"
        fullWidth
        value={title}
        onChange={handleTitleChange}
        sx={{
          ...sharedStyles,
          marginBottom: "20px",
        }}
      />

      {/* Excerpt */}
      <TextField
        variant="outlined"
        placeholder="Enter article excerpt"
        fullWidth
        value={excerpt}
        onChange={handleExcerptChange}
        sx={{
          ...sharedStyles,
          marginBottom: "20px",
        }}
      />

      {/* Category Dropdown */}
      <FormControl fullWidth sx={{ marginBottom: "20px" }}>
        <InputLabel sx={{ color: "black" }}>Category</InputLabel>
        <Select
          value={category}
          onChange={handleCategoryChange}
          label="Category"
          sx={{
            ...sharedStyles,
            "& .MuiInputLabel-root": { color: "black" },
            "& .MuiSelect-icon": { color: "black" },
          }}
        >
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Tags */}
      <TextField
        variant="outlined"
        placeholder="Enter tags (comma separated)"
        fullWidth
        value={tags.join(",")}
        onChange={handleTagChange}
        sx={{
          ...sharedStyles,
          marginBottom: "20px",
        }}
      />

      {/* Thumbnail URL */}
      <TextField
        variant="outlined"
        placeholder="Enter thumbnail URL"
        fullWidth
        value={thumbnail}
        onChange={handleThumbnailChange}
        sx={{
          ...sharedStyles,
          marginBottom: "20px",
        }}
      />

      {/* Formatting Toolbar Inside the Editor */}
      <Box sx={{ marginBottom: "20px", display: "flex", alignItems: "center" }}>
        <Button onClick={() => handleFormat("BOLD")} sx={{ marginRight: "10px", color: "black" }}><b>B</b></Button>
        <Button onClick={() => handleFormat("ITALIC")} sx={{ marginRight: "10px", color: "black" }}><i>I</i></Button>
        <Button onClick={() => handleFormat("UNDERLINE")} sx={{ marginRight: "10px", color: "black" }}><u>U</u></Button>
        <Button onClick={() => handleFormat("STRIKETHROUGH")} sx={{ marginRight: "10px", color: "black" }}><del>S</del></Button>
        <Button onClick={() => handleFormat("CODE")} sx={{ marginRight: "10px", color: "black" }}><code>C</code></Button>
        <Button onClick={() => handleBlockFormat("unordered-list-item")} sx={{ marginRight: "10px", color: "black" }}>•</Button>
        <Button onClick={() => handleBlockFormat("ordered-list-item")} sx={{ marginRight: "10px", color: "black" }}>1.</Button>
        <Button onClick={() => handleBlockFormat("header-one")} sx={{ marginRight: "10px", color: "black" }}>H1</Button>
        <Button onClick={() => handleBlockFormat("header-two")} sx={{ marginRight: "10px", color: "black" }}>H2</Button>
      </Box>

      {/* Rich Text Editor */}
      <div style={{ border: "2px solid black", padding: "10px", minHeight: "200px", borderRadius: "25px", backgroundColor: "white" }}>
        <Editor editorState={editorState} onChange={setEditorState} placeholder="Write your article..." />
      </div>

      {/* Publish Button */}
      <Button
        variant="outlined"
        sx={{
          marginTop: "20px",
          color: "black",
          borderColor: "black",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "black",
            color: "white",
            borderColor: "black",
          },
          "&:hover .MuiSvgIcon-root": {
            fill: "white",
          },
        }}
        onClick={handleSubmit}
      >
        {article ? "Update" : "Publish"}
      </Button>
    </Box>
  );
}
