import FrontPage from "./page/FrontPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FrontPage />} />
      </Routes>
    </Router>
  );
};

export default App;
