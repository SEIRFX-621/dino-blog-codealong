import React, { useState} from 'react';

function Comment({body}) {
  const [bodyValue, setBodyValue] = useState(body);
  return (
    <div className="comment">
      <p>{bodyValue}</p>
      <form onSubmit={(e) => {
        e.preventDefault();
        setBodyValue(e.target.body.value);
      }}>
        <input name="body" type="text" placeholder={bodyValue} />
        <button type="submit">Submit comment change</button>
      </form>
    </div>
  );
}

export default Comment;