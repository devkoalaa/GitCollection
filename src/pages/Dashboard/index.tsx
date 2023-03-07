import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Title, Form, Repos } from "./styles";
import logo from "../../assets/logo.svg";

export const Dashboard: React.FunctionComponent = () => {
  return (
    <>
      <img src={logo} alt="GitCollection" />
      <Title>Catálogo de repositórios do GitHub</Title>

      <Form>
        <input placeholder="username/repository_name"></input>
        <button type="submit">Buscar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img
            src="https://avatars.githubusercontent.com/u/53231911?v=4"
            alt="Repositorio"
          />
          <div>
            <strong>devkoalaa/GitCollection</strong>
            <p>Repositorio de aprendizado de React</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repos>
    </>
  );
};
