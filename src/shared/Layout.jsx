import React from "react";
import { styled } from "styled-components";

export default function Layout({ children }) {
  return (
    <StLayout>
      <Header />
      <div>{children}</div>
    </StLayout>
  );
}

function Header() {
  return (
    <StHeader>
      <span>My Todo List</span>
      <span>React</span>
    </StHeader>
  );
}

const StLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 2px auto;
`;

const StHeader = styled.div`
  border: 1px solid lightgray;
  padding: 20px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;
`;
