import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Container, Nav } from "react-bootstrap";
import styles from "./mainLayout.module.scss";
export function MainLayout({ children }) {
    
  let { pathname } = useLocation();
  const isHome = pathname === "/";
 

  return (
    <Container className={styles.container}>
      <nav className="mt-3">
        <h1>{isHome ? "All Films" : "Favorite Films"}</h1>

        <div className={styles.nav}>
          <NavLink
            to="/"
            exact
            className={styles.link}
            activeClassName={styles.active}
          >
            <Nav.Item>All Films</Nav.Item>
          </NavLink>
          <NavLink
            to="/favorite"
            className={styles.link}
            activeClassName={styles.active}
          >
            <Nav.Item>Favorits Films</Nav.Item>
          </NavLink>
        </div>
      </nav>
      <main className={styles.main}>
      {children}
      </main>
    
    </Container>
  );
}
