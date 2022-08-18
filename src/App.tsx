import { Routes, Route } from "react-router-dom"
import { AdminDashboard, ChangePassword, ForgetPassword,ResetPassword, SuperAdminSignUp } from "./pages"
import { AuthenticationBody } from './component';


function App(): JSX.Element {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/superadmin-signup" element={<SuperAdminSignUp />} />
        <Route path="/login" element={<AuthenticationBody />} />
      </Routes>
    </div>
  );
}

export default App;