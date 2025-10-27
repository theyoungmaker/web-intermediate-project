import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";

const FALLBACK_POSTER = "https://tinyurl.com/movie-placeholder";

export default function MovieCard({ movie }) {
  const { imdbId, title, year, rating, imageUrl, description } = movie;
  const imdbURL = `https://www.imdb.com/title/${imdbId}/`;

  return (
    <Card
      variant="outlined"
      sx={{
        width: 300,
        borderRadius: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={imageUrl || FALLBACK_POSTER}
        alt={`${title} poster`}
        onError={(e) => {
          e.currentTarget.src = FALLBACK_POSTER;
        }}
        sx={{ width: "100%", height: 200, objectFit: "cover" }}
      />

      <CardContent sx={{ p: 1.5 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }} title={title}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {year}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
          <Rating value={rating / 2} readOnly precision={0.5} />
          <Typography variant="body2" color="text.secondary">
            {rating.toFixed(1)} / 10
          </Typography>
        </Box>

        {/* Description (clamped to ~3 lines for tidy cards) */}
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {description}
        </Typography>

        <Typography
          variant="caption"
          sx={{ mt: 1, display: "inline-block", cursor: "pointer" }}
          onClick={() => window.open(imdbURL, "_blank", "noreferrer")}
          color="primary"
        >
          View on IMDb
        </Typography>
      </CardContent>
    </Card>
  );
}
