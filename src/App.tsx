import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home";
import CreateOrder from "./pages/create-order/CreateOrder";
import CreateDelivery from "./pages/create-delivery/CreateDelivery";
import UserRequest from "./pages/user-request/UserRequest";
import AllRequests from "./pages/all-requests/AllRequests";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/:id/home" element={<Home />} />
                <Route path="/:id/create/order" element={<CreateOrder />} />
                <Route path="/:id/create/deliver" element={<CreateDelivery />} />
                <Route path="/:id/requests" element={<UserRequest />} />
                <Route path="/all-requests" element={<AllRequests />} />
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
