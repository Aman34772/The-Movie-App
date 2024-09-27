import axios from "axios";
//56:39
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",

  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNWJlYmRkZjZiNjkzMWZkMjg2MmU4NTlkMTI3MzUzNiIsIm5iZiI6MTcyNTIxNDE4NS4xMjE2MjYsInN1YiI6IjY2ZDRhOTJiODc4MGNjNGFhOGNiNTZiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2qei-RQWts7UFG0oKsncW__KBHRrYnrtMwssfnZWzfI",
  },
});

export default instance;
