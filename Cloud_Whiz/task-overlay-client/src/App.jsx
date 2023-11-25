import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import Loader from "./components/Loader";
import { Toaster } from "react-hot-toast";

const Home = lazy(() => import("./pages/Home"));
const Settings = lazy(() => import("./pages/Settings"));

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/settings"
            element={
              <Suspense fallback={<Loader />}>
                <Settings />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;
