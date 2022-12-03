import { fetchReviews } from 'components/api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews && (
        <div>
          <ul>
            {reviews.length !== 0 ? (
              reviews.map(review => (
                <li key={review.id}>
                  <b>Author: {review.author}</b>
                  <p>{review.content}</p>
                </li>
              ))
            ) : (
              <p>We don`t have any reviews for this movie</p>
            )}
          </ul>
        </div>
      )}
    </>
  );
}
