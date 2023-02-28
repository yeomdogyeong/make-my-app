import React from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import { Inputs } from "../component/Inputs";

const DefaultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: solid black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 40px;
`;

const SecondBox = styled.div`
  max-width: 700px;
  height: 700px;
  border: solid red;
  flex: 1 0 0;
`;

export const Mention = () => {
  return (
    <DefaultBox>
      <Sidebar />
      <SecondBox>
        <Inputs></Inputs>
      </SecondBox>
    </DefaultBox>
  );
};
