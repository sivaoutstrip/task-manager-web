import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Registrations from './pages/Registrations';
import SignIn from './pages/SignIn';
import Tasks from './pages/Tasks';
import ClientRoute from './pages/Routes/ClientRoute';
import OpenRoute from './pages/Routes/OpenRoute';
import EditTaskForm from './pages/Tasks/Edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <OpenRoute><Registrations /></OpenRoute>,
  },
  {
    path: "sign-in",
    element: <OpenRoute><SignIn /></OpenRoute>,
  },
  {
    children: [
      {
        path: "tasks",
        element: <ClientRoute><Tasks /></ClientRoute>,
      },
      {
        path: "tasks/:taskId/edit",
        element: <ClientRoute><EditTaskForm /></ClientRoute>,
      }
    ]
  },
]);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
