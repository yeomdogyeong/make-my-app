import React from "react";
import { useState } from "react";
import styled from "styled-components";

const MainBox = styled.div`
  display: flex;
`;

const InputBox = styled.div`
  position: inherit;
  width: 100%;
  height: 100px;
`;
const Namebox = styled.div`
  text-align: center;
  width: 300px;
  height: 20px;
  background-color: orange;
  border-radius: 30px;
`;

const MentionBox = styled.div`
  width: 498px;
  height: 78px;
  border: solid 1px yellow;
`;

const ButtonBox = styled.button`
  margin: 0.2rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;

export const Input = ({ input, handleDelete, text }) => {
  return (
    <MainBox>
      <InputBox>
        <Namebox>망고에게 {text} 번째 얘기중</Namebox>
        <div className="mentionbox">{input.content}</div>
      </InputBox>
      <ButtonBox onClick={() => handleDelete(input.id)}>X</ButtonBox>
    </MainBox>
  );
};

// onClick={() => handleDelete(id)}
// text={tweets.find((tweet) => tweet.id === input.id).id}
// text={tweets[idx].id}
