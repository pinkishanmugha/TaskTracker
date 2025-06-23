import {BrowserRouter,Routes,Route, Navigate} from "react-router-dom";

import './App.css'
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import TeamMemberDashboard from "./pages/TeamMemberDashboard";
import PrivateRoutes from "./utils/PrivateRoutes";
import RoleBasedRoutes from "./utils/RoleBasedRoutes";
import AdminSummary from "./components/AdminSummary";
import ProjectList from "./components/dashboard/project/ProjectList";
import AddProject from "./components/dashboard/project/AddProject";



function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to="/admin-dashboard"/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/admin-dashboard' element={
          <PrivateRoutes>
            <RoleBasedRoutes requiredRole={["admin"]}>
              <AdminDashboard/>
            </RoleBasedRoutes>  
          </PrivateRoutes>
        }>
          <Route index element={<AdminSummary/>}></Route> 
          <Route path="/admin-dashboard/project" element={<ProjectList/>}></Route>                                                                                                                                                  
          <Route path="/admin-dashboard/add-project" element={<AddProject/>}></Route>                                                                                                                                                  
                                                                                                                                                 
        </Route>
        <Route path='/teamMember-dashboard' element={<TeamMemberDashboard/>}></Route>
   
      </Routes>
    
    </BrowserRouter>
    
      
    
    </>
  )
}

export default App
