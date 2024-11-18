import { BrowserRouter, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Loader from "./components/UI/Loader";
import Dashboard from "./pages/Dashboard/Dashboard";
import Main from "./components/DashboardComponents/DashboardMain/DashboardMain";
import UserManagment from "./components/DashboardComponents/User Managment/UserManagment";
import VehicleManagment from "./components/DashboardComponents/Vehicle Managment/VehicleManagment";
import DeviceManagment from "./components/DashboardComponents/Device Managment/DeviceManagment";
import DriverManagment from "./components/DashboardComponents/DriverManagment/DriverManagment";
import MaintenanceScheduling from "./components/DashboardComponents/MaintenanceScheduling/MaintenanceScheduling";
import FuelManagment from "./components/DashboardComponents/FuelManagment/FuelManagment";
import Setting from "./components/DashboardComponents/Setting/Setting";
import History from "./components/DashboardComponents/MaintenanceScheduling/History";

import DashboardMain from "./components/DashboardComponents/DashboardMain/DashboardMain";
import TripManagment from "./components/DashboardComponents/Trip Managment/TripManagment";

import AddUser from "./components/DashboardComponents/User Managment/AddUser";
import AddVehicle from "./components/DashboardComponents/Vehicle Managment/AddVehicle";
import AddDevices from "./components/DashboardComponents/Device Managment/AddDevices";
import AddDriver from "./components/DashboardComponents/DriverManagment/AddDriver";
import AddTrip from "./components/DashboardComponents/Trip Managment/AddTrip";
import AddMaintenence from "./components/DashboardComponents/MaintenanceScheduling/AddMaintenance";


import Chat from "./components/DashboardComponents/Chat/Chat";
import { AuthProvider } from "./Authentication/AuthContext";
import ProtectedRoute from "./Authentication/ProtectedRoutes";

import CustomerDashboardMain from "./components/CustomerDashboardComponents/DashboardMain/CustomerDashboardMain";

import { Provider } from "react-redux"; // Import Provider from react-redux
import store from "./Api/store";

import CustomerChat from "./components/CustomerDashboardComponents/CustomerChat/Chat";
import CustomerFuelManagment from "./components/CustomerDashboardComponents/FuelManagment/FuelManagment";
import CustomerSetting from "./components/CustomerDashboardComponents/Setting/Setting";
import AddFuel from "./components/DashboardComponents/FuelManagment/AddFuel";


function App() {
  return (
    <Provider store={store}>
      {" "}
      {/* Wrap with Provider and pass store */}
      <AuthProvider>
        <BrowserRouter>
          {/* <Navbar/> */}
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Loader />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            >
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="dashboardmain" element={<DashboardMain />} />
              <Route path="user-management" element={<UserManagment />} />
              <Route path="vehicle-management" element={<VehicleManagment />} />
              <Route path="device-management" element={<DeviceManagment />} />
              <Route path="driver-management" element={<DriverManagment />} />
              <Route
                path="maintenance-scheduling"
                element={<MaintenanceScheduling />}
              />
              <Route path="fuel-management" element={<FuelManagment />} />
              <Route path="trip-management" element={<TripManagment />} />
              <Route path="setting" element={<Setting />} />
              <Route path="history" element={<History />} />

              <Route path="customer-fuel-management" element={<CustomerFuelManagment />} />
              <Route path="customer-setting" element={<CustomerSetting />} />
              {/* <Route path="add-user" element={<AddUser />} />  */}

              <Route path="user-management/add-user" element={<AddUser />} />
              <Route
                path="vehicle-management/add-vehicle"
                element={<AddVehicle />}
              />
              <Route
                path="device-management/add-device"
                element={<AddDevices />}
              />
              <Route
                path="driver-management/add-driver"
                element={<AddDriver />}
              />

              <Route
                path="maintenance-scheduling/add-maintenence"
                element={<AddFuel />}
              />

              <Route
                path="fuel-management/add-fuel"
                element={<AddFuel />}
              />


              <Route path="trip-management/add-trip" element={<AddTrip />} />

              <Route path="chat" element={<Chat />} />

              <Route path="customerchat" element={<CustomerChat />} />
              

              <Route
                path="customerdashboardmain"
                element={<CustomerDashboardMain />}
              />


            </Route>

            <Route
              path="/dashboard/user-management/add-user"
              element={<AddUser />}
            >
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
      </AuthProvider>
    </Provider>
  );
}

export default App;
