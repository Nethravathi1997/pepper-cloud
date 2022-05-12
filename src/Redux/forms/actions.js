import { ADD_FORM, REMOVE_FORM } from "./actionTypes";
import {
  ADD_FORM_LOADING,
  ADD_FORM_SUCCESS,
  ADD_FORM_ERROR,
} from "./actionTypes";

import {
  GET_FORM_SUCCESS,
  GET_FORM_LOADING,
  GET_FORM_ERROR,
} from "./actionTypes";

export const addForm = (data) => ({
  type: ADD_FORM,
  payload: data,
});
export const addFormLoading = () => {
  return {
    type: ADD_FORM_LOADING,
  };
};

export const addFormSuccess = (data) => {
  return {
    type: ADD_FORM_SUCCESS,
    payload: data,
  };
};

export const addFormError = (err) => {
  return {
    type: ADD_FORM_ERROR,
    payload: err,
  };
};

export const getFormSuccess = (data) => {
  return {
    type: GET_FORM_SUCCESS,
    payload: data,
  };
};
export const getFormLoading = () => {
  return {
    type: GET_FORM_LOADING,
  };
};
export const getFormError = (err) => {
  return {
    type: GET_FORM_ERROR,
    payload: err,
  };
};
export const removeForm = (id) => ({
  type: REMOVE_FORM,
  payload: id,
});