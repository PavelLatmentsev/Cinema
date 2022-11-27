import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./home.module.scss";

export function Home({ films }) {
  return (
    <div className={styles.home}>
      <Container fluid className={styles.container}>
        <Row>
          {films.map((film) => {
            const { Title, Poster, Year, imdbID } = film;
            return (
              <Col lg={4} key={imdbID}>
                <div className={styles.card}>
                  <img src={Poster} alt={Title} className={styles.image} />
                  <h2 className={styles.description}>{Title}</h2>
                  <p>{Year}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
