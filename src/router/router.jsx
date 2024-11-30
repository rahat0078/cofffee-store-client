import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import UpdateCoffee from "../pages/UpdateCoffee";
import AddCoffee from "../pages/AddCoffee";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Users from "../components/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <div>error</div>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/coffee')
            },
            {
                path: "/add_coffee",
                element: <AddCoffee></AddCoffee>
            },
            {
                path: "/update_coffee/:id",
                element: <UpdateCoffee></UpdateCoffee>,
                loader: ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path:"/users",
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5000/users')
            
            }

        ]
    },
    
])

export default router;