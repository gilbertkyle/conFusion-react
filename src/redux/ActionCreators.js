import * as ActionTypes from "./ActionTypes";
import { DISHES } from "../shared/dishes";
import { actionTypes } from "react-redux-form";
import { Action } from "rxjs/internal/scheduler/Action";

export const addComment = (dishId, rating, author, comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    dishId: dishId,
    rating: rating,
    author: author,
    comment: comment
  }
});

export const fetchDishes = () => dispatch => {
  dispatch(dishesLoading(true));
  setTimeout(() => {
    dispatch(addDishes(DISHES));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = error => ({
  type: ActionTypes.DISHES_FAILED,
  payload: error
});

export const addDishes = () => ({
  type: ActionTypes.ADD_DISHES,
  payload: DISHES
});
