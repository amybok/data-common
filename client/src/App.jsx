import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layouts
import Main from "./layouts/main";

// Pages
import DataSetPage from "./pages/DatasetPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/pages",
        element: <DataSetPage />,
      },
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
