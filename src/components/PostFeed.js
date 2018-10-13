import React, { Component } from 'react';
import Post from './Post';

class PostFeed extends Component {
  state = {
    posts: [
      {
        id: 2,
        postTitle: 'data-driven design?',
        postDescription: 'data, data, design, data, design',
        url: 'https://medium.com/@thecaiogama/data-driven-design-627c225b036b'
      },
      {
        id: 1,
        postTitle: 'why ux research?',
        postDescription: 'why do we practice ux research?',
        url: 'https://medium.com/@thecaiogama/por-que-ux-research-9fa6a64498b0'
      }
    ]
  };
  render() {
    const { posts } = this.state;

    return (
      <div id="postfeed">
        {posts.map(post => (
          <Post
            key={post.id}
            title={post.postTitle}
            description={post.postDescription}
            url={post.url}
          />
        ))}
      </div>
    );
  }
}

export default PostFeed;
