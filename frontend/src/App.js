import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from "./Login";
import { Registration } from "./Registration";
import { Home } from "./Home";
import Protected from "./Protected";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home/>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registration",
    element: <Registration/>,
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
