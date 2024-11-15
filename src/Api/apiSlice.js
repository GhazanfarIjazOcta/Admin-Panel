// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getTokenFromLocalStorage } from "./getTokenFromLocalStorage";

const apiUrl = process.env.REACT_APP_API_URL;
console.log("API URL:", apiUrl);
console.log("Environment Variables:", process.env);

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: `${apiUrl}/api`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("authToken");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ["AdminDashboard", "TripManagement"], // Define tag types here
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
    loginUser: builder.mutation({
      query: (loginData) => ({
        url: "/login",
        method: "POST",
        body: loginData,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          const token = data.token;
          if (token) {
            localStorage.setItem("authToken", token);
            dispatch(apiSlice.util.resetApiState());
          }
        } catch (error) {
          console.error("Error setting token after login:", error);
        }
      },
    }),
    addAdmin: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["AdminDashboard"], // Invalidate to refresh getAdminDashboard query
    }),
    addUser: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["AdminDashboard"], // Same here if addUser affects AdminDashboard data
    }),
    addVehicle: builder.mutation({
      query: (vehicleData) => ({
        url: "/admin/addVehicles",
        method: "POST",
        body: vehicleData,
      }),
      invalidatesTags: ["AdminDashboard"],
    }),
    addDevice: builder.mutation({
      query: (deviceData) => ({
        url: "/admin/devices",
        method: "POST",
        body: deviceData,
      }),
      invalidatesTags: ["AdminDashboard"],
    }),
    addDriver: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["AdminDashboard"],
    }),
    addTrip: builder.mutation({
      query: (tripData) => ({
        url: "/admin/create-trip",
        method: "POST",
        body: tripData,
      }),
      invalidatesTags: ["TripManagement"], // Refresh trip management data when a trip is added
    }),
    getAdminDashboard: builder.query({
      query: () => "/admin/admin-dashboard",
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),
    getTripManagementDashboard: builder.query({
      query: () => "/admin/trip-management-dashboard",
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["TripManagement"], // Provide tag so it can be invalidated
    }),
    getTripManagementSearchDashboard: builder.query({
      query: ({ search = "", status = "" }) => {
        const params = new URLSearchParams();        
        // Append search parameter if provided
        if (search) params.append("search", search);           
        // Append status parameter if provided
        if (status) params.append("status", status);    
        // Return the API endpoint with query parameters
        return `/admin/get-trips?${params.toString()}`;
      },
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["TripManagement"], // Provide tag so it can be invalidated
    }),
    getUserManagementDashboard: builder.query({
      query: () => "/admin/user-management-dashboard",
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),

    getUserManagementSearchDashboard: builder.query({
      query: ({ search = "", role = "", status = "" }) => {
        const params = new URLSearchParams();
        
        // Append search parameter if provided
        if (search) params.append("search", search);
        
        // Append role parameter if provided
        if (role) params.append("role", role);
        
        // Append status parameter if provided
        if (status) params.append("status", status);
    
        // Return the API endpoint with query parameters
        return `/admin/usersByOrganization?${params.toString()}`;
      },
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag for invalidation
    }),
    
    getVehicleManagementDashboard: builder.query({
      query: () => "/admin/vehicle-management-dashboard",
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),
    getVehicleManagementSearchDashboard: builder.query({
      query: ({ search = "",  status = "" }) => {
        const params = new URLSearchParams();
        
        // Append search parameter if provided
        if (search) params.append("search", search);
        
         // Append status parameter if provided
        if (status) params.append("status", status);
    
        // Return the API endpoint with query parameters
        return `/admin/vehiclesByOrganization?${params.toString()}`;
      },
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),
    
    getDeviceManagementDashboard: builder.query({
      query: () => "/admin/device-management-dashboard",
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),
    getDeviceManagementSearchDashboard: builder.query({
      query: ({ search = "h",  status = "" }) => {
        const params = new URLSearchParams();
        
        // Append search parameter if provided
        if (search) params.append("search", search);
        
         // Append status parameter if provided
        if (status) params.append("status", status);
    
        // Return the API endpoint with query parameters
        return `/admin/get-devices?${params.toString()}`;
      },
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),
    getDriverManagementDashboard: builder.query({
      query: () => "/admin/driver-management-dashboard",
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),
    getDriverManagementSearchDashboard: builder.query({
      query: ({ search = "h",  status = "" }) => {
        const params = new URLSearchParams();
        
        // Append search parameter if provided
        if (search) params.append("search", search);
        
         // Append status parameter if provided
        if (status) params.append("status", status);
    
        // Return the API endpoint with query parameters
        return `/admin/get-drivers?${params.toString()}`;
      },
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),
    deleteCustomer: builder.mutation({
      query: (customerId) => ({
        url: `/admin/deleteCustomer`,
        method: "DELETE",
        body: { customerId },
      }),
      invalidatesTags: ["AdminDashboard"],
    }),
    deleteAdmin: builder.mutation({
      query: (adminId) => ({
        url: `/admin/deleteAdmin`,
        method: "DELETE",
        body: { adminId },
      }),
      invalidatesTags: ["AdminDashboard"],
    }),
    deleteDriver: builder.mutation({
      query: (driverId) => ({
        url: `/admin/deleteDriver`,
        method: "DELETE",
        body: { driverId },
      }),
      invalidatesTags: ["AdminDashboard"],
    }),
    updateDriver: builder.mutation({
      query: (driverData) => ({
        url: `/updateUser`,
        method: "PATCH",
        body: driverData,
      }),
      invalidatesTags: ["AdminDashboard"], // Invalidate to refresh relevant data
    }),
    deleteVehicle: builder.mutation({
      query: (vehicleId) => ({
        url: `/admin/vehicles/deleteVehicle`,
        method: "DELETE",
        body: { vehicleId },
      }),
      invalidatesTags: ["AdminDashboard"],
    }),
    updateVehicle: builder.mutation({
      query: (vehicleData) => ({
        url: `/admin/vehicles/updateVehicle`,
        method: "PUT",
        body: vehicleData,
      }),
      invalidatesTags: ["AdminDashboard"], // Invalidate to refresh relevant data
    }),
    deleteDevice: builder.mutation({
      query: (deviceId) => ({
        url: `/admin/deleteDevice`,
        method: "DELETE",
        body: { deviceId },
      }),
      invalidatesTags: ["AdminDashboard"],
    }),
    updateDevice: builder.mutation({
      query: (deviceData) => ({
        url: `/admin/updateDevice`,
        method: "PATCH",
        body: deviceData,
      }),
      invalidatesTags: ["AdminDashboard"], // Invalidate to refresh relevant data
    }),
   
    
    deleteTrip: builder.mutation({
      query: (tripId) => ({
        url: `/admin/deleteTrip`,
        method: "DELETE",
        body: { tripId },
      }),
      invalidatesTags: ["TripManagement"],
    }),
    updateTrip: builder.mutation({
      query: (tripData) => ({
        url: `/admin/updateTrip`,
        method: "PATCH",
        body: tripData,
      }),
      invalidatesTags: ["TripManagement"], // Invalidate to refresh relevant data
    }),
    getUserInfo: builder.query({
      query: () => "/userInfo",
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),
    updateUserInfo: builder.mutation({
      query: (tripData) => ({
        url: `/updateUser`,
        method: "PATCH",
        body: tripData,
      }),
      invalidatesTags: ["AdminDashboard"], // Invalidate to refresh relevant data
    }),

    
    getMaintainanceDashboard: builder.query({
      query: () => "/admin/in-maintenance",
      refetchOnReconnect: true,
      refetchOnFocus: true,
      providesTags: ["AdminDashboard"], // Provide tag so it can be invalidated
    }),

    addMaintainance: builder.mutation({
      query: (maintainanceData) => ({
        url: "/register",
        method: "POST",
        body: maintainanceData,
      }),
      invalidatesTags: ["AdminDashboard"],
    }),

  }),
});



// Export hooks
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useAddAdminMutation,
  useAddUserMutation,
  useAddVehicleMutation,
  useAddDeviceMutation,
  useAddDriverMutation,
  useAddTripMutation,
  useGetAdminDashboardQuery,

  useGetTripManagementDashboardQuery,
  useGetTripManagementSearchDashboardQuery,

  useGetUserManagementDashboardQuery, 
  useGetVehicleManagementDashboardQuery, 

  useGetDeviceManagementDashboardQuery,
  useGetDeviceManagementSearchDashboardQuery,

  useGetDriverManagementDashboardQuery,
  useGetDriverManagementSearchDashboardQuery,

  useGetUserManagementSearchDashboardQuery,
  useGetVehicleManagementSearchDashboardQuery,

  useDeleteCustomerMutation,
  useDeleteAdminMutation,
  
  useDeleteDriverMutation,

  useUpdateDriverMutation,

  useDeleteVehicleMutation,
  useUpdateVehicleMutation,

  useDeleteDeviceMutation,
  useUpdateDeviceMutation,

  useDeleteTripMutation,
  useUpdateTripMutation,




  useGetUserInfoQuery,
  useUpdateUserInfoMutation,


  useAddMaintainanceMutation,
  useGetMaintainanceDashboardQuery, 


} = apiSlice;

export default apiSlice;
