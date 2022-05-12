import {
    ADD_FORM,
    ADD_FORM_LOADING,
    ADD_FORM_SUCCESS,
    ADD_FORM_ERROR,
    GET_FORM_LOADING,
    GET_FORM_SUCCESS,
    GET_FORM_ERROR
  } from "./actionTypes";
  
  // const init = { counter: 0 };
  const init = { loading: false, forms:[], error: false};
  
  export const reducer = (state = init, { type, payload }) => {
    switch (type) {
      case ADD_FORM:
        return {
          ...state,
          forms: [payload, ... state.forms],
        };
      case ADD_FORM_LOADING:
        return {
          ...state,
          loading: true,
        };
      case ADD_FORM_SUCCESS:
        return {
          ...state,
          forms: [payload, ... state.forms],
          loading: false,
        };
  
      case ADD_FORM_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      case GET_FORM_LOADING:
        return {
          ...state,
          loading: true,
        };
  
      case GET_FORM_SUCCESS:
        return {
          ...state,
          forms: payload,
          loading: false,
        };
  
      case GET_FORM_ERROR:
        return {
          ...state,
          loading: false,
          error: true,
        };
  
      default:
        return state;
    }
  };