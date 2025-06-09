import React from "react";

const MovieCard = ({ movie }) => (
  <div className="flex flex-col rounded-lg bg-white p-4 shadow-md">
    <img
      alt={movie.title}
      className="h-64 w-full rounded-md object-cover pl-4 pr-4"
      src={movie.poster}
    />
    <h2 className="mb-1 text-lg font-semibold">{movie.title}</h2>
    <p className="mb-4 text-sm text-gray-500">Movie • {movie.year}</p>
    <button className="mt-auto self-start rounded px-3 py-1 font-bold text-blue-500 underline transition duration-200 hover:bg-blue-500 hover:text-white">
      View Details
    </button>
  </div>
);

export default MovieCard;
