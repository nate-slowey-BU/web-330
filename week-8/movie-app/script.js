/*
  Pragmatic JavaScript
  Chapter 4
  Programming Assignment

  Author: Nate Slowey
  Date: 12/11
  Filename:
*/

"use strict";

const movieTitle = document.getElementById("movie-title");
const movieDirector = document.getElementById("movie-director");
const movieYear = document.getElementById("movie-year");
const movieSynopsis = document.getElementById("movie-synopsis");

const movies = [
  {
    title: "Titanic",
    director: "James Cameron",
    year: "1997",
    synopsis:
      "A poor artist and a rich debutante meet and fall in love on the famously ill-fated maiden voyage of the `unsinkable' RMS Titanic in 1912.",
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: "1994",
    synopsis:
      "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75, who yearns to be reunited with his childhood sweetheart.",
  },
  {
    title: "Whiplash",
    director: "Damien Chazelle",
    year: "2014",
    synopsis:
      "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
  },
];

function fetchMovie(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let foundMovie = null;
      for (let i = 0; i < movies.length; i++) {
        if (movies[i].title.toLowerCase() === title.toLowerCase()) {
          foundMovie = movies[i];
          break;
        }
      }

      if (foundMovie) {
        resolve(foundMovie);
      } else {
        reject(new Error(`Movie not found`));
      }
    }, 3000);
  });
}

document
  .getElementById("movie-form")
  .addEventListener("submit", async function displayMovie(event) {
    event.preventDefault();

    const titleInput = document.getElementById("title-input").value;

    try {
      //fetch movie
      const movie = await fetchMovie(titleInput);

      movieTitle.innerHTML = `${movie.title}`;
      movieDirector.innerHTML = `${movie.director}`;
      movieYear.innerHTML = `${movie.year}`;
      movieSynopsis.innerHTML = `${movie.synopsis}`;
    } catch (error) {
      alert("Movie not found. Please try again.");
    }
  });
