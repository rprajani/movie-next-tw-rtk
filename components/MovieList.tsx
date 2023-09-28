import Link from "next/link";
import React from "react";
import MovieCard, { IMovieCard } from "./MovieCard";

const MovieList = ({ list, type, link, listType }: { list: any, type: string, link?:string, listType:string }) => {
  return (
    <div className="flex flex-col mb-6">
      <div className="flex justify-between items-center mt-4">
        <h1 className="text-2xl font-medium">{type}</h1>
        {listType === "short" && <Link
          href={"/movies/"+link}
          className="py-2 px-5 bg-slate-800 text-md font-normal text-white"
        >
          See all
        </Link>}
      </div>
      <div className="grid grid-cols-4 mt-4 gap-4">
        {(listType === "short" ? list.slice(0, 4): list).map((movie: IMovieCard) => (
          <MovieCard key={movie?.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
