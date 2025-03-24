import React from "react";
import NavBar from "./Components/NavBar";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import Projeto from "./Pages/Projeto";
import style from "./App.module.css";
import Footer from "./Components/Footer";

const App: React.FC = () => {
  return (
    <div className={style.container}>
      <NavBar />

      {/* Renderização das seções diretamente */}
      <section id="home">
        <Home />
      </section>

      <section id="aboutme">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projeto">
        <Projeto />
      </section>

      <Footer />
    </div>
  );
};

export default App;
