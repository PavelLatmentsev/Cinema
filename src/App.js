import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import "./App.css";
import { MainLayout } from "layouts/MainLayout/index";
import { Home } from "Pages/home";
import { Favorites } from "Pages/favorites";
import { useGetFilms } from "./hooks/useGetFilms";

function App() {
  const { films, isLoading } = useGetFilms();
  return (
    <Router>
      <MainLayout>
        {isLoading ? (
          <Spinner animation="border" variant="info" />
        ) : (
          <Switch>
            <Route path="/" exact>
              <Home films={films} />
            </Route>
            <Route path="/favorite">
              <Favorites films={films} />
            </Route>
          </Switch>
        )}
      </MainLayout>
    </Router>
  );
}

export default App;
