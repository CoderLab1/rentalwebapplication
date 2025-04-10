import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Nav/Navbar';
import Register from "./Nav/Register";
import Agents from "./Nav/Agents";
import Login from "./Nav/Login";
import { ToastContainer } from "react-toastify";
import Addproperties from "./Nav/AddProperties";
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';
import Page4 from './components/Page4';
import Page5 from './components/Page5';
import Page6 from './components/Page6';
import Page7 from './components/Page7';
import Page8 from './components/Page8';
import Page9 from './components/Page9';
import YourProperties from "./Nav/YourProperties";
import AvailableProperties from "./Nav/AvailableProperties";
import ProtectedRoute from "../src/components/ProtectedRoute";  // ✅ Import kiya
import { UserContext } from "./context/UserContext";
import Cart from "./Nav/Cart";
import Booking from "../src/components/Book"
import Commercial from "./extras/Commercial";
import Apartment from "./extras/Apartment";
import HouseStay from "./extras/HouseStay";
import Villa from "./extras/Villa";
import Warehouse from "./extras/Warehouse";
import ExploreMore from "./extras/ExploreMore";
import ScrollToTop from "./components/ScrollToTop";
import FeedBacks from "./Nav/FeedBacks";
import PropertyDetails from "./components/PropertyDetails";
import Privacy from "./extras/Privacy";
import TermAndCondition from "./extras/Term";

const Home = () => (
  <div>
    <Page1 />
    <Page2 />
    <Page3 />
    <Page4 />
    <Page5 />
    <Page6 />
    <Page7 />
    <Page8 />
  </div>
);


const App = () => {
  const { user, logoutUser } = useContext(UserContext);

  return (
    <Router>
      <ScrollToTop />
      <Navbar user={user} onLogout={logoutUser} />
      <ToastContainer />
      <div className="">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
          {/* ✅ Agar logged in hai toh register access nahi karega */}

          {/* 🔒 Protected Routes */}
          <Route path="/feedbacks" element={<FeedBacks />} />
          <Route path="/add-property" element={<ProtectedRoute><Addproperties /></ProtectedRoute>} />
          <Route path="/your-properties" element={<ProtectedRoute><YourProperties /></ProtectedRoute>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/book" element={< Booking />} />
          {/* 🔒 Protected Routes */}


          {/* extras */}
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/warehouse" element={<Warehouse />} />
          <Route path="/villa" element={<Villa />} />
          <Route path="/apartment" element={<Apartment />} />
          <Route path="/housestay" element={< HouseStay />} />
          <Route path="/details/:id" element={<PropertyDetails />} />
          <Route path="/exploremore" element={<ExploreMore />} />

          <Route path="/terms" element={<TermAndCondition />} />
          <Route path="/privacy" element={<Privacy />} />


          <Route path="/available-properties" element={<AvailableProperties />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Page9/>
    </Router>
  );
};

export default App;
