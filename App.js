import "./App.css";
import Home from "./Home";
import Signin from "./Signin";
import Signup from "./Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./NotFound";
import Contact from "./Contact";
import Cart from "./Cart";
import { Navbar } from "./Navbar";
import "./Navbar.css"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/cart", element: <Cart /> },
        {  path: "/signin", element: <Signin/>},
       { path:"/signup", element:<Signup/>}
      
    ],
  },
]);
 return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
