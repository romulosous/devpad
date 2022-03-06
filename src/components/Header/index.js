import React from "react";

import Logo from "../../assets/logo.svg";
import Title from "../Title";
import User from "../User";

const Header = () => {
  return (
    <header>
      <img
        src={Logo}
        alt="simbolo de uma tag de fechamento e um texto 'devpad'"
      />
      <Title />
      <User />
    </header>
  );
};

export default Header;
