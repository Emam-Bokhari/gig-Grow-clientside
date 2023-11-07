import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from './../pages/Home/Home';
import AddJob from './../pages/AddJob/AddJob';
import MyPostedJobs from './../pages/MyPostedJobs/MyPostedJobs';
import BidRequest from './../pages/BidRequest/BidRequest';
import MyBids from './../pages/MyBids/MyBids';
import Login from './../pages/Login/Login';
import Register from './../pages/Register/Register';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import JobDetails from "../pages/Home/JobDetails";
import Update from "../pages/MyPostedJobs/Update/Update";

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
                path: "/jobDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/api/v1/${params.id}/job-details`),
                element: <JobDetails />
            },
            {
                path: "/addJob",
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: "/myPostedJobs",
                element: <MyPostedJobs />
            },
            {
                path: "/update/:id",
                loader: ({ params }) => fetch(`http://localhost:3000/api/v1/${params.id}/job-details`),
                element: <Update />
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