import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navigation from "./components/Navigation/Navigation.Component";
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
          <Route index element={<HomeRoute />} />
          <Route path="shop/*" element={<ShopRoute />} />
          <Route path="signin" element={<AuthentificationRoute />} />
          <Route path="checkout" element={<CheckOutRoute />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
