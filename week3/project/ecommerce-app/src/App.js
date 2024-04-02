import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import DetailPage from "./components/DetailPage";
import FavoritesPage from "./components/FavoritesPage";
import NavBar from "./components/NavBar";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
