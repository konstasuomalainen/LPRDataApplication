// import FrontPage from "./page/FrontPage";
import BikePage from "./page/BikePage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BikePage />} />
      </Routes>
    </Router>
  );
};

export default App;
