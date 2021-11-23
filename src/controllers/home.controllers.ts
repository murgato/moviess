import axios from "axios";

export const GetMovie = async (title: String) => {
  return await axios
    .get(`http://www.omdbapi.com/?t=${title}&apikey=75c5cdf1&plot=full`)
    .then((response) => {
      if (response) {
        return {
          Title: response.data.Title,
          Actors: response.data.Actors,
          Plot: response.data.Plot,
          Poster: response.data.Poster,
          Genre: response.data.Genre,
        };
      } else {
        return;
      }
    })
    .catch();
};
