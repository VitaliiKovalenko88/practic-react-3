import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchMovieCast } from "../../serviceApi/servisApi";
import movie from "../../image/movie.jpg";

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMovieCast(movieId).then(({ cast }) => {
      console.log(cast);
      setCast((prevCast) => [...prevCast, ...cast]);
    });
  }, [movieId]);
  return (
    <>
      <h2>Actors</h2>
      <ul>
        {cast.map(({ cast_id, original_name, profile_path, character }) => {
          return (
            <li key={cast_id}>
              <div>
                {profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                    alt="name"
                    width="100"
                  />
                ) : (
                  <img src={movie} alt={original_name} width="100" />
                )}
              </div>
              <h3>{original_name}</h3>
            </li>
          );
        })}
      </ul>
    </>
  );
};
