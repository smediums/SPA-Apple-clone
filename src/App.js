import { Route, Routes } from "react-router-dom";
import "./App.scss";
import {
  Home,
  Pages,
  Mac,
  Accessories,
  Airpods,
  Ipad,
  Iphone,
  Watch,
  TvAndHome,
  OnlyApple,
  Support,
  Store,
} from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home ribbonText="Shop early for best selection of holiday favorites. Shop now" />
          }
        />
        <Route path="/pages/*" element={<Pages />}>
          <Route path="store" element={<Store />} />
          <Route
            path="mac"
            element={
              <Mac ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
          <Route
            path="iPad"
            element={
              <Ipad ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
          <Route
            path="iPhone"
            element={
              <Iphone ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
          <Route
            path="watch"
            element={
              <Watch ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
          <Route
            path="airpods"
            element={
              <Airpods ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
          <Route
            path="tvAndHome"
            element={
              <TvAndHome ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
          <Route
            path="onlyApple"
            element={
              <OnlyApple ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
          <Route
            path="accessories"
            element={
              <Accessories ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
          <Route
            path="support"
            element={
              <Support ribbonText="Get your holiday gifts on time. See when to order" />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
