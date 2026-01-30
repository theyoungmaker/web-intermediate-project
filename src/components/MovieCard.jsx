import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import ReactPlayer from "react-player";

const FALLBACK_POSTER = "https://tinyurl.com/movie-placeholder";

export default function MovieCard({ movie }) {
  const { imdbId, title, year, rating, imageUrl, description, trailerUrl } =
    movie;
  const imdbURL = `https://www.imdb.com/title/${imdbId}/`;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleEnterCard = () => setIsFlipped(true);
  const handleLeaveCard = () => setIsFlipped(false);

  return (
    <Box
      sx={{ width: 300, perspective: "1000px", cursor: "pointer" }}
      onMouseEnter={handleEnterCard}
      onMouseLeave={handleLeaveCard}
      role="button"
      tabIndex={0}
    >
      {/* Rotator */}
      <Box
        sx={{
          position: "relative",
          height: 360,
          transformStyle: "preserve-3d",
          transition: "transform 0.5s ease",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* FRONT */}
        <Card
          variant="outlined"
          sx={{
            position: "absolute",
            inset: 0,
            backfaceVisibility: "hidden",
            borderRadius: 2,
            overflow: "hidden",
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
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700 }}
              title={title}
            >
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
              onClick={(e) => {
                e.stopPropagation();
                window.open(imdbURL, "_blank", "noreferrer");
              }}
              color="primary"
            >
              View on IMDb
            </Typography>
          </CardContent>
        </Card>

        {/* BACK */}
        <Card
          variant="outlined"
          sx={{
            position: "absolute",
            inset: 0,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "#111",
          }}
        >
          <Box sx={{ width: "100%", height: 200 }}>
            {trailerUrl ? (
              <ReactPlayer
                url={trailerUrl}
                width="100%"
                height="100%"
                controls
                muted
                light={imageUrl || FALLBACK_POSTER} // ✅ force a thumbnail using poster
                playIcon={
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      bgcolor: "rgba(0,0,0,0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "white",
                      fontSize: 28,
                    }}
                  >
                    ▶
                  </Box>
                }
              />
            ) : (
              <Typography sx={{ color: "white", p: 2 }}>
                No trailer available
              </Typography>
            )}
          </Box>

          <CardContent>
            <Typography
              variant="subtitle2"
              sx={{ color: "white", fontWeight: 700 }}
            >
              Trailer Preview
            </Typography>
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.8)" }}>
              Click the thumbnail to play.
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
