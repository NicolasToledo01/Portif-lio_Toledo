// Components/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";
import iconsWhatsapp from "../../public/icons-whatsapp.png";
import iconsLinkedin from "../../public/icons-linkedin.png";
import iconsGmail from "../../public/icons-gmail.png";
import iconsGithub from "../../public/icons-github.png";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>
        <label className={styles.Nome}> &copy; Nicolas Toledo</label>
      </p>
      <div className={styles.container}>
        <h2 className={styles.h2}>Contatos</h2>
        <div className={styles.row}>
          <a
            href="mailto:nicolas01.toledo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.icone} src={iconsGmail} alt="gmail" />
          </a>
          <p className={styles.p}>nicolas01.toledo@gmail.com</p>
        </div>

        <div className={styles.row}>
          <a
            href="http://wa.me/5511987585642"
            target="_blank"
            rel="noopener noreferrer "
          >
            <img className={styles.icone} src={iconsWhatsapp} alt="whatsapp" />
          </a>
          <p className={styles.p}>+55 11 987585642</p>
        </div>
      </div>
      <div className={styles.container2}>
        <h2 className={styles.h2}>Redes Sociais</h2>

        <div className={styles.row}>
          <a
            href="https://www.linkedin.com/in/nicolas-toledo-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={styles.icone}
              src={iconsLinkedin}
              alt="linkedIn_PNG39"
            />
          </a>
          <p className={styles.p}>Nicolas Toledo</p>
        </div>

        <div className={styles.row}>
          <a
            href="//github.com/NicolasToledo01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.icone} src={iconsGithub} alt="GitHub_logo" />
          </a>
          <p className={styles.p}>NicolasToledo01 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
