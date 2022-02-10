import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieCast } from "../../serviceApi/servisApi";
import movie from "../../image/movie.jpg";

export const Cast = () => {
  const [theCast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(({ results }) =>
      setCast(({ prevState }) => [...prevState, ...results])
    );
  }, [movieId]);
  return (
    <>
      <h2>Actors</h2>
      <ul>
        {theCast.map(({ id, name, profile_path, character }) => {
          return (
            <li key={id}>
              <div>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt="name"
                  />
                ) : (
                  <img src={movie} alt={name} />
                )}
              </div>
              <h3>{name}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};
