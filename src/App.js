
import { BrowserRouter, Routes, Route, } from "react-router-dom";


import Signup from "./pages/Signup/Signup"
import Login from "./pages/Login/Login"
import Loader from "./components/UI/Loader";
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./components/DashboardComponents/DashboardMain/DashboardMain";
import UserManagment from "./components/DashboardComponents/User Managment/UserManagment"
import VehicleManagment from "./components/DashboardComponents/Vehicle Managment/VehicleManagment"
import DeviceManagment from "./components/DashboardComponents/Device Managment/DeviceManagment"
import DriverManagment from "./components/DashboardComponents/DriverManagment/DriverManagment"
import MaintenanceScheduling from "./components/DashboardComponents/MaintenanceScheduling/MaintenanceScheduling"
import FuelManagment from "./components/DashboardComponents/FuelManagment/FuelManagment"
import Setting from "./components/DashboardComponents/Setting/Setting"
import History from "./components/DashboardComponents/MaintenanceScheduling/History";
import Navbar from "./components/LayoutComponents/Navbar/Navbar";
import DashboardMain from "./components/DashboardComponents/DashboardMain/DashboardMain";
import TripManagment from "./components/DashboardComponents/Trip Managment/TripManagment";

import AddUser from "./components/DashboardComponents/User Managment/AddUser"
import AddVehicle from "./components/DashboardComponents/Vehicle Managment/AddVehicle";
import AddDevices from "./components/DashboardComponents/Device Managment/AddDevices";
import AddDriver from "./components/DashboardComponents/DriverManagment/AddDriver";
import AddTrip from "./components/DashboardComponents/Trip Managment/AddTrip";

import Chat from "./components/DashboardComponents/Chat/Chat";

function App() {

  return (
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
         <Route path="*" element={<Loader />} /> 

        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="dashboard" element={<Dashboard />} /> 
          <Route path="dashboardmain" element={<DashboardMain />} />
           <Route path="user-management" element={<UserManagment />} />
          <Route path="vehicle-management" element={<VehicleManagment />} />
          <Route path="device-management" element={<DeviceManagment />} />
          <Route path="driver-management" element={<DriverManagment />} /> 
          <Route path="maintenance-scheduling" element={<MaintenanceScheduling />} />
          <Route path="fuel-management" element={<FuelManagment />} />
          <Route path="trip-management" element={<TripManagment />} />
          <Route path="setting" element={<Setting/>} />
          <Route path="history" element={<History />} />
          {/* <Route path="add-user" element={<AddUser />} />  */}
          
          <Route path="user-management/add-user" element={<AddUser />} />
          <Route path="vehicle-management/add-vehicle" element={<AddVehicle />} />
          <Route path="device-management/add-device" element={<AddDevices />} />
          <Route path="driver-management/add-driver" element={<AddDriver />} /> 
          <Route path="trip-management/add-trip" element={<AddTrip />} />

          <Route path="chat" element={<Chat />} />
  
        </Route>

        
 <Route path="/dashboard/user-management/add-user" element={<AddUser />} >
 <Route path="dashboard" element={<Dashboard />} /> 
 <Route path="user-management" element={<UserManagment />} />
 <Route path="add-user" element={<AddUser />} />
 </Route>
     

        {/* <Route path="/dashboardmain" element={<DashboardMain />} />
        <Route path="/user-management" element={<UserManagment />} />
        <Route path="/vehicle-management" element={<VehicleManagment />} />
          <Route path="/device-management" element={<DeviceManagment />} />
          <Route path="/driver-management" element={<DriverManagment />} /> 
        <Route path="/maintenance-scheduling" element={<MaintenanceScheduling />} />
          <Route path="/fuel-management" element={<FuelManagment />} />
          <Route path="/trip-management" element={<TripManagment />} />
          <Route path="/setting" element={<Setting/>} />
          <Route path="/history" element={<History />} /> */}
         


      </Routes>
    </BrowserRouter>
  );
}

export default App;