import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SetTimer from "./components/setTimer/SetTimer";
import Loading from "./components/loading/Loading";
import "./globalStyles.css";

const router = createBrowserRouter([
  { path: "/", element: <div /> },
  { path: "/SetTimer", element: <SetTimer /> },
  { path: "/Loading", element: <Loading /> },
  /* { path: "/alarmvy", element: <alarmvy /> },
  { path: "/analogTimer", element: <analogTimer /> },
  { path: "/digitalTimer", element: <digitalTimer /> },
  { path: "/textTimer", element: <textTimer /> }, */
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
