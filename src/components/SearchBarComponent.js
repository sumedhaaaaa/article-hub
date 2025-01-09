import React, { useState } from "react";
import { TextField, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const SearchBarComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value); // Pass the search term to parent component
  };

  return (
    <Box sx={{ paddingLeft: 10, paddingRight: 10, display: "flex", alignItems: "center", margin: "0 auto", maxWidth: "1200px"}}>
      <TextField
        variant="outlined"
        placeholder="Search articles..."
        fullWidth
        value={searchTerm}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <IconButton>
              <SearchIcon />
            </IconButton>
          ),
        }}
        sx={{
          borderRadius: "25px", // Rounded corners for modern look
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              border: "none", // Remove the default border
            },
            "&:hover fieldset": {
              border: "none", // Remove hover border
            },
            "&.Mui-focused fieldset": {
              border: "none", // Remove focused border
            },
          },
          border: "2px solid black", // Custom black border
        }}
      />
    </Box>
  );
};
