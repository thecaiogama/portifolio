import React from 'react';

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

export default Post;
