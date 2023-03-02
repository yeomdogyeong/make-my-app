// import { text } from "body-parser";<중간ㅇ ㅔ 얘떔에 모듈 에러남 어디서 튀어나온거냐
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const ListContainer = styled.div`
  width: 600px;
  height: 98px;

  background-color: #c8d7ff;
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  margin: 10px;
  /* border-radius: 30px; */

  > .toggle-container {
    width: 24px;
    height: 24px;
    border-radius: 30px;
    background-color: #cd2e57;
    border-radius: 50px;
    background: #ff5a5a;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

    // TODO : .toggle--checked 클래스가 활성화 되었을 경우의 CSS를 구현합니다.
  }
  > .box--checked {
    background-color: #8cf064;
    //순서조심! toggle-container 위에 가있으면 작동안함. background-color만 눌러줘도 작동
  }

  > .something {
    width: 40px;
    height: 40px;
  }
  > .sample {
    width: 100px;
    height: 100px;
  }
`;
const FirstContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: left;
  width: 298px;
  height: 49px;
  background-color: #c8d7ff;
  opacity: 0.8;
  margin-top: 10px;
  border-radius: 50px;
  font-size: 22px;
  margin-right: 10px;
  margin-top: 25px;
`;

export const List = ({ text }) => {
  const [check, setCheck] = useState(false);

  const toggleCheck = ({ text }) => {
    setCheck(!check);
  };

  return (
    <>
      <ListContainer onClick={toggleCheck}>
        <FirstContainer>{text}</FirstContainer>
        {/* <div className={`toggle-container ${check ? "box--checked" : null}`} /> */}
        <img
          className={`something ${check ? "sample" : null}`}
          alt="dogimg"
          src="img/successdog.png"
        />
        <FaCheck
          className={`toggle-container ${check ? "box--checked" : null}`}
        />
      </ListContainer>
    </>
  );
};
