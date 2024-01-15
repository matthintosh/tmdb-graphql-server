import { Movie } from "generated/graphql";
import { TMDB_BEARER_TOKEN } from "../config.js";

const MOVIE_DETAIL_ENDPOINT = "https://api.themoviedb.org/3/movie/";

export async function fetchMovie(id:string) {
      const movieDetailResponse = await fetch(`${MOVIE_DETAIL_ENDPOINT}${id}`, {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      });
      if (!movieDetailResponse.ok) {
        throw new Error("Something went wrong on movie by Id query");
      }
      const movie: Movie = await movieDetailResponse.json() as Movie;
      return movie;
    }