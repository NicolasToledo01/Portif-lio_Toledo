// Components/Footer.tsx
import React from "react";
import style from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={style.footer}>
      <p>
        <label className={style.Nome}> &copy; Nicolas Toledo</label>
      </p>
      <div className={style.container}>
        <h2 className={style.h2}>Contatos</h2>
        <div className={style.row}>
          <a
            href="mailto:nicolas01.toledo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={style.icone} src="icons-gmail.png" alt="gmail" />
          </a>
          <p className={style.p}>nicolas01.toledo@gmail.com</p>
        </div>

        <div className={style.row}>
          <a
            href="http://wa.me/5511987585642"
            target="_blank"
            rel="noopener noreferrer "
          >
            <img
              className={style.icone}
              src="icons-whatsapp.png"
              alt="whatsapp"
            />
          </a>
          <p className={style.p}>+55 11 987585642</p>
        </div>
      </div>
      <div className={style.container2}>
        <h2 className={style.h2}>Redes Sociais</h2>

        <div className={style.row}>
          <a
            href="https://www.linkedin.com/in/nicolas-toledo-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={style.icone}
              src="icons-linkedin.png"
              alt="linkedIn_PNG39"
            />
          </a>
          <p className={style.p}>Nicolas Toledo</p>
        </div>

        <div className={style.row}>
          <a
            href="//github.com/NicolasToledo01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className={style.icone}
              src="icons-github.png"
              alt="GitHub_logo"
            />
          </a>
          <p className={style.p}>NicolasToledo01 </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
