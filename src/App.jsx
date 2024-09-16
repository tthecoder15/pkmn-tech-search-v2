import "./App.css";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" Component={AboutPage}/>
        <Route path="/search" Component={SearchPage}/>
      </Routes>
    </>
  );
}

export default App;
