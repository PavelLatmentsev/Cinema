import React, { useMemo } from "react";
import Container from "react-bootstrap/Container";
import styles from "./filmDetail.module.scss";
import { useParams, Link } from "react-router-dom";
import { FilmCard } from "components/FilmCard";
export function FilmDetail({ films, onLike }) {
  const { id } = useParams();
  const filmData = useMemo(() => {
    return films.find((film) => film.imdbID === id);
  }, [id, films]);
  return (
    <div className={styles.detail}>
      <Container fluid className={styles.container}>
        {!!filmData && (
          <FilmCard
            Title={filmData.Title}
            Poster={filmData.Poster}
            Year={filmData.Year}
            imdbID={filmData.imdbID}
            liked={filmData.liked}
            onLike={onLike}
          />
        )}
        <Link to={"/"}>
          <button className="btn btn-primary">Back to All Films</button>
        </Link>
      </Container>
    </div>
  );
}
