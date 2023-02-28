import React from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";

// const Container = styled.div`
//   border: 1px solid black;
//   width: 500px;
//   height: 500px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;
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
  flex-direction: column;
  background-color: pink;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    #b7e8eb 100%
  );
  overflow: hidden;

  > .toimg {
    width: 300px;
    height: 300px;
  }

  > .mangosay {
    font-size: x-large;
    margin: 10px;
  }
`;

function MangoToDo() {
  return (
    <DefaultBox>
      <Sidebar />
      <SecondBox>
        <div className="mangosay">할일이 많다 멍</div>
        <img className="toimg" alt="dogimg" src="img/todog.png" />
      </SecondBox>
    </DefaultBox>
  );
}

export default MangoToDo;
