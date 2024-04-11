import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



// Layouts
import Main from "./layouts/main";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />
  }
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;