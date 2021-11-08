import axios from "axios";
import { FAILURE, REQUEST, SUCCESS } from "../../utils/action-types-utils";
import { getUser } from "../users/user-reducer";

export const ACTION_TYPES = {
  FETCH_POSTS: "posts/FETCH_POSTS",
  FETCH_POST: "posts/FETCH_POST",
  CREATE_POST: "posts/CREATE_POST",
  UPDATE_POST: "posts/UPDATE_POST",
  DELETE_POST: "posts/DELETE_POST",
  RESET: "posts/RESET",
};

const initialState = {
  loading: false,
  posts: [],
  post: {},
  updateSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_POSTS):
    case REQUEST(ACTION_TYPES.FETCH_POST):
    case REQUEST(ACTION_TYPES.CREATE_POST):
    case REQUEST(ACTION_TYPES.UPDATE_POST):
    case REQUEST(ACTION_TYPES.DELETE_POST):
      return {
        ...state,
        loading: true,
        updateSuccess: false,
      };

    case FAILURE(ACTION_TYPES.FETCH_POSTS):
    case FAILURE(ACTION_TYPES.FETCH_POST):
    case FAILURE(ACTION_TYPES.CREATE_POST):
    case FAILURE(ACTION_TYPES.UPDATE_POST):
    case FAILURE(ACTION_TYPES.DELETE_POST):
      return {
        ...state,
        loading: false,
        updateSuccess: false,
      };
    case SUCCESS(ACTION_TYPES.FETCH_POSTS):
      return {
        ...state,
        loading: false,
        posts: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.FETCH_POST):
      return {
        ...state,
        loading: false,
        post: action.payload.data,
      };
    case SUCCESS(ACTION_TYPES.CREATE_POST):
    case SUCCESS(ACTION_TYPES.UPDATE_POST):
      return {
        ...state,
        post: action.payload.data,
        updateSuccess: true,
      };
    case SUCCESS(ACTION_TYPES.DELETE_POST):
      return {
        ...state,
        updateSuccess: true,
      };
    case ACTION_TYPES.RESET:
      return { ...state, post: {}, updateSuccess: false };
    default:
      return state;
  }
};

const apiUrl = "/posts";

// Actions
export const getPosts = () => {
  return {
    type: ACTION_TYPES.FETCH_POSTS,
    payload: axios.get(apiUrl).then((res) => res),
  };
};

export const getPost = (id) => async (dispatch, getState) => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.FETCH_POST,
    payload: axios.get(requestUrl),
  });
  dispatch(getUser(result.action.payload.data.userId));
  return result;
};

export const updatePost = (post) => async (dispatch, getState) => {
  const id = getState().posts.post.id;
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.UPDATE_POST,
    payload: axios.put(requestUrl, post),
  });
  return result;
};

export const deletePost = (id) => async (dispatch) => {
  const requestUrl = `${apiUrl}/${id}`;
  const result = await dispatch({
    type: ACTION_TYPES.DELETE_POST,
    payload: axios.delete(requestUrl),
  });
  return result;
};

export const handleReset = () => {
  return {
    type: ACTION_TYPES.RESET,
  };
};
