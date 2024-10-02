// import FrontPage from "./page/FrontPage";
import LPRDataPage from "./page/LPRDataPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LPRDataPage />} />
      </Routes>
    </Router>
  );
};

export default App;
