import React from 'react';

class Comment extends React.Component {
  constructor({body}) {
    super(body);
    this.state = {
      value: body
    };
  }

  render () {
    return (
      <div className="comment">
        <p>{this.state.value}</p>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.setState({
            value: e.target.body.value
          });
        }}>
          <input name="body" type="text" placeholder={this.state.value} />
          <button type="submit">Submit comment change</button>
        </form>
      </div>
    );
  }
}

export default Comment;