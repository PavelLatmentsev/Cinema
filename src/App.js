import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import "./App.css";
import { MainLayout } from "layouts/MainLayout/index";
import { Home } from "Pages/home";
import { Favorites } from "Pages/favorites";
import { useFilms } from "./hooks/useGetFilms";
import { FilmDetail } from "Pages/filmDetails";

function App() {
  const { films, isLoading, handleLiked } = useFilms();

  return (
    <Router>
      <MainLayout>
        {isLoading ? (
          <Spinner animation="border" variant="info" />
        ) : (
          <Switch>
            <Route path="/" exact>
              <Home films={films} onLike={handleLiked} />
            </Route>
            <Route path="/favorite">
              <Favorites films={films} onLike={handleLiked} />
            </Route>
            <Route path="/film/:id">
              <FilmDetail films={films} onLike={handleLiked} />
            </Route>
          </Switch>
        )}
      </MainLayout>
    </Router>
  );
}

export default App;
