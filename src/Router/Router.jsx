import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Errorpage from "../Component/Errorpage/Errorpage";
import Home from "../Pages/Home";
import Favorites from "../Pages/Favorites";
import Login from "../Pages/Login";


const AllRouter = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout></MainLayout>, 
        errorElement: <Errorpage></Errorpage> , 
        children: [
            {
                path: '/', 
                element: <Home></Home>
            }, 
            {
                path: '/favorites', 
                element: <Favorites></Favorites>
            }, 
            {
                path: '/login', 
                element: <Login></Login>
            }
        ]
    }
])

export default AllRouter; 