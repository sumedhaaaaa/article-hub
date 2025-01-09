// src/components/CategoryChipsComponent.js
import React from 'react';
import { Chip, Stack } from '@mui/material';

export function CategoryChipsComponent({ categories, selectedCategory, onCategorySelect }) {
  return (
    <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
      {categories.map((category) => (
        <Chip
          key={category}
          label={category}
          clickable
          onClick={() => onCategorySelect(category)}
          sx={{
            backgroundColor: selectedCategory === category ? 'black' : 'lightgrey',
            color: selectedCategory === category ? 'white' : 'black',
            '&:hover': {
              backgroundColor: selectedCategory === category ? 'black' : 'darkgrey',
            },
          }}
        />
      ))}
    </Stack>
  );
}
