import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import CreateOrder from './pages/create-order/CreateOrder';
import CreateDelivery from './pages/create-delivery/CreateDelivery';
import UserRequest from './pages/user-request/UserRequest';
import AllRequests from './pages/all-requests/AllRequests';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import CreateRequest from './pages/create-request/CreateRequest';
import AllRequestsDemo from './pages/all-requests-demo/AllRequestsDemo';

const App: React.FC = () => {
    return (
            <Routes>
                <Route path="/:id/home" element={<Home />} />
                <Route path="/:id/create" element={<CreateRequest />} />
                <Route path="/:id/create/order" element={<CreateOrder />} />
                <Route path="/:id/create/deliver" element={<CreateDelivery />} />
                <Route path="/:id/requests" element={<UserRequest />} />
                <Route path="/:id/all-requests" element={<AllRequests />} />
                <Route path="/all-requests" element={<AllRequestsDemo />} />
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
    );
};

export default App;
