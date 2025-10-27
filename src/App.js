import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

// Keep the data minimal for now
const MOVIES = [
  { imdbId: "tt0110357", title: "The Lion King", year: 1994 },
  { imdbId: "tt2294629", title: "Frozen", year: 2013 },
  { imdbId: "tt4154796", title: "Avengers: Endgame", year: 2019 },
];

export default function App() {
  return (
    <Box sx={{ bgcolor: "#f7f8fa", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movie Gallery</Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="main"
        sx={{ maxWidth: 960, mx: "auto", p: 2, textAlign: "center" }}
      >
        <Typography variant="h4" gutterBottom>
          Browse Movies
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          First we'll render a simple list using Typography, then upgrade each
          item to a Card.
        </Typography>

        {/* Simple text list */}
        <Box aria-label="movie list" textAlign="left">
          {MOVIES.map((m) => (
            <Box
              key={m.imdbId}
              sx={{ py: 1, borderBottom: "1px solid #e5e7eb" }}
            >
              <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                {m.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {m.year}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
