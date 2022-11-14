import {MOVIE_PAGE} from "../actions/index";

interface initialState {
    movie_page: any,
}
let initialState = {
  movie_page: 1,
};
export const changeMoviePage = (store = initialState, action: { type: any; payload: any; }) => {
  switch (action.type) {
    case MOVIE_PAGE:
      return {
        ...store,
        movie_page: action.payload,
      };
    default: {
      return store;
    }
  }
};