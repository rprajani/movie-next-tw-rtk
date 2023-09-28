"use client";
import MovieList from "@/components/MovieList";
import { useGetMoviesByTypeQuery } from '@/services/ListingServices/movieListing';

export default function Home({params}:{params:any}) {
  const {type} = params;
  const topRated = useGetMoviesByTypeQuery(type).data?.results

  const getTypeTitle = () => {
    switch (type) {
      case "top_rated":
        return "Top Rated Movies";
      case "popular":
        return "Popular Movies";
      case "now_playing":
        return "Now Playing";
      case "upcoming":
        return "Upcoming Movies";
      default:
        return "Top Rated Movies";
    }
  }
  
  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        {topRated?.length > 0  && <MovieList list={topRated} type={getTypeTitle()} listType ={"long"} />}
      </div>
    </main>
  );
}
