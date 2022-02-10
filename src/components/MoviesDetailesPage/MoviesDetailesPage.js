import { useEffect, useState, Suspense } from "react";
import { useParams } from "react-router";
import {
  useHistory,
  useLocation,
  NavLink,
  Link,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { Cast } from "../Cast/Cast";
import { Reviews } from "../Reviews/Reviews";
import { fetchDetaileMovie } from "../../serviceApi/servisApi";

export const MoviesDetaile = () => {
  const [movie, setFilm] = useState([]);

  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  // console.log(useParams());

  useEffect(() => {
    fetchDetaileMovie(movieId)
      .then(({ data }) => {
        setFilm(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieId]);

  const {
    title,
    release_date,
    overview,
    poster_path,
    vote_average,
    genres = [],
  } = movie;

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/films");
  };
  return (
    <>
      <button type="button" onClick={onGoBack}>
        Go back
      </button>

      <div>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={title}
          />
        </div>
        <div>
          <h2>
            {title} {release_date}
          </h2>
          <p>
            Use score: <span>{vote_average}</span>
          </p>
          <h3>Overview</h3>
          <p>{overview} </p>
          <h3>Genre</h3>
          <p>
            {genres
              .map(({ name }) => {
                return name;
              })
              .join(", ")}
          </p>
          <h3>Additional information</h3>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/review`}>Reviews</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Suspense>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/review`}>
          <Reviews />
        </Route>
      </Suspense>
    </>
  );
};
