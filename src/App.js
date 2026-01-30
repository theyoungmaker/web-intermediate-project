// src/App.js
import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import MovieCard from "./components/MovieCard";

const MOVIES = [
  {
    imdbId: "tt0110357",
    title: "The Lion King",
    year: 1994,
    rating: 8.5,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMTM2ODAwNTc0NV5BMl5BanBnXkFtZTcwMjQ2NTI3Ng@@._V1_QL75_UX388_.jpg",
    description:
      "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
    trailerUrl:
      "https://www.youtube.com/watch?v=lFzVJEksoDY&pp=ygUVdGhlIGxpb24ga2luZyB0cmFpbGVy",
  },
  {
    imdbId: "tt2294629",
    title: "Frozen",
    year: 2013,
    rating: 7.4,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BOTE5NjYyMjMxMV5BMl5BanBnXkFtZTgwOTcwMDk4NTE@._V1_QL75_UX522_.jpg",
    description:
      "Fearless optimist Anna teams up with rugged mountain man Kristoff and his loyal reindeer Sven in an epic journey to find Anna's sister Elsa, whose icy powers have trapped the kingdom of Arendelle in eternal winter.",
    trailerUrl:
      "https://www.youtube.com/watch?v=TbQm5doF_Uc&pp=ygUOZnJvemVuIHRyYWlsZXI%3D",
  },
  {
    imdbId: "tt4154796",
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMWIyZDljYWMtZGZkNS00YWE0LTkxOWYtM2I1NzJhYmRjMDM3XkEyXkFqcGc@._V1_QL75_UX414_.jpg",
    description:
      "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    trailerUrl:
      "https://www.youtube.com/watch?v=TcMBFSGVi1c&pp=ygUZYXZlbmdlcnMgZW5kIGdhbWUgdHJhaWxlcg%3D%3D",
  },
];

export default function App() {
  return (
    <Box sx={{ bgcolor: "#f7f8fa", minHeight: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Movie Gallery</Typography>
        </Toolbar>
      </AppBar>

      <Box component="main" sx={{ maxWidth: 960, mx: "auto", p: 2 }}>
        <Typography variant="h4" gutterBottom>
          Browse Movies
        </Typography>

        <Box aria-label="movie list" sx={{ display: "flex", gap: 2 }}>
          {MOVIES.map((m) => (
            <MovieCard key={m.imdbId} movie={m} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
