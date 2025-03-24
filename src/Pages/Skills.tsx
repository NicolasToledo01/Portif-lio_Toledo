import React, { useState } from "react";
import style from "./Skills.module.css";
import mongodb from "../../public/icons-mongo-db-.png";
import nodejs from "../../public/icons-nodejs.png";
import vuejs from "../../public/icons-vue.js.png";
import figma from "../../public/figma.png";
import typescript from "../../public/typescript.png";
import react from "../../public/react.logo.png";
import html from "../../public/icons-html.png";
import css from "../../public/icons8-css3-75.png";
import git from "../../public/git.logo.webp";
import js from "../../public/Js.logo.png";
import github from "../../public/GitHub_logo.png";

interface Icons {
  html: boolean;
  css: boolean;
  git: boolean;
  js: boolean;
  react: boolean;
  github: boolean;
  type: boolean;
  figma: boolean;
  vue: boolean;
  mongo: boolean;
  node: boolean;
}

const Skills = () => {
  // Define o estado para controlar a visibilidade do conteúdo
  const [contentVisible, setContentVisible] = useState({
    html: false,
    css: false,
    git: false,
    js: false,
    react: false,
    github: false,
    type: false,
    figma: false,
    vue: false,
    mongo: false,
    node: false,
  });

  // Função para alternar a visibilidade
  // Função para alternar a visibilidade
  const toggleContent = (skill: keyof Icons) => {
    // Verifica se o skill já está visível
    const isCurrentlyVisible = contentVisible[skill];

    // Se estiver visível, desativa
    if (isCurrentlyVisible) {
      setContentVisible({
        html: false,
        css: false,
        git: false,
        js: false,
        react: false,
        github: false,
        type: false,
        figma: false,
        vue: false,
        mongo: false,
        node: false,
      });
    } else {
      // Se não estiver visível, ativa apenas o skill clicado
      setContentVisible({
        html: skill === "html",
        css: skill === "css",
        git: skill === "git",
        js: skill === "js",
        react: skill === "react",
        github: skill === "github",
        type: skill === "type",
        figma: skill === "figma",
        vue: skill === "vue",
        mongo: skill === "mongo",
        node: skill === "node",
      });
    }
  };

  const isAnySkillVisible = Object.values(contentVisible).some(
    (visible) => visible
  );

  return (
    <div className={style.main}>
      <div className={style.right}>
        <div className={style.titles}>
          <h1 className={style.h1}>Habilidades</h1>
          <p>habilidades que desenvolvi ao longo</p>
          <p>do meu aprendizado e experiência profissional:</p>
        </div>
        <div className={style.containerCards}>
          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("html")}
            >
              <img src={html} alt="Logo HTML5" className={style.iconeCss} />
            </div>
          </div>
          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("css")}
            >
              <img src={css} alt="Logo CSS3" className={style.iconeCss} />
            </div>
          </div>

          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("github")}
            >
              <img src={github} alt="Logo GitHub" className={style.iconeJs} />
            </div>
          </div>

          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("git")}
            >
              <img src={git} alt="Logo GIT" className={style.icone} />
            </div>
          </div>

          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("js")}
            >
              <img src={js} alt="Logo JS " className={style.iconeJs} />
            </div>
          </div>

          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("type")}
            >
              <img
                src={typescript}
                alt="Logo TypeScript"
                className={style.iconeJs}
              />
            </div>
          </div>

          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("react")}
            >
              <img src={react} alt="Logo React" className={style.iconeJs} />
            </div>
          </div>
        </div>
        <div className={style.titlesAprendizagem}>
          <p>habilidades que estou desenvolvendo e aprimorando:</p>
        </div>
        <div className={style.containerCardsAprendizagem}>
          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("figma")}
            >
              <img src={figma} alt="Logo Figma" className={style.iconeJs} />
            </div>
          </div>
          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("vue")}
            >
              <img src={mongodb} alt="Logo MongoDB" className={style.iconeJs} />
            </div>
          </div>
          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("node")}
            >
              <img src={nodejs} alt="Logo Node.js" className={style.iconeJs} />
            </div>
          </div>

          <div className={style.flex}>
            <div
              className={style.CardSkill}
              onClick={() => toggleContent("mongo")}
            >
              <img src={vuejs} alt="Logo Vue.js" className={style.iconeJs} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.left}>
        {isAnySkillVisible ? (
          <>
            {contentVisible.vue && (
              <div className={style.card}>
                <div>
                  Vue.js é um framework que ajuda a criar páginas web
                  interativas. Com ele, você pode construir a interface da sua
                  aplicação de forma fácil e organizada, dividindo-a em partes
                  (componentes) que podem ser reutilizadas.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "5%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {contentVisible.node && (
              <div className={style.card}>
                <div>
                  Node.js é uma plataforma que permite executar JavaScript no
                  servidor. Isso significa que você pode usar JavaScript para
                  criar a parte "invisível" das aplicações, como gerenciar dados
                  e responder a requisições.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "20%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {contentVisible.mongo && (
              <div className={style.card}>
                <div>
                  MongoDB é um tipo de banco de dados que armazena informações
                  de forma flexível. Em vez de usar tabelas rígidas, ele guarda
                  os dados como documentos, parecidos com arquivos JSON. Isso
                  facilita a organização e a alteração dos dados, tornando-o
                  ideal para aplicações que mudam frequentemente.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "10%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {contentVisible.css && (
              <div className={style.card}>
                <div>
                  CSS3 é a linguagem de estilos utilizada para descrever a
                  aparência e o layout de um documento HTML
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {contentVisible.github && (
              <div className={style.card}>
                <div>
                  GitHub é uma plataforma de hospedagem para projetos de
                  desenvolvimento de software que utiliza o sistema de controle
                  de versão Git. Ela permite que desenvolvedores colaborem e
                  gerenciem suas versões de código.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "70%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {contentVisible.git && (
              <div className={style.card}>
                <div>
                  Git é um sistema de controle de versão amplamente utilizado
                  para verificar, atualizar, copiar e fazer mudanças em
                  arquivos.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {contentVisible.js && (
              <div className={style.card}>
                <div>
                  JavaScript é uma linguagem de programação que permite a
                  criação de interatividade e dinâmicas em páginas web e muito
                  mais.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {contentVisible.html && (
              <div className={style.card}>
                <div>
                  HTML5 é a linguagem padrão utilizada para estruturar e
                  apresentar conteúdo na web. Ele permite a criação de elementos
                  semânticos, como títulos, parágrafos, listas, links entre
                  outros.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {contentVisible.react && (
              <div className={style.card}>
                <div>
                  React é uma biblioteca JavaScript que facilita a criação de
                  interfaces de usuário interativas para aplicativos web. Ela
                  permite que os desenvolvedores construam componentes
                  reutilizáveis, que podem ser atualizados de maneira eficiente.
                  <p>Nivel: Essencial</p>
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {contentVisible.type && (
              <div className={style.card}>
                <div>
                  TypeScript é um superconjunto de JavaScript que adiciona
                  tipagem estática opcional e outros recursos ao JavaScript.
                  Desenvolvido pela Microsoft, TypeScript é projetado para
                  melhorar a produtividade dos desenvolvedores, oferecendo uma
                  maneira de escrever código mais seguro e escalável.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {contentVisible.figma && (
              <div className={style.card}>
                <div>
                  O Figma é uma ferramenta de design que possibilita a criação
                  de interfaces e protótipos de maneira intuitiva e
                  colaborativa. É especialmente útil para programadores, pois
                  permite que você visualize e entenda melhor os elementos de
                  design antes de implementá-los no código.
                  <div className={style.proficiency}>
                    <h4>Nível de Proficiência</h4>
                    <div className={style.graphContainer}>
                      <div className={style.graph}>
                        <div
                          className={style.bar}
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className={style.card}>
            <div>
              Nenhuma habilidade selecionada. Clique em uma habilidade para ver
              mais informações.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
