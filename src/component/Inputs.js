import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
// import { dummyData } from "./DummyData";
import Paging from "./Paging";

const MainBox = styled.div`
  display: flex;
`;

const InputBox = styled.div`
  position: inherit;
  width: 100%;
  height: 100px;
  /* border: solid red; */

  > .namebox {
    width: 500px;
    height: 20px;
    border-radius: 10px;
  }

  > .mentionbox {
    width: 498px;
    height: 78px;
    background-color: pink;
  }

  > .buttonbox {
    position: inherit;
    margin: 0.2rem;
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

const LiStyle = styled.li`
  list-style: none;
  margin: 10px;
`;

const ButtonBox = styled.button`
  margin: 0.2rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;
const dummyData = [
  { id: 1, content: "hi" },
  { id: 2, content: "a" },
  { id: 3, content: "b" },
  { id: 4, content: "ci" },
  { id: 5, content: "d" },
  { id: 6, content: "e" },
  { id: 7, content: "d" },
];

export const Inputs = () => {
  const [msg, setMsg] = useState("");
  const [tweets, setTweets] = useState(dummyData);

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
    console.log(page);
  };

  const [postPerPage] = useState(5);

  const handleMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleButtonClick = (event) => {
    const input = {
      id: tweets.length + 1,
      content: msg,
      // createdAt: new Date().toLocaleDateString('ko-kr'),
      // updatedAt: new Date().toLocaleDateString('ko-kr'),
    };
    setTweets([input, ...tweets]);
  };
  console.log(tweets);

  const handleDelete = (id) => {
    const newReportList = tweets.filter((it) => it.id !== id);
    setTweets(newReportList);
  };

  console.log(handleDelete);
  return (
    <>
      <MainBox>
        <InputBox>
          <div className="namebox">망고에게 한마디</div>
          <textarea
            placeholder="write here.."
            className="mentionbox"
            onChange={handleMsg}
            value={msg}
          ></textarea>
        </InputBox>
        <ButtonBox onClick={handleButtonClick}>submit</ButtonBox>
      </MainBox>
      <LiStyle>
        <ul>
          <li>
            {tweets.map((input) => (
              <Input key={input.id} input={input} handleDelete={handleDelete} />
            ))}
          </li>
        </ul>
        <Paging
          totalCount={tweets.length}
          page={page}
          postPerPage={postPerPage}
          handlePageChange={handlePageChange}
          pageRangeDisplayed={4}
        />
      </LiStyle>
    </>
  );
};
