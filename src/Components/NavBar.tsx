import { Link } from "react-scroll"; // Usando react-scroll para navegação suave
import styles from "./Navbar.module.css";
import setaEsquerda from "../../public/seta-esquerda.png";
import barraDivisao from "../../public/barra-divisao.png";
import setaDireita from "../../public/seta-direita .png";
import iconsWhatsapp from "../../public/icons-whatsapp.png";
import iconsLinkedin from "../../public/icons-linkedin.png";
import iconsGmail from "../../public/icons-gmail.png";
import iconsGithub from "../../public/icons-github.png";

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.lineIcons}>
        <div className={styles.lineNav}>
          <img className={styles.icone} src={setaEsquerda} alt="" />
          <label className={styles.Nome}>Nicolas Toledo</label>{" "}
          <img className={styles.icone} src={barraDivisao} alt="" />{" "}
          <img className={styles.icone} src={setaDireita} alt="" />
        </div>
        <div className={styles.columIcons}>
          <img className={styles.icons} src={iconsWhatsapp} alt="" />
          <img className={styles.icons} src={iconsLinkedin} alt="" />
          <img className={styles.icons} src={iconsGmail} alt="" />
          <img className={styles.icons} src={iconsGithub} alt="" />
        </div>
      </div>

      <ul className={styles.ul}>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Menu
          </Link>
        </li>
        <li>
          <Link to="aboutme" smooth={true} duration={500}>
            Quem sou
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projeto" smooth={true} duration={500}>
            Projetos
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
