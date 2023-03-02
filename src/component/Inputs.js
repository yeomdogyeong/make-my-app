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

const ButtonBox = styled.button`
  margin: 0.2rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
`;

const UlBox = styled.div`
  height: 500px;
  overflow: hidden;
  overflow-y: auto;
  margin-top: 10px;
`;
const dummyData = [
  { id: 3, content: "d" },
  { id: 2, content: "e" },
  { id: 1, content: "d" },
];

export const Inputs = () => {
  const [msg, setMsg] = useState("");
  const [tweets, setTweets] = useState(dummyData);
  const [plus, setPlus] = useState(4);

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const [postPerPage] = useState(5);

  const handleMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleButtonClick = (event) => {
    const input = {
      id: plus,
      content: msg,
      // createdAt: new Date().toLocaleDateString('ko-kr'),
      // updatedAt: new Date().toLocaleDateString('ko-kr'),
    };
    setTweets([input, ...tweets]);
    setPlus(plus + 1);
  };
  console.log(tweets);

  const handleDelete = (id) => {
    console.log(id);
    const newReportList = tweets.filter((it) => it.id !== id);
    setTweets(newReportList);
  };

  const pageNationTweets = tweets.slice((page - 1) * 5, page * 5);
  console.log(pageNationTweets);
  console.log(page);
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
      <div>
        <UlBox>
          {pageNationTweets.map((input) => (
            <Input
              key={input.id}
              input={input}
              handleDelete={handleDelete}
              text={tweets.find((tweet) => tweet.id === input.id).id}
            />
          ))}
        </UlBox>

        <Paging
          totalCount={tweets.length}
          page={page}
          postPerPage={postPerPage}
          handlePageChange={handlePageChange}
          pageRangeDisplayed={10}
        />
      </div>
    </>
  );
};
