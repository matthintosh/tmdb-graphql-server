import { Image } from "generated/graphql";
import { TMDB_BEARER_TOKEN } from "../config.js";

const MOVIE_IMAGES_ENDPOINT =
  "https://api.themoviedb.org/3/movie/{movie_id}/images";


export async function fetchImages (id:string) {
         const movieImagesUrl = MOVIE_IMAGES_ENDPOINT.replace("{movie_id}", id);
      const movieImagesResponse = await fetch(movieImagesUrl, {
        headers: { Authorization: `Bearer ${TMDB_BEARER_TOKEN}` },
      });
      if (!movieImagesResponse.ok) {
        throw new Error("Something went wrong on movie by Id query");
      }
      const movieImages: Image = await movieImagesResponse.json();
      movieImages.backdrops = movieImages.backdrops.filter(
        (backdrop) => backdrop.iso_639_1 === null
      );
      return movieImages;
    }  
