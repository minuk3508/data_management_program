import { ReactNode } from "react";
import styled from "styled-components";

interface childProps {
  children: ReactNode;
}

export function Template({ children }: childProps) {
  return (
    <Container>
      <Header>DATA</Header>
      {children}
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6%;
  font-weight: 700;
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.2);
`;
