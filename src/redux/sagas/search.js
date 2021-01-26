import { put, call, takeLastest } from 'redux-saga/effects';

import {
  SEARCH_MOVIE_START,
  SEARCH_MOVIE_ERROR,
  SEARCH_MOVIE_COMPLETE,
} from '../../consts/actionTypes';

export function* searchMovie({ payload }) {
  try {
  } catch (error) {}
}

export default function* search() {
  yield takeLastest(SEARCH_MOVIE_START, searchMovie);
}
