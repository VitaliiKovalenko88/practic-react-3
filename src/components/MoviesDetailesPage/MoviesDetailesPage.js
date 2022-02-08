import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";
import { fetchDetaileMovie } from "../../serviceApi/servisApi";

export const FilmsDetaile = () => {
  const [film, setFilm] = useState([]);
  const { filmId } = useParams();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    fetchDetaileMovie(filmId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filmId]);

  const { original_title, release_date, overview } = film;

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/films");
  };

  return (
    <section>
      <h2>{original_title}</h2>
      <p>{release_date}</p>
      <p>{overview}</p>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>
    </section>
  );
};
