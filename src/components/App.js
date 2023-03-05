import React, { useState } from 'react';

function App() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [commentError, setCommentError] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
    if (event.target.value.length < 5) {
      setCommentError('Comment must be at least 5 characters');
    } else {
      setCommentError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Rating: ${rating}, Comment: ${comment}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="rating">Rating</label>
          <input
            id="rating"
            type="range"
            min="1"
            max="10"
            value={rating}
            onChange={handleRatingChange}
          />
          <span className="rating">{rating}</span>
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
          />
          {commentError && <p className="comment-error">{commentError}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
