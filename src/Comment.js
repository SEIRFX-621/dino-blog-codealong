import React from 'react';

function Comment(props) {
  return (
    <>
      <p class="comment">{props.body}</p>
    </>
  );
}

export default Comment;