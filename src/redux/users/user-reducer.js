import axios from "axios";
import { FAILURE, REQUEST, SUCCESS } from "../../utils/action-types-utils";

export const ACTION_TYPES = {
  FETCH_USER: "user/FETCH_USER",
  RESET: "user/RESET",
};

const userInitial = {
  address: {
    city: "",
    geo: {
      lat: 1,
      long: 1,
    },
    street: "",
    suite: "",
    zipcode: "",
    company: {
      bs: "",
      catchPhrase: "",
      name: "",
    },
    email: "",
    id: 1,
    name: "",
    phone: "",
    username: "",
    website: "",
  },
};

const initialState = {
  loading: false,
  user: userInitial,
  updateSuccess: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUEST(ACTION_TYPES.FETCH_USER):
      return {
        ...state,
        loading: true,
        updateSuccess: false,
      };

    case FAILURE(ACTION_TYPES.FETCH_USER):
      return {
        ...state,
        loading: false,
        updateSuccess: false,
      };

    case SUCCESS(ACTION_TYPES.FETCH_USER):
      return {
        ...state,
        loading: false,
        user: action.payload.data,
      };

    case ACTION_TYPES.RESET:
      return { ...state, user: userInitial, updateSuccess: false };
    default:
      return state;
  }
};

const apiUrl = "/users";

export const getUser = (id) => {
  const requestUrl = `${apiUrl}/${id}`;
  return {
    type: ACTION_TYPES.FETCH_USER,
    payload: axios.get(requestUrl),
  };
};

export const handleReset = () => {
  return {
    type: ACTION_TYPES.RESET,
  };
};
