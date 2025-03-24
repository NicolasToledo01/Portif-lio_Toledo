import React from "react";
import styles from "./AboutMe.module.css";
import LottieAnimation from "../assets/duck/LottieAnimation"; // Certifique-se de que o caminho está correto

const AboutMe: React.FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.sobre}>
          <h1>Sobre Mim</h1>
        </div>
        <div className={styles.content}>
          <div className={styles.card}>
            <p>
              Muito prazer, meu nome é Nicolas Toledo, sou Desenvolvedor
              Front-end apaixonado por criar experiências inovadoras na web.
              Sempre busco unir estética e funcionalidade em meus projetos.
            </p>
            <p>
              Além de programar, amo praticar exercícios físicos e estar sempre
              em forma, então se algum dia nos encontrarmos em alguma equipe,
              sinta-se à vontade para conversar sobre!
            </p>
            <p>
              Uma curiosidade sobre mim é que tenho um pet de estimação um pouco
              peculiar , e esse animal é uma pata, chamada Selene. A companhia é
              muito alegre! Mas me dá muito trabalho.&#x1F604;
            </p>

            <p>
              Atualmente, trabalho em projetos que vão desde aplicações web
              dinâmicas até sites responsivos que priorizam a usabilidade e
              interatividade. Além de programador, atuo também como bartender.
            </p>
            <p>
              Sinta-se à vontade para me procurar e discutir projetos
              interessantes ou um café virtual!
            </p>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <LottieAnimation />
      </div>
    </div>
  );
};

export default AboutMe;
