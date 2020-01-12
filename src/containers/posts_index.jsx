import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  render() {
    return (
      <div>
        <div className="first-row">
          <h3>Redux Blog</h3>
          <Link className="btn btn-primary btn-cta" to="/posts/new" >
          Write a post!
          </Link>
        </div>
      </div>
    );
  }
}

export default PostsIndex;
