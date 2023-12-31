import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Netflix from "./pages/Netflix";
import Signup from "./pages/Signup";
import Login from "./pages/LoginNew";
import Player from "./pages/Player";
import Movies from "./pages/Movies";
import TVShows from "./pages/TVShows";
import UserLiked from "./pages/UserLiked";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Netflix />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/tv" element={<TVShows />} />
        <Route exact path="/mylist" element={<UserLiked />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
