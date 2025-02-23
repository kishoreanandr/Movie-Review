import { Route, Routes } from "react-router-dom";
import { MoviesList, MoviesDetails, PageNotFound } from "../pages";

export const AllRoute = () => (
  <Routes>
    <Route path="/" element={<MoviesList title="Now Playing" apiPath="movie/now_playing"  />} />
    <Route path="/movie/popular" element={<MoviesList title="Popular"  apiPath="movie/popular"/>} />
    <Route path="/movie/top" element={<MoviesList title="Top Rated Movies"  apiPath="movie/top_rated"/>} />
    <Route path="/movie/upcoming" element={<MoviesList title="Upcoming"  apiPath="movie/upcoming"/>} />
    <Route path="/movie/:id" element={<MoviesDetails />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
);
 