import React from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import { List } from "../component/List";

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
  width: 700px;
  height: 700px;
  border: solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d2e1ff;
`;

const ListBox = styled.div`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ListPage = () => {
  return (
    <DefaultBox>
      <Sidebar />
      <SecondBox>
        <ListBox>
          <List text="망고와 하루 한 번 산책" />
          <List text="망고에게 간식 하나" />
          <List text="망고 쓰담쓰담 해주기" />
          <List text="망고와 장난감 놀이" />
          <List text="망고와 장난감 놀이" />
          <List text="망고와 장난감 놀이" />
        </ListBox>
      </SecondBox>
    </DefaultBox>
  );
};
