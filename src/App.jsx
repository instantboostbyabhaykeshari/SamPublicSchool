import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import Admission from './components/navlinks/admission';
import Footer from "./components/Core/Footer.jsx";
import ContactPage from './components/navlinks/contact';  

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academics" element={<div>Academics Page</div>} />
              <Route path="/admissions" element={<Admission/>} />
              <Route path="/events" element={<div>Events Page</div>} />
              <Route path="/gallery" element={<div>Gallery Page</div>} />
              <Route path="/contact" element={<ContactPage/>} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;