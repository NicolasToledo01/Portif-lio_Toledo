import { Link } from "react-scroll"; // Usando react-scroll para navegação suave
import styles from "./Navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.lineIcons}>
        <div className={styles.lineNav}>
          <img className={styles.icone} src="seta-esquerda.png" alt="" />
          <label className={styles.Nome}>Nicolas Toledo</label>{" "}
          <img className={styles.icone} src="barra-divisao.png" alt="" />{" "}
          <img className={styles.icone} src="seta-direita .png" alt="" />
        </div>
        <div className={styles.columIcons}>
          <a
            href="http://wa.me/5511987585642"
            target="_blank"
            rel="noopener noreferrer "
          >
            <img className={styles.icons} src="icons-whatsapp.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-toledo-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.icons} src="icons-linkedin.png" alt="" />
          </a>
          <a
            href="mailto:nicolas01.toledo@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.icons} src="icons-gmail.png" alt="" />
          </a>
          <a
            href="//github.com/NicolasToledo01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className={styles.icons} src="icons-github.png" alt="" />
          </a>
        </div>
      </div>

      <ul className={styles.ul}>
        <li>
          <Link to="home" smooth={true} duration={1000}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="aboutme" smooth={true} duration={1000}>
            Quem sou
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={1000}>
            Habilidades
          </Link>
        </li>
        <li>
          <Link to="projeto" smooth={true} duration={1000}>
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
