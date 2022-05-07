import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import HomeRoute from "./routes/HomeRoute/HomeRoute";
import AuthentificationRoute from "./routes/AuthentificationRoute/AuthentificationRoute";
import ShopRoute from "./routes/ShopRoute/ShopRoute";
import CheckOutRoute from "./routes/CheckOutRoute/CheckOutRoute";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          {" "}
          <Route index path="/" element={<HomeRoute />} />
          <Route path="signin" element={<AuthentificationRoute />} />
          <Route path="shop" element={<ShopRoute />} />
          <Route path="checkout" element={<CheckOutRoute />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
