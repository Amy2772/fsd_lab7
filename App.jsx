import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Requests from "./pages/Requests";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          {/* Home page */}
          <Route path="/" element={<Home />} />

          {/* Existing CRUD page */}
          <Route path="/requests" element={<Requests />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;