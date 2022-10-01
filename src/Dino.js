import React from 'react';
// import the comment component
import Comment from './Comment.js';

function Dino({blog}) {
  let allComments = blog.comments.map((c, i)=>{
      return <Comment key={i} body={c}/>
  });

  return (
      <>
        <h1>Check out my {blog.title} blog!</h1>
        <p>Written by {blog.author}</p>
        <p>{blog.body}</p>
        {allComments}
      </>
    );
}

export default Dino;