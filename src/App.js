import Home from "routes/home";
import Login from "routes/login";
import Register from "routes/register";
import View from "routes/view";
import Dashboard from "routes/dashboard";
import Pastes from "components/Pastes";
import Issues from "components/Issues";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import DashboardStats from "components/DashboardStats";
import Users from "components/Users";
import Settings from "components/Settings";
import "./App.css";

export default function App() {
  return (
    <ChakraProvider height="100vh">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="view" element={<View />} />
          <Route exact path="dashboard" element={<Dashboard />}>
            <Route exact path="" element={<DashboardStats />} />
            <Route exact path="pastes" element={<Pastes />} />
            <Route exact path="issues" element={<Issues />} />
            <Route exact path="users" element={<Users />} />
            <Route exact path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}
