import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PostsShow extends Component {
  render () {
    if (!this.props.post) {
      return <p>Loading...</p>
    }

    return (
       <div>
         <div className="post-item">
           <h3>{this.props.post.title}</h3>
           <p>{this.props.post.content}</p>
         </div>
         <Link to="/">
           Back
         </Link>
       </div>
    );
  }
}

// mapStateToProps with second parameter allows own props
function mapStateToProps(reduxState, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10); // parse from URL
  const post = reduxState.posts.find(p => p.id === id);
  return { post };
}

export default connect(mapStateToProps)(PostsShow);
