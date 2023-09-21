import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//  import Components
import Navbar from "./Components/Navbar";

// import pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Shorts from "./Pages/Shorts";
import Genre from "./Pages/Genre";
import Search from "./Pages/Search";

import Welcome from "./Pages/Welcome";
import WatchLater from "./Pages/WatchLater";
import Movies from "./Pages/Movies";
import Saved from "./Pages/Saved";
import PeopleUnique from "./Pages/PeopleUnique";
import TVShows from "./Pages/TVShows";

function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} initial></Route>
          <Route path="home" element={<Home />} exact></Route>
          <Route path="login" element={<Login />} exact></Route>
          <Route path="register" element={<Register />} exact></Route>

          {/*  single Shorts */}
          <Route path="shorts/:id" element={<Shorts />}></Route>

          {/*  single Genre */}
          <Route path="genre/:id" element={<Genre />}></Route>

          {/* singlePeople */}
          <Route path="/people/:id" element={<PeopleUnique />}></Route> 


          <Route path="search" element={<Search />}></Route>
          <Route path="watchlater" element={<WatchLater />}></Route>
          <Route path="movies" element={<Movies />}></Route>
          <Route path="tvshows" element={<TVShows />}></Route>
          <Route path="saved" element={<Saved />}></Route>

        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
