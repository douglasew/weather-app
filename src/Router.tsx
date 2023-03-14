import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/About";
import SearchPage from "./pages/Search";
import WeatherPage from "./pages/Weather";

const router = createBrowserRouter([
  {
    path: "/:city?",
    element: <WeatherPage />,
  },
  {
    path: "search",
    element: <SearchPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
]);

export default router;
