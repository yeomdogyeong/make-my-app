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
  border: solid red;

  > .namebox {
    width: 500px;
    height: 20px;
    border: solid 1px blue;
  }

  > .mentionbox {
    width: 498px;
    height: 78px;
    border: solid 1px yellow;
  }

  > .buttonbox {
    margin: 1rem;
    padding: 1rem 1rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;
const ButtonBox = styled.button`
  margin: 0.2rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;

export const Input = ({ input, handleDelete }) => {
  return (
    <>
      <MainBox>
        <InputBox>
          <ul>
            <li className="li-id" id={input.id}>
              <div className="namebox">망고에게 한마디</div>
              <div className="mentionbox">{input.content}</div>
            </li>
          </ul>
        </InputBox>
        <ButtonBox onClick={handleDelete}>X</ButtonBox>
      </MainBox>
    </>
  );
};

// onClick={() => handleDelete(id)}
