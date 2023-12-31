import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCarousel from "../../components/molecules/MovieCarousel/MovieCarousel";
import { HOME_PAGE_TABS_DATA } from "../../constants/AppConstants";
import { IMovie } from "../../models/model";
import { fetchMovieGenresStart } from "../../store/genres/actions";
import { fetchNowPlayingMoviesStart } from "../../store/now-playing/actions";
import { fetchPopularMoviesStart } from "../../store/popular/actions";
import { IMainState } from "../../store/store";
import { fetchTopRatedMoviesStart } from "../../store/top-rated/actions";
import { fetchUpcomingMoviesStart } from "../../store/upcoming/actions";

function HomePage() {
  const dispatch = useDispatch();
  const nowPlayingMovies: IMovie[] | undefined = useSelector(
    (state: IMainState) => state.nowPlayingMovies.movies?.results
  );
  const popularMovies: IMovie[] | undefined = useSelector(
    (state: IMainState) => state.popularMovies.movies?.results
  );
  const topRatedMovies: IMovie[] | undefined = useSelector(
    (state: IMainState) => state.topRatedMovies.movies?.results
  );
  const upcomingMovies: IMovie[] | undefined = useSelector(
    (state: IMainState) => state.upcomingMovies.movies?.results
  );

  useEffect(() => {
    dispatch(fetchNowPlayingMoviesStart());
    dispatch(fetchPopularMoviesStart());
    dispatch(fetchTopRatedMoviesStart());
    dispatch(fetchUpcomingMoviesStart());
    dispatch(fetchMovieGenresStart());
  }, [
    dispatch
  ]);

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', rowGap: '20px', padding: '20px 0px'}}>
      {nowPlayingMovies?.length && (
        <MovieCarousel
          key={HOME_PAGE_TABS_DATA.NOW_PLAYING.title}
          movieData={nowPlayingMovies}
          headerDetails={HOME_PAGE_TABS_DATA.NOW_PLAYING}
        ></MovieCarousel>
      )}
      {popularMovies?.length && (
        <MovieCarousel
          key={HOME_PAGE_TABS_DATA.POPULAR.title}
          movieData={popularMovies}
          headerDetails={HOME_PAGE_TABS_DATA.POPULAR}
        ></MovieCarousel>
      )}
      {topRatedMovies?.length && (
        <MovieCarousel
          key={HOME_PAGE_TABS_DATA.TOP_RATED.title}
          movieData={topRatedMovies}
          headerDetails={HOME_PAGE_TABS_DATA.TOP_RATED}
        ></MovieCarousel>
      )}
      {upcomingMovies?.length && (
        <MovieCarousel
          key={HOME_PAGE_TABS_DATA.UPCOMING.title}
          movieData={upcomingMovies}
          headerDetails={HOME_PAGE_TABS_DATA.UPCOMING}
        ></MovieCarousel>
      )}
    </Box>
  );
}

export default HomePage;
