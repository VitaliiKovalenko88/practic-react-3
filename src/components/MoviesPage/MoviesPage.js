import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation, useHistory } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import { fetchMovieByQuery } from "../../serviceApi/servisApi";
import movie from "../../image/movie.jpg";

export const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [request, setRequest] = useState("");
  const [movies, setMovies] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();
  const history = useHistory();
  // console.log(new URLSearchParams(location.search));
  useEffect(() => {
    // setRequest(new URLSearchParams(location.search).get("query"));
    // console.log(request);
  }, [location.search]);
  console.log(useRouteMatch());
  useEffect(() => {
    if (query) {
      fetchMovieByQuery(query).then(({ results }) => {
        setMovies(results);
      });
    }
  }, [query]);

  const handleFormSubmite = (query) => {
    setQuery(query);

    history.push({ ...location, search: `query=${query}` });
  };
  return (
    <>
      <SearchBar onSubmite={handleFormSubmite} />
      <ul>
        {movies.map(({ id, title, poster_path }) => {
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `${url}/${id}`,
                  state: { from: location },
                }}
              >
                <div>
                  {poster_path ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                      alt={title}
                      width={150}
                    />
                  ) : (
                    <img src={movie} alt="no poster" width={150} />
                  )}
                </div>
                <p>{title}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
