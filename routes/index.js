var express = require('express');
var router = express.Router();

const fetch = require('node-fetch');

router.get('/movies', async (req, res) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.TMDB_API_KEY}`,
  );

  const data = await response.json();

  res.json({ result: true, movies: data.results });
});

module.exports = router;
