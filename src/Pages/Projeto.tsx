import React, { useState } from "react";
import style from "./Projeto.module.css"; // Assegure-se de criar e importar o CSS adequado
import loginHermes from "../../public/login-hermes.png";

const Projeto = () => {
  return (
    <div className={style.main}>
      <h1 className={style.h1}>Projetos Desenvolvidos</h1>

      <div className={style.containerprojetos}>
        <div className={style.projeto}>
          <div className={style.capa}>
            <img src={loginHermes} alt="Imagem do projeto" />
          </div>
          <h3 className={style.tituloprojeto}># Freelancer </h3>
          <p className={style.descrição}>
            Hermes Assistente Financeiro - uma aplicação desenvolvida para
            auxiliar médicos, dentistas e profissionais da saúde no controle
            financeiro e gestão de atendimentos. Os usuários podem cadastrar
            pacientes e locais de atendimento. Contém um dashboard com gráficos
            dinâmicos que permitem a visualização das finanças e do volume de
            atendimentos. Tecnologias: React com TypeScript, HTML e CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projeto;
