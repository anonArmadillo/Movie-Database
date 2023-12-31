import { Box, Theme, Typography, useTheme } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoMoviesCard from "../../components/atoms/NoDataCard/NoDataCard";
import InfiniteScroller from "../../components/molecules/InfiniteScroller/InfiniteScroller";
import SkeletonLoader from "../../components/atoms/SkeletonLoader/SkeletonLoader";
import { API_STATES, MOVIE_CARD_WIDTH } from "../../constants/AppConstants";
import { IMovie, ISearch } from "../../models/model";
import { fetchMovieGenresStart } from "../../store/genres/actions";
import { IMainState } from "../../store/store";

interface CategoryPageProps {
  movies: ISearch<IMovie> | null;
  fetchData: () => void;
  apiState: API_STATES | null;
  category: string;
}

function CategoryPage(props: CategoryPageProps) {
  const { movies, fetchData, apiState, category } = props;
  const dispatch = useDispatch();
  const theme: Theme = useTheme()

  const genreList = useSelector((state: IMainState) => state.genreList.genres);

  useEffect(() => {
    if (!genreList?.length) {
      dispatch(fetchMovieGenresStart());
    }
  }, [dispatch, genreList]);

  const noDataComponent =
    apiState === API_STATES.LOADING ? (
      <SkeletonLoader carWidthInPx={MOVIE_CARD_WIDTH.CATEGORY_PAGE} />
    ) : (
      <NoMoviesCard/>
    );
  return (
    <Box sx={{ paddingTop: "20px" }}>
      <Typography
        sx={{
          fontSize: "18px",
          borderBottom: `2px solid ${theme.palette.secondary.main}`,
          textTransform: "capitalize",
          display: "inline-block",
          marginBottom: "20px",
        }}
      >
        {`${category.toLowerCase()} Movies`}
      </Typography>
      <br />
      {movies?.results.length ? (
        <InfiniteScroller
          fetchData={fetchData}
          movieData={movies?.results}
          cardWidthInPx={MOVIE_CARD_WIDTH.CATEGORY_PAGE}
        ></InfiniteScroller>
      ) : (
        noDataComponent
      )}
    </Box>
  );
}

export default CategoryPage;
