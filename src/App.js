import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import HomeRoute from "./routes/HomeRoute/HomeRoute";
import AuthentificationRoute from "./routes/AuthentificationRoute/AuthentificationRoute";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          {" "}
          <Route path="home" element={<HomeRoute />} index />
          <Route path="signin" element={<AuthentificationRoute />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
