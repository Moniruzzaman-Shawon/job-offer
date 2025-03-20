import {
  createBrowserRouter,

} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import HotJobs from "../pages/Home/HotJobs";
import Jobs from "../pages/Jobs/Jobs";
import JobApply from "../pages/JobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/AddJob/AddJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:4000/jobs/${params.id}`)
      },
      {
        path: '/jobs',
        element: <Jobs></Jobs>
        //loader: ({params}) => fetch('http://localhost:4000/jobs')
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
      },
      {
        path: '/myApplications',
        element: <PrivateRoute><MyApplications></MyApplications></PrivateRoute>
      },
      {
        path: '/addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/signin',
        element: <SignIn></SignIn>
      }
    ]
  },
]);

export default router;