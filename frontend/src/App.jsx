import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Doctors from "./pages/Doctors";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <AboutUs />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/doctors",
          element: <Doctors />,
        },
        {
          path: "/doctors/:speciality",
          element: <Doctors />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/my-profile",
          element: <ProtectedRoute><MyProfile /></ProtectedRoute>,
        },
        {
          path: "/my-appointments",
          element: <ProtectedRoute><MyAppointments /></ProtectedRoute>,
        },
        {
          path: "/appointment/:docId",
          element: <ProtectedRoute><Appointment /></ProtectedRoute>,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
