import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  const { title } = props,
    { description } = props,
    { url } = props;

  return (
    <div className="post">
      <div className="postTitle">
        <a href={url} target="_blank">
          {title}
        </a>
      </div>
      <div className="postDescription">{description}</div>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Post;
