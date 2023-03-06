import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
// import { dummyData } from "./DummyData";
import Paging from "./Paging";

const MainBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  height: 100px;
  /* border: solid red; */
  text-align: center;
  font-size: 24px;

  > .namebox {
    width: 500px;
    height: 20px;
    border-radius: 10px;
  }

  > .mentionbox {
    position: inherit;
    margin: 10px;
    width: 300px;
    height: 100px;
    background-color: pink;
    width: 80%;
    line-height: 27px;
    /* padding: 5px 0; */
    resize: none;
    border: none;
    border-radius: 10px;
    text-align: center;
  }

  /* > .buttonbox {
    position: inherit;
    margin: 0.2rem;
    padding: 0.5rem 0.5rem;
    border-radius: 1rem;
    cursor: pointer;
  } */
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
  padding-left: 0.8rem;
  padding-right: 0.8rem;
  margin-top: 40px;
  margin-left: 20px;

  /*크기*/
  height: 3rem;
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

const UlBox = styled.div`
  height: 500px;
  overflow: hidden;
  overflow-y: auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const dummyData = [
  { id: 2, content: "귀엽다" },
  { id: 1, content: "망고는 푸들" },
];

export const Inputs = () => {
  const [msg, setMsg] = useState("");
  const [tweets, setTweets] = useState(dummyData);
  const [plus, setPlus] = useState(3);

  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  const [postPerPage] = useState(5);

  const handleMsg = (event) => {
    setMsg(event.target.value);
  };

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      handleButtonClick(event);
    }
  };
  const handleButtonClick = (event) => {
    const input = {
      id: plus,
      content: msg,
    };

    setTweets([input, ...tweets]);
    localStorage.setItem("tomention", JSON.stringify([input, ...tweets]));
    setPlus(plus + 1);
    setMsg("");
    event.preventDefault();
  };

  const handleDelete = (id) => {
    const newReportList = tweets.filter((it) => it.id !== id);
    setTweets(newReportList);
    localStorage.setItem("tomention", JSON.stringify(newReportList));
  };
  useEffect(() => {
    const localList = localStorage.getItem("tomention");
    if (localList) {
      setTweets(JSON.parse(localList));
    }
  }, []);

  const pageNationTweets = tweets.slice((page - 1) * 3, page * 3);
  // console.log(pageNationTweets);
  // console.log(page);
  return (
    <>
      <MainBox>
        <InputBox>
          {/* <div className="namebox">망고에게 한마디</div> */}
          <textarea
            placeholder="망고에게 한마디 적기"
            className="mentionbox"
            onKeyDown={(event) => handleEnter(event)}
            onChange={handleMsg}
            value={msg}
          ></textarea>
          <ButtonBox onClick={handleButtonClick}>submit</ButtonBox>
        </InputBox>
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
