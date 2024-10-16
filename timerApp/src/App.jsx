import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SetTimer from "./components/setTimer/SetTimer";

const router = createBrowserRouter([
  { path: "/", element: <div /> },
  { path: "/SetTimer", element: <SetTimer /> },
  /* { path: "/contact", element: <Contact /> },
  { path: "/services", element: <Services /> },
  { path: "/blog", element: <Blog /> },
  { path: "/profile", element: <Profile /> }, */
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
