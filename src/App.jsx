import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Section from "./Components/Section";
import BookingForm from "./Components/BookingForm";
import ConfirmationPage from "./Components/ConfirmationPage";
import Footer from "./Components/Footer";

import American from "./Images/american.jpg";
import Andalusian from "./Images/andalusian.jpg";
import Appaloosa from "./Images/appaloosa.jpg";
import Arabian from "./Images/arabian.jpg";
import Belgian from "./Images/belgian.jpg";
import Colt from "./Images/colt.jpg";
import Holsteiner from "./Images/holsteiner.jpg";
import Iberian from "./Images/iberian.jpg";
import Lusitano from "./Images/lusitano.jpg";
import Morgan from "./Images/morgan.jpg";
import Pasu_Fino from "./Images/pasu-fino.jpg";
import Percheron from "./Images/percheron.jpg";

const App = () => {
  const horses = [
    { name: "American Quarter Horse", image: American },
    { name: "Andalusian Horse", image: Andalusian },
    { name: "Appaloosa Horse", image: Appaloosa },
    { name: "Arabian Horse", image: Arabian },
    { name: "Belgian Horse", image: Belgian },
    { name: "Colt Horse", image: Colt },
    { name: "Holsteiner Horse", image: Holsteiner },
    { name: "Iberian Horse", image: Iberian },
    { name: "Lusitano Horse", image: Lusitano },
    { name: "Morgan Horse", image: Morgan },
    { name: "Pasu Fino Horse", image: Pasu_Fino },
    { name: "Percheron Horse", image: Percheron },
  ];

  return (
    <Router>
      <div className="max-w-screen min-h-screen overflow-auto bg-gradient-to-r from-amber-500 to-orange-500">
        <NavBar />
        <Header />
        <div className="py-10">
          <Routes>
            <Route exact path="/" element={<Section horses={horses} />} />
            <Route exact path="/booking/:horseName" element={<BookingForm />} />
            <React.Fragment>
              <Route
                exact
                path="/booking/:horseName/confirmation"
                element={<ConfirmationPage />}
              />
            </React.Fragment>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
