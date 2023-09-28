"use client";
import MovieList from "@/components/MovieList";
import { useGetMoviesByTypeQuery } from '@/services/ListingServices/movieListing';

export default function Home() {

  const popular = useGetMoviesByTypeQuery('popular').data?.results
  const topRated = useGetMoviesByTypeQuery('top_rated').data?.results
  const upcoming = useGetMoviesByTypeQuery('upcoming').data?.results
  const nowp = useGetMoviesByTypeQuery('now_playing').data?.results
  
  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        {topRated?.length > 0  && <MovieList list={topRated} link={'top_rated'} type={'Top Rated Movies'} listType={'short'}/>}
        {popular?.length > 0  && <MovieList list={popular} link={'popular'} type={'Popular Movies'} listType={'short'} />}
        {nowp?.length > 0  && <MovieList list={nowp} link={'now_playing'} type={'Now Playing'} listType={'short'} />}
        {upcoming?.length > 0  && <MovieList list={upcoming} link={'upcoming'} type={'Upcoming Movies'} listType={'short'} />}
      </div>
    </main>
  );
}
