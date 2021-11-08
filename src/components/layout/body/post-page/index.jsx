import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Outlet, useNavigate } from "react-router";
import { getPosts } from "../../../../redux/posts/post-reducer";

function PostPage(props) {
  const { getPosts, posts } = props;
  const navigate = useNavigate();
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='post-page-wrapper'>
      <div className='post-list-wrapper'>
        <ul className='list-group'>
          {posts.map((post, i) => (
            <li className='list-group-item' key={i}>
              <span className='d-flex align-items-center'>
                <span className='numered'>{i + 1}</span>
                <span className='list-group-item-desc'>{post.body}</span>
              </span>
              <div className='list-buttons'>
                <button
                  className='btn btn-primary'
                  onClick={() => navigate(`/post/${post.id}`)}
                >
                  DETAY
                </button>
                <button
                  className='btn btn-success'
                  data-toggle='modal'
                  data-target='#exampleModalCenter'
                  onClick={() => navigate(`/post/${post.id}/update`)}
                >
                  DÜZENLE
                </button>
                <button
                  className='btn btn-error'
                  onClick={() => navigate(`/post/${post.id}/delete`)}
                >
                  SİL
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}

const mapStateToProps = (storeState) => ({
  posts: storeState.posts.posts,
});

const mapDispatchToProps = { getPosts };

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
