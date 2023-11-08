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
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/jobDetails/:id",
                loader: ({ params }) => fetch(`https://gig-grow-serverside.vercel.app/api/v1/${params.id}/job-details`,),
                element: <PrivateRoute> <JobDetails /></PrivateRoute>
            },
            {
                path: "/addJob",
                element: <PrivateRoute><AddJob /></PrivateRoute>
            },
            {
                path: "/myPostedJobs",
                element: <PrivateRoute><MyPostedJobs /></PrivateRoute>
            },
            {
                path: "/update/:id",
                loader: ({ params }) => fetch(`https://gig-grow-serverside.vercel.app/api/v1/${params.id}/job-details`),
                element: <PrivateRoute><Update /></PrivateRoute>
            },
            {
                path: "/bidRequest",
                element: <PrivateRoute><BidRequest /></PrivateRoute>
            },
            {
                path: "/myBids",
                element: <PrivateRoute><MyBids /></PrivateRoute>
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