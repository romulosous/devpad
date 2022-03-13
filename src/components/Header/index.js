import React from "react";

import Logo from "../../assets/logo.svg";
import Title from "../Title";
import User from "../User";

import {Container} from "./style"

const Header = () => {
  return (
    <Container>
      <img
        src={Logo}
        alt="simbolo de uma tag de fechamento e um texto 'devpad'"
      />
      <Title />
      <User />
    </Container>
  );
};

export default Header;
