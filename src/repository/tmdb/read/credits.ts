import { Credits } from "generated/graphql";
import { TMDB_BEARER_TOKEN } from "../config.js";

const MOVIE_CREDIT_ENDPOINT = "https://api.themoviedb.org/3/movie/{movie_id}/credits"

export async function fetchMovieCredits (id:string) {
      const movieCreditUrl = MOVIE_CREDIT_ENDPOINT.replace("{movie_id}",id)
      const movieCreditsResponse = await fetch(movieCreditUrl, {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      });
      if (!movieCreditsResponse.ok) {
        throw new Error("Something went wrong on movie by Id query");
      }
      const movieCredits: Credits = await movieCreditsResponse.json();
      return movieCredits;
    }