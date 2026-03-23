//UI ekata structure and logic provide karanna use karanawa
import React from "react";
import NavBar from "./components/NavBar";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import AllRooms from "./Pages/AllRooms";
import RoomDetails from "./Pages/RoomDetails";
import MyBookings from "./Pages/MyBookings";
import HotelCard from "./components/HotelCard";
import HotelReg from "./components/HotelReg"; 
import LayOut from "./Pages/HotelOwner/LayOut";
import DashBoard from "./Pages/HotelOwner/DashBoard";
import AddRoom from "./Pages/HotelOwner/AddRoom";
import ListRoom from "./Pages/HotelOwner/ListRoom";
import {Toaster} from "react-hot-toast";
import { useAppContext } from "./context/AppContext";

const App = () => {

  const location = useLocation();//URL path eka ganna use karanawa, 
  const isOwnerPath = location.pathname.includes("owner");
  const {showHotelReg} = useAppContext();//AppContext eke ara value tiken showHotelReg eka gatta

  return (
    <div className="min-h-screen flex flex-col"> 
        <Toaster />
      {showHotelReg && <HotelReg />}//showHotelReg true unoth hotel registration form eka display karanawa
      {!isOwnerPath && <NavBar />}//owner path eka naththam nav bar eka display karanawa
      <div className="flex-grow">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='rooms' element={<AllRooms />} />
          <Route path='rooms/:id' element={<RoomDetails />} />//id eka variable ekak wage use karanawa
          <Route path='my-bookings' element={<MyBookings />} />
          <Route path='/owner' element={<LayOut />}>//layout eka parent route ekak wage use karanawa
              <Route index element={<DashBoard />} />
              <Route path='add-room' element={<AddRoom />} />
              <Route path='list-room' element={<ListRoom />} />
          </Route>
        </Routes>
      </div>
      {!isOwnerPath && <Footer />}//owner path eka naththam footer eka display karanawa
    </div>
  )
}
export default App;