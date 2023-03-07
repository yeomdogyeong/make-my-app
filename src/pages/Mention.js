import React from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import { Inputs } from "../component/Inputs";
import Navigate from "../component/Navigate";

const DefaultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const SecondBox = styled.div`
  max-width: 700px;
  height: 700px;
  /* border: solid red; */
  flex: 1 0 0;
`;
const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Mention = () => {
  return (
    <DefaultBox>
      <Sidebar />
      <FirstBox>
        <SecondBox>
          <Inputs></Inputs>
        </SecondBox>
        <Navigate />
      </FirstBox>
    </DefaultBox>
  );
};
