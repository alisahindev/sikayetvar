import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getPost } from "../../../../redux/posts/post-reducer";
import { getUser } from "../../../../redux/users/user-reducer";
import capitalizeFirstLetter from "../../../../utils/capitalize-word";

export const PostDetail = (props) => {
  const { id } = useParams();

  const { getPost, post, user } = props;

  useEffect(() => {
    getPost(id);
  }, []);

  return (
    <div className='post-page-wrapper'>
      <div className='post-list-wrapper post-detail'>
        <div className='row'>
          <div className='col-md-6'>
            <Link to={`/profile/${user.id}`}>
              <h1>{user.name}</h1>
            </Link>
          </div>
          <div className='col-md-6'>
            <div className='post-title'>
              <h2>{post?.title}</h2>
            </div>
          </div>
          <div className='col-md-12'>
            <div className='post-body'>{post?.body}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  post: state.posts.post,
  user: state.user.user,
});

const mapDispatchToProps = { getPost, getUser };

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
