import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { fetchReviews } from "../../serviceApi/servisApi";

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(({ results }) => {
      setReviews((prevReviews) => [...prevReviews, ...results]);
    });
  }, [movieId]);

  return (
    <>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(({ id, content, author }) => {
          return (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};
