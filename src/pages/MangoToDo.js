import React from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import Navigate from "../component/Navigate";

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
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: solid black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 10px;
`;

const SecondBox = styled.div`
  width: 700px;
  height: 700px;
  /* border: solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  /* background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    #b7e8eb 100%
  );
  overflow: hidden; */
  > .toimg {
    width: 290px;
    height: 400px;
    background: white;
    &:hover {
      background: rgb(220, 224, 227);
    }
    &:active {
      background: white;
    }
  }

  > .mangoSay {
    font-size: 20px;
    margin: 30px;
  }
`;

const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const url = "https://dogmbti1031.netlify.app/";

function MangoToDo() {
  return (
    <DefaultBox>
      <Sidebar />
      <FirstBox>
        {" "}
        <SecondBox>
          <div className="mangoSay">
            나에게 맞는 강아지가 궁금하면 망고를 클릭하세요
          </div>
          <img
            className="toimg"
            alt="dogimg"
            src="img/standingmango.png"
            onClick={() => {
              window.open(url);
            }}
            style={{ cursor: "pointer" }}
          />
        </SecondBox>
        <Navigate />
      </FirstBox>
    </DefaultBox>
  );
}

export default MangoToDo;
