import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import "./navigate.css";

function Navigate() {
  const navigate = useNavigate();

  const NavigateBox = styled.div`
    display: flex;

    align-items: flex-end;
    justify-content: space-between;

    width: 700px;
    height: 50px;
  `;

  const ButtonBox = styled.div`
    cursor: pointer;

    display: inline-flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-top: 80px;

    /*크기*/
    height: 3rem;
    font-size: 1rem;

    /*색상 */
    background: #ad9aee;
    &:hover {
      background: #8572ee;
    }
    &:active {
      background: #1c7ed6;
    }
  `;
  const goBack = () => {
    // navigate("/");
    navigate(-1);
  };

  const goFront = () => {
    // navigate("/");
    navigate(+1);
  };

  const goHome = () => {
    navigate("/");
  };

  // 실제 활용 예시
  // const goToMain = () => {
  //   if(response.message === "valid user"){
  //     navigate('/main');
  //   } else {
  //     alert("가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.")
  //     navigate('/signup');
  //   }
  // }

  return (
    <NavigateBox>
      <ButtonBox onClick={goBack}>뒤로가기</ButtonBox>
      <ButtonBox onClick={goHome}>홈버튼</ButtonBox>
      <ButtonBox onClick={goFront}>앞으로가기</ButtonBox>
    </NavigateBox>
  );
}

export default Navigate;
