import React from "react";
import { Link } from "react-router-dom";
import favourite from "../../assets/img/favourite.png";
import notFavourite from "../../assets/img/notFavourite.png";
import styles from "./filmCard.module.scss";

export function FilmCard({ Poster, Title, imdbID, Year, liked, onLike }) {
  return (
    <div className={styles.card}>
      <img src={Poster} alt={Title} className={styles.image} />
      <Link to={`/film/${imdbID}`}>
        <h2 className={styles.description}>{Title}</h2>
      </Link>

      <p>{Year}</p>
      <button className={styles.likedBtn} onClick={() => onLike(imdbID)}>
        <img
          src={liked ? favourite : notFavourite}
          alt={Title}
          className={styles.liked}
        />
      </button>
    </div>
  );
}
