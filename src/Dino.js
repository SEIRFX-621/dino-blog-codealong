import React, { useState } from 'react';
// import the comment component
import Comment from './Comment.js';

function Dino({blog}) {
  const [state, setState] = useState(blog);

  let allComments = blog.comments.map((c, i)=>{
      return <Comment key={i} body={c}/>
  });

  const updateBlogFn = (e) => {
    e.preventDefault();
    const newTitle = e.target.title.value;
    const newAuthor = e.target.author.value;
    const newBody = e.target.body.value;
    setState({
      ...state,
      title: newTitle !== '' ? newTitle : state.title,
      author: newAuthor !== '' ? newAuthor : state.author,
      body: newBody !== '' ? newBody : state.body,
    })
  }

  return (
      <>
        <h1>Check out my {state.title} blog!</h1>
        <p>Written by {state.author}</p>
        <p>{state.body}</p>
        <form className="edit-form" onSubmit={updateBlogFn}>
          <input type="text" name="title" placeholder={state.title}/>
          <input type="text" name="author" placeholder={state.author}/>
          <input type="text" name="body" placeholder={state.body}/>
          <button type="submit">Update blog</button>
        </form>
        {allComments}
      </>
    );
}

export default Dino;