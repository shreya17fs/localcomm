import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [users, setUsers] = useState([]);
  const [requests, setRequests] = useState([]);
  const [offers, setOffers] = useState([]);

   return (
     <Router>
       <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/signup" element={<Signup setUsers={setUsers} />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              users={users}
              requests={requests}
              offers={offers}
              setRequests={setRequests}
              setOffers={setOffers}
            />
          }
        /> 
        </Routes>
      <Footer />
     </Router>
   );
}

export default App;





