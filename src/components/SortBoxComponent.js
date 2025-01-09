import React from "react";
import { Box, FormControl, Select, MenuItem, InputLabel } from "@mui/material";

export const SortBoxComponent = ({ sortOption, onSortChange }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "flex-end", p: 3 }}>
      <FormControl sx={{ minWidth: 140 }}>  {/* Reduced width */}
        <InputLabel id="sort-label">Sort By</InputLabel>
        <Select
          labelId="sort-label"
          value={sortOption}
          label="Sort By"
          onChange={(e) => onSortChange(e.target.value)}
          sx={{
            borderRadius: "20px", // Slightly smaller rounded corners
            border: "2px solid black", // Custom border color
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove default border
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove hover border
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove focused border
            },
            "& .MuiSelect-icon": {
              color: "black", // Black color for dropdown icon
            },
          }}
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="readingTime">Reading Time</MenuItem>
          <MenuItem value="popularity">Popularity</MenuItem>
          <MenuItem value="lastEdited">Last Edited</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
