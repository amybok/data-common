import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



// Layouts
import Main from "./layouts/main";
import LoginPage from "./pages/LoginPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <LoginPage/>
      }
    ]
  }
]);

function App() {
  return <div className="App">
    <RouterProvider router={router} />
  </div>;
}

export default App;