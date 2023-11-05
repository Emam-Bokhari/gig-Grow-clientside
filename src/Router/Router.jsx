import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from './../pages/Home/Home';
import AddJob from './../pages/AddJob/AddJob';
import MyPostedJobs from './../pages/MyPostedJobs/MyPostedJobs';
import BidRequest from './../pages/BidRequest/BidRequest';
import MyBids from './../pages/MyBids/MyBids';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/addJob",
                element: <AddJob />
            },
            {
                path: "/myPostedJobs",
                element: <MyPostedJobs />
            },
            {
                path: "/bidRequest",
                element: <BidRequest />
            },
            {
                path: "/myBids",
                element: <MyBids />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    }
])
export default Router