import React from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import "./WhoIsShe.css";
import Navigate from "../component/Navigate";

const DefaultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: solid black; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

const SecondBox = styled.div`
  width: 700px; //이거 max-width로 하면안됨
  height: 700px;
  /* border: solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;

  > .dogimg {
    width: 300px;
    height: 300px;
    margin-bottom: 30px;
  }
`;
const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WhoIsShe = () => {
  return (
    <DefaultBox>
      <Sidebar />
      <FirstBox>
        <SecondBox>
          <img className="dogimg" alt="dogimg" src="img/mangowith.jpg" />
          망고의 집사 github : yeomdogyeong
        </SecondBox>
        <Navigate />
      </FirstBox>
    </DefaultBox>
  );
};
