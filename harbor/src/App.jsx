// src/app.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';
import HarborHome from './pages/harborhome.jsx';
import Ongoingshipments from './pages/ongoingshipments.jsx';
import ConfirmOrder from './pages/confirmorder.jsx'; 
import ShippingHistory from './pages/shippinghistory.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/harborhome" element={<HarborHome />} />
        <Route path="*" element={<Navigate to="/harborhome" />} />
        <Route path="/" element={<HarborHome />} />
        <Route path="/ongoingshipments" element={<Ongoingshipments />} />
        <Route path="/confirmorder/:id" element={<ConfirmOrder />} /> 
        <Route path="/shippinghistory" element={<ShippingHistory />} />
      </Routes>
    </Router>
  );
};

export default App;
