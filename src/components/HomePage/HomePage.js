import { useState, useEffect } from "react";
import { Link, useRouteMatch, useLocation } from "react-router-dom";
import { fetchTrendingMovies } from "../../serviceApi/servisApi";
import { mapper } from "../../helpers/getPop";
import { Button } from "../Button/Button";

import styled from "styled-components";

const Gellery = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const HomePage = () => {
  const [page, setPage] = useState(1);
  const [trendiingMovies, setTrendiingMovies] = useState([]);
  const { url } = useRouteMatch();
  const location = useLocation();

  useEffect(() => {
    fetchTrendingMovies(page)
      .then(({ data }) => {
        setTrendiingMovies((prevFilms) => [
          ...prevFilms,
          ...mapper(data.results),
        ]);
      })
      .catch((error) => console.log(error));
  }, [page]);

  const onLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <h1>Trends today</h1>
      <Gellery>
        {trendiingMovies.map(({ backdrop_path, title, id }) => {
          return (
            <li key={id}>
              <Link
                to={{ pathname: `movies/${id}`, state: { from: location } }}
              >
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w400/${backdrop_path}`}
                    alt={title}
                  />
                </div>
                <h2>{title}</h2>
              </Link>
            </li>
          );
        })}
      </Gellery>

      <Button onLoadMore={onLoadMore} />
    </>
  );
};
