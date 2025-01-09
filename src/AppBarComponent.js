import React from "react";
import { AppBar, Toolbar, Typography, Stack, IconButton, Button } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom"; 

export function AppBarComponent() {
  return (
    <AppBar
      position="static"
      sx={{
        background: "white",
        boxShadow: "none",
        padding: { xs: "10px 20px", sm: "10px 40px" },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: "black",
            textAlign: "center",
            flexGrow: { xs: 1, sm: 0 },
          }}
        >
          ArticleHub
        </Typography>

       
        <Stack
          direction="row"
          spacing={2}
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
          }}
        >
          <IconButton aria-label="Notifications" sx={{ color: "black" }}>
            <NotificationsIcon />
          </IconButton>
          <IconButton aria-label="Bookmarks" sx={{ color: "black" }}>
            <BookmarkBorderIcon />
          </IconButton>
          
          
          <Link to="/create" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              startIcon={<AddIcon />}
              sx={{
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
            >
              Create
            </Button>
          </Link>
        </Stack>

       
        <IconButton
          aria-label="Menu"
          sx={{
            display: { xs: "flex", sm: "none" },
            color: "black",
          }}
        >
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}