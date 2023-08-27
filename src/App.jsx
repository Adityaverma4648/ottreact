import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

//  import Components
import Navbar from "./Components/Navbar";

// import pages
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Shorts from "./Pages/Shorts";
import Category from "./Pages/Category";
import Setting from "./Pages/Setting";
import Search from "./Pages/Search";

import Welcome from "./Pages/Welcome";
import { WatchLater } from "./Pages/WatchLater";

function App() {

  

  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} initial></Route>
          <Route path="/home" element={<Home />} exact></Route>
          <Route path="/login" element={<Login />} exact></Route>
          <Route path="/register" element={<Register />} exact></Route>

          {/*  single Shorts */}
          <Route path="/shorts/:id" element={<Shorts />}></Route>

          {/*  single category */}
          <Route path="/category/:id" element={<Category />}></Route>

          <Route path="setting" element={<Setting />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="watchlater" element={<WatchLater />}></Route>
        </Routes>
      </BrowserRouter>
   
  );
}

export default App;
