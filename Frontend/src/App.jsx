import React from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import CatogorieInfo from "./Components/Catagories_info/CatogorieInfo";
import Form from "./Components/Form/Form";
function App() {
  return (
    <div className="main">
      <Navbar />
      <section>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Categories/:cat_name" element={<CatogorieInfo />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
}

export default App;
