import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  AdminDashboard,
  ChangePassword,
  ForgetPassword,
  Login,
  ResetPassword,
  SuperAdminSignUp,
  UserManagement,
  SuperAdminCreateAdmin,
  AdminProfile,
  ViewAllAdmins,
  ViewAllUsers,
  LandingDashboard,
  Stack 
} from "./pages";
// import { AuthenticationBody } from './component';


function App(): JSX.Element {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingDashboard />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
          </Route>

          <Route path="/admin-dashboard" element={<AdminDashboard />}>
            <Route path="/admin-dashboard/profile" element={<AdminProfile />} />
            <Route
              path="/admin-dashboard/create_admin"
              element={<SuperAdminCreateAdmin />}
            />
            <Route
              path="/admin-dashboard/superadmin-signup"
              element={<SuperAdminSignUp />}
            />
            <Route 
            path="/admin-dashboard/stack" 
            element={< Stack />}
            />
            <Route
              path="/admin-dashboard/view-all-users"
              element={<ViewAllUsers />}
            />
            <Route
              path="/admin-dashboard/change-password"
              element={<ChangePassword />}
            />
            <Route
              path="/admin-dashboard/view-all-admins"
              element={<ViewAllAdmins />}
            />
            <Route path="/admin-dashboard/user" element={<UserManagement />} />
              <Route path="/admin-dashboard/change-password" element={<ChangePassword />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
