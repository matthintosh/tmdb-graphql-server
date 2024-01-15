import { Movie } from "generated/graphql";
import { TMDB_BEARER_TOKEN } from "../config.js";

const MOVIES_ENDPOINT = "https://api.themoviedb.org/3/movie/now_playing";

export async function fetchMovies() {
    const movieResponse = await fetch(MOVIES_ENDPOINT, {
        headers: {Authorization: `Bearer ${TMDB_BEARER_TOKEN}`},
    });

    if (!movieResponse.ok) {
        throw new Error("Something went wrong on movies query");
    }
    const {results} = await movieResponse.json() as { results };
    return results as Movie[];
}