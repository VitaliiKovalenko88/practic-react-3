import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useHistory, useLocation } from "react-router-dom";
import { fetchDetaileMovie } from "../../serviceApi/servisApi";

export const MoviesDetaile = () => {
  const [film, setFilm] = useState([]);
  const { movieId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchDetaileMovie(movieId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  const { original_title, release_date, overview } = film;

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/films");
  };

  return (
    <section>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
      <h2>{original_title}</h2>
      <p>{release_date}</p>
      <p>{overview}</p>
    </section>
  );
};
