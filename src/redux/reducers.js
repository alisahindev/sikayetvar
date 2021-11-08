import { combineReducers } from "redux";
import PostReducers from "./posts/post-reducer";
import UserReducer from "./users/user-reducer";

export default combineReducers({
  posts: PostReducers,
  user: UserReducer,
});
