import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page from "./components/Page";
import DetailPage from "./components/DetailPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
};

export default App;
