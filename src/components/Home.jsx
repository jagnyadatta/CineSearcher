import React from "react";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MovieCard from "./MovieCard";

const sampleMovies = [
  {
    title: "Inception",
    year: "2010",
    poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
  },
  {
    title: "The Matrix",
    year: "1999",
    poster: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
  },
  {
    title: "Interstellar",
    year: "2014",
    poster: "https://m.media-amazon.com/images/I/71y9ZwxV-ML._AC_SY679_.jpg",
  },
  {
    title: "The Dark Knight",
    year: "2008",
    poster: "https://m.media-amazon.com/images/I/51T8OXMiB5L.jpg",
  },
];

const Home = () => (
  <div className="min-h-screen bg-gray-200 px-4 py-8">
    {/* Search Bar Section */}
    <div className="mb-8 ml-10 mr-10 flex justify-center">
      <div className="flex w-full items-center rounded-md border border-gray-400 bg-white p-2">
        <FontAwesomeIcon className="w-5 text-gray-500" icon={faSearch} />
        <input
          className="outline-none ml-2 w-full bg-transparent"
          placeholder="Enter Movie Name"
          type="text"
        />
      </div>
    </div>
    {/* Movies Grid */}
    <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {sampleMovies.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  </div>
);

export default Home;
