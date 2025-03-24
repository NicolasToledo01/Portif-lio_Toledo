import { useNavigate } from "react-router-dom";
import style from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate(); // Obtenha a função de navegação

  function navegar() {
    navigate("/Contatos");
  }

  return (
    <div className={style.main}>
      <div className={style.container}>
        <div className={style.divIcones}>
          <div>
            <a
              href="https://www.linkedin.com/in/nicolas-toledo-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.icone}
                src="icons-linkedin.png"
                alt="linkedin"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/nicolas-toledo-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className={style.icone}
                src="icons-github.png"
                alt="GitHub"
              />
            </a>
          </div>
        </div>
        <div>
          <h1>Hello World, I'm Nicolas Toledo </h1>
          <h2 className={style.p}>Frontend Developer</h2>
          <div className={style.divParagrafos}>
            <p>
              Desenvolvedor Júnior apaixonado por transformar ideias em soluções
              funcionais.
            </p>
            <p>
              Sempre priorizando a experiência do usuário e Projetos com
              exelencia,
            </p>
            <p className={style.p}>
              inovação e criatividade na criação de aplicações interativas e
              responsivas.
            </p>
            <p>No meu portfólio, você encontrará uma seleção de projetos que</p>
            <p>
              demonstram minhas capacidades, um pouco sobre minhas habilidades e
              deixo brevemente
            </p>
            <p className={style.p}>trechos sobre minha vida.</p>
            <p>Vamos transformar suas ideias em realidade!</p>
          </div>
        </div>
        <div className={style.menCenter}></div>
      </div>
    </div>
  );
};

export default Home;
