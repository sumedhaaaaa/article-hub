import React from 'react';
import { IconButton } from "@mui/material";
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatStrikethroughIcon from '@mui/icons-material/FormatStrikethrough';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

const Toolbar = ({ editor, toggleFormat }) => {
  return (
    <div style={{ display: 'flex', marginBottom: '10px' }}>
      <IconButton onClick={() => toggleFormat(editor, 'bold')}>
        <FormatBoldIcon />
      </IconButton>
      <IconButton onClick={() => toggleFormat(editor, 'italic')}>
        <FormatItalicIcon />
      </IconButton>
      <IconButton onClick={() => toggleFormat(editor, 'underline')}>
        <FormatUnderlinedIcon />
      </IconButton>
      <IconButton onClick={() => toggleFormat(editor, 'strikethrough')}>
        <FormatStrikethroughIcon />
      </IconButton>
      <IconButton onClick={() => toggleFormat(editor, 'bulleted-list')}>
        <FormatListBulletedIcon />
      </IconButton>
    </div>
  );
};

export default Toolbar;
