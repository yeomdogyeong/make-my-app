import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 50vh;
`;

const InputBox = styled.div`
  position: inherit;
  width: 100%;
  height: 100px;
`;
const NameBox = styled.div`
  text-align: center;
  width: 35vw;
  height: 20px;
  background-color: #b4b4ff;

  > .mentionBox {
    text-align: center;
  }
`;

const MentionBox = styled.div`
  width: 498px;
  height: 78px;
  border: solid 1px yellow;
`;

const ButtonBox = styled.button`
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
  margin-left: 7rem;
  margin-bottom: 4rem;

  /*크기*/
  height: 2.25rem;
  font-size: 1rem;

  /*색상 */
  background: #228be6;
  &:hover {
    background: #339af0;
  }
  &:active {
    background: #1c7ed6;
  }
`;

export const Input = ({ input, handleDelete, text }) => {
  return (
    <MainBox>
      <InputBox>
        <NameBox>망고에게 {text} 번째 얘기중</NameBox>
        <div className="mentionBox">{input.content}</div>
      </InputBox>
      <ButtonBox onClick={() => handleDelete(input.id)}>X</ButtonBox>
    </MainBox>
  );
};

// onClick={() => handleDelete(id)}
// text={tweets.find((tweet) => tweet.id === input.id).id}
// text={tweets[idx].id}
