import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

export default function App() {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movie Gallery</Typography>
        </Toolbar>
      </AppBar>

      <div style={{ padding: 16 }}>
        <Typography variant="h4" gutterBottom>
          Browse Movies
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We’ll list a few movies below and enhance the layout step by step with
          Material UI.
        </Typography>
      </div>
    </>
  );
}
