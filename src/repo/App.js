import React, { useState } from "react";
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Services from "./Services/Services";
import ThemeContext from "../context/themeContext";
import Footer from "./Footer/Footer";
import Coffee from "./Coffee/Coffee";
import Contact from "./Contact/Contact";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
      <Header />
      <Intro />
      <Services />
      <Coffee />
      <Contact />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
