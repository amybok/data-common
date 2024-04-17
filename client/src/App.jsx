import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import Main from "./layouts/main";
import LoginPage from "./pages/LoginPage";

// Pages
import DataSetPage from "./pages/DatasetPage";
import ViewDataPage from "./pages/ViewDataPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        path: "/login",
        element: <LoginPage />,
      },

      {
        path: "/dataset",
        element: <DataSetPage />,
      },

      {
        path: "/view/:id",
        element: <ViewDataPage/>
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
