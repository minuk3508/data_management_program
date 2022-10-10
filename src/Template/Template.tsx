import { ReactNode } from "react";
import styled from "styled-components";

interface childProps {
  children: ReactNode;
}

export function Template({ children }: childProps) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
