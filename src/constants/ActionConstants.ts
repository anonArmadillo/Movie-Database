export enum NowPlayingMoviesActionTypes {
    GET_NOW_PLAYING_MOVIES = 'GET_NOW_PLAYING_MOVIES',
    NOW_PLAYING_MOVIES_SUCCESS = 'NOW_PLAYING_MOVIES_SUCCESS',
    NOW_PLAYING_MOVIES_FAILED = 'NOW_PLAYING_MOVIES_FAILED',
    SET_NOW_PLAYING_SEARCH_PAGE = 'SET_NOW_PLAYING_SEARCH_PAGE',
    CLEAR_NOW_PLAYING_SEARCH_PAGE = 'CLEAR_NOW_PLAYING_SEARCH_PAGE',
  }

export enum PopularMoviesActionTypes {
    GET_POPULAR_MOVIES = 'GET_POPULAR_MOVIES',
    POPULAR_MOVIES_SUCCESS = 'POPULAR_MOVIES_SUCCESS',
    POPULAR_MOVIES_FAILED = 'POPULAR_MOVIES_FAILED',
    SET_POPULAR_SEARCH_PAGE = 'SET_POPULAR_SEARCH_PAGE',
    CLEAR_POPULAR_SEARCH_PAGE = 'CLEAR_POPULAR_SEARCH_PAGE',
  }
export enum TopRatedMoviesActionTypes {
    GET_TOP_RATED_MOVIES = 'GET_TOP_RATED_MOVIES',
    TOP_RATED_MOVIES_SUCCESS = 'TOP_RATED_MOVIES_SUCCESS',
    TOP_RATED_MOVIES_FAILED = 'TOP_RATED_MOVIES_FAILED',
    SET_TOP_RATED_SEARCH_PAGE = 'SET_TOP_RATED_SEARCH_PAGE',
    CLEAR_TOP_RATED_SEARCH_PAGE = 'CLEAR_TOP_RATED_SEARCH_PAGE',
  }
export enum UpcomingMoviesActionTypes {
    GET_UPCOMING_MOVIES = 'GET_UPCOMING_MOVIES',
    UPCOMING_MOVIES_SUCCESS = 'UPCOMING_MOVIES_SUCCESS',
    UPCOMING_MOVIES_FAILED = 'UPCOMING_MOVIES_FAILED',
    SET_UPCOMING_SEARCH_PAGE = 'SET_UPCOMING_SEARCH_PAGE',
    CLEAR_UPCOMING_SEARCH_PAGE = 'CLEAR_UPCOMING_SEARCH_PAGE',
  }

  export enum GenreActionTypes {
    GET_GENRES_START = 'GET_GENRES_START',
    GET_GENRES_SUCCESS = 'GET_GENRES_SUCCESS',
    GET_GENRES_FAILURE = 'GET_GENRES_FAILURE',
  }

  export enum SearchActionTypes {
    GET_SEARCH_START = 'GET_SEARCH_START',
    GET_SEARCH_SUCCESS = 'GET_SEARCH_SUCCESS',
    GET_SEARCH_FAILURE = 'GET_SEARCH_FAILURE',
    SET_SEARCH_QUERY = 'SET_SEARCH_QUERY',
    SET_SEARCH_PAGE = 'SET_SEARCH_PAGE',
    CLEAR_SEARCH_PAGE = 'CLEAR_SEARCH_PAGE',
  }

  export enum FavouriteActionTypes {
    SAVE_FAVORITE_MOVIE = 'SAVE_FAVORITE_MOVIE',
    DELETE_FAVORITE_MOVIE = 'DELETE_FAVORITE_MOVIE',
  }

  export enum MovieDetailsActionTypes {
    GET_MOVIE_DETAILS_START = 'GET_MOVIE_DETAILS_START',
    GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS',
    GET_MOVIE_DETAILS_FAILURE = 'GET_MOVIE_DETAILS_FAILURE',
    CLEAR_MOVIE_DETAILS = 'CLEAR_MOVIE_DETAILS',
  }