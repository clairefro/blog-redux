import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPost } from '../actions';

class PostsShow extends Component {
  componentWillMount() {
    if (!this.props.post) {
      // fetch individual post if posts not already fetched from posts_index
      this.props.fetchPost(this.props.match.params.id);
    }
  }

  render () {
    // need this or component will crash on mount when direct access url
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
// ownProps are the props the component already has without redux
function mapStateToProps(reduxState, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10); // parse from URL
  const post = reduxState.posts.find(p => p.id === id);
  return { post };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPost }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);
