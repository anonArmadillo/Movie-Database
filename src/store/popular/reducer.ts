import { PopularMoviesActionTypes } from '../../constants/ActionConstants';
import { API_STATES } from '../../constants/AppConstants';
import { ActionType, IMovie, ISearch } from '../../models/model';

export interface IPopularMoviesState {
  movies: ISearch<IMovie> | null;
  apiState: API_STATES | null;
  searchPage: number;
}

const initialState: IPopularMoviesState = {
  movies: null,
  apiState: null,
  searchPage: 1,
};

function reducer(
  state: IPopularMoviesState = initialState,
  action: ActionType
): IPopularMoviesState {
  switch (action.type) {
    case PopularMoviesActionTypes.GET_POPULAR_MOVIES:
      return {
        ...state,
        apiState: API_STATES.LOADING,
      };
    case PopularMoviesActionTypes.POPULAR_MOVIES_SUCCESS:
      const { shouldConcat } = action.payload;

      if (shouldConcat && state.movies) {
        return {
          ...state,
          movies: {
            ...action.payload.movies,
            results: [...state.movies.results, ...action.payload.movies.results],
          },
          apiState: API_STATES.SUCCESS,
        };
      }

      return {
        ...state,
        movies: action.payload.movies,
        apiState: API_STATES.SUCCESS,
      };
    case PopularMoviesActionTypes.POPULAR_MOVIES_FAILED:
      return {
        ...state,
        apiState: API_STATES.FAILED,
      };
    case PopularMoviesActionTypes.SET_POPULAR_SEARCH_PAGE:
      return {
        ...state,
        searchPage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
