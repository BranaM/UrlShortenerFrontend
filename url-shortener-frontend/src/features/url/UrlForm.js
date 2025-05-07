import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { shortenUrl } from "./UrlSlice";
import { TextField, Button, Typography, Box } from "@mui/material";

const UrlForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { shortenedUrl, status, error } = useSelector((state) => state.url);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(shortenUrl(input));
    }
  };

  return (
    <Box sx={{ p: 4 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter URL"
          variant="outlined"
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" type="submit">
          Shorten URL
        </Button>
      </form>

      {status === "loading" && <Typography mt={2}>Shortening...</Typography>}
      {status === "succeeded" && (
        <Typography mt={2} color="green">
          Shortened URL: {shortenedUrl}
        </Typography>
      )}
      {status === "failed" && (
        <Typography mt={2} color="red">
          Error: {error}
        </Typography>
      )}
    </Box>
  );
};

export default UrlForm;
