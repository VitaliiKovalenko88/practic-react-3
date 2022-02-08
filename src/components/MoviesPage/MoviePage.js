import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { fetchTrendingMovies } from "../../serviceApi/servisApi";
import { mapper } from "../../helpers/getPop";
import styled from "styled-components";

const Gellery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const FilmsView = () => {
  const [page, setPage] = useState(1);
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchTrendingMovies(page)
      .then(({ data }) => {
        setFilms((prevFilms) => [...prevFilms, ...mapper(data.results)]);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, [page]);

  return (
    <>
      <h1>Home</h1>

      <hr />
      {!isLoading && (
        <Gellery>
          {films.map(({ backdrop_path, title, id }) => {
            return (
              <li key={id}>
                <h2>{title}</h2>
                <img
                  src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
                  alt={title}
                />
                <Link
                  to={{ pathname: `${url}/${id}`, state: { from: location } }}
                >
                  About Film
                </Link>
              </li>
            );
          })}
        </Gellery>
      )}
      <button type="button" onClick={() => setPage((prevPage) => prevPage + 1)}>
        more films
      </button>
    </>
  );
};
