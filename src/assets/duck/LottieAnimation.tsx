import React from "react";
import Lottie from "react-lottie"; // Importa a biblioteca Lottie
import duck from "./rubber-duck .json"; // Importa a animação Lottie no formato JSON
import styles from "../../Pages/AboutMe.module.css";
import duckSound from "./duck.mp3"; // Importando da mesma pasta

const LottieAnimation: React.FC = () => {
  const defaultOptions = {
    loop: true, // Faz a animação repetir
    autoplay: true, // Faz a animação iniciar automaticamente
    animationData: duck, // Dados da animação
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice", // Preserva o aspecto da animação
    },
  };
  const playSound = () => {
    const audio = new Audio(duckSound); // Cria uma nova instância de audio
    audio.play(); // Toca o som
  };

  return (
    <div
      className={`${styles.animationContainer} ${styles.responsiveAnimation}`}
      onClick={playSound}
      role="button"
      tabIndex={0}
    >
      {" "}
      {/* Adiciona um contêiner */}
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default LottieAnimation;
