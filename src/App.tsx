import { createContext } from "react";
import { RouterProvider } from "react-router-dom";

import router from "./Router";

export const ThemeContext = createContext(null);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
