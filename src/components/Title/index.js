import React from "react";

import {Container, Caption, InclinedSide, MiddleSlope } from "./style";

const Title = ({ children }) => {
  return (
    <Container>
      <InclinedSide />
      <MiddleSlope>
      <Caption>{children}</Caption>
      </MiddleSlope>
      <InclinedSide />
    </Container>
  );
};

export default Title;
