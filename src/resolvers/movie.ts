import {fetchMovies} from "../repository/tmdb/read/movies.js";
import { fetchMovie } from "../repository/tmdb/read/movie.js";
import { Movie } from "generated/graphql.js";
import { fetchMovieCredits } from "../repository/tmdb/read/credits.js";
import { fetchImages } from "../repository/tmdb/read/images.js";

export const movieQueries = {
    movies: () => fetchMovies(),
    movie:(_: any,{id}: {id:any})=>fetchMovie(id)
}

export const movieFields = {
  credits: ({ id }: Movie) => fetchMovieCredits(id),
  images:({id}:Movie)=>fetchImages(id)
};