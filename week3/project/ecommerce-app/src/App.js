import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import DetailPage from "./components/DetailPage";
import FavoritesPage from "./components/FavoritesPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
};

export default App;
