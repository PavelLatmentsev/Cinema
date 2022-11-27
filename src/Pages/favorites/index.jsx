import React, { useMemo } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./favorite.module.scss";
import { FilmCard } from "components/FilmCard";
export function Favorites({ films, onLike }) {
  const filtredFilms = useMemo(() => {
    return films.filter((film) => film.liked);
  }, [films]);
  return (
    <div className={styles.favorites}>
      <Container fluid className={styles.container}>
        {filtredFilms.length === 0 && <h2>No Any Favorite Films</h2>}
        {filtredFilms.length > 0 && (
          <Row>
            {filtredFilms.map((film) => {
              const { Title, Poster, Year, imdbID, liked } = film;
              return (
                <Col lg={4} key={imdbID}>
                  <FilmCard
                    Title={Title}
                    Poster={Poster}
                    Year={Year}
                    imdbID={imdbID}
                    liked={liked}
                    onLike={onLike}
                  />
                </Col>
              );
            })}
          </Row>
        )}
      </Container>
    </div>
  );
}
