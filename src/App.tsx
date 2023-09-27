import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "@/routes";
import { useState } from "react";
const router = createBrowserRouter(routes);
const App = () => {
  const [test, setTest] = useState();
  return <RouterProvider router={router} />;
};
export default App;
