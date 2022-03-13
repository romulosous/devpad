import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const Caption = styled.h1`
  color: #fff;
  transform: skewX(18deg);
`;

export const InclinedSide = styled.div`
  width: 20px;
  transform: skewX(-18deg);
  margin: 0 10px;
  background-color: #e36396;
`;

export const MiddleSlope = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 250px;
  background: #557dac;
  transform: skewX(-18deg);
`;
