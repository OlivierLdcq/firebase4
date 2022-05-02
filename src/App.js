import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/Home/Home";
import Shop from "./routes/Shop/Shop";
import SignIn from "./routes/SignIn/SignIn";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          {" "}
          <Route path="home" element={<Home />} index />
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
