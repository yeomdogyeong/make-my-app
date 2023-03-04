import React from "react";
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { CiChat2 } from "react-icons/ci";
import { CiBrightnessDown } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { GoHome } from "react-icons/go";

const ChangeBar = styled.section`
  display: flex;
  /* border: solid blue; */
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
  width: 100px;
  height: 700px;
  margin: 5px;
  top: 0;
  //위 마진이 전체적으로 적용된다..?!뭐지
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px black;
`;
const Sidebar = () => {
  return (
    <>
      {" "}
      <ChangeBar>
        <Link to="/" style={{ textDecoration: "none", color: "#8572EE" }}>
          {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
          <IconBox>
            <GoHome size={50} />
            home
          </IconBox>
        </Link>
        <Link
          to="/listpage"
          style={{ textDecoration: "none", color: "#8572EE" }}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
          <IconBox>
            <CiCircleList size={50} />
            checklist
          </IconBox>
        </Link>

        <Link
          to="/mention"
          style={{ textDecoration: "none", color: "#8572EE" }}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
          <IconBox>
            <CiChat2 size={50} />
            mention
          </IconBox>
        </Link>
        <Link
          to="/weather"
          style={{ textDecoration: "none", color: "#8572EE" }}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
          <IconBox>
            <CiBrightnessDown size={50} />
          </IconBox>
          weather
        </Link>
        <Link
          to="/whoisshe"
          style={{ textDecoration: "none", color: "#8572EE" }}
        >
          {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
          <IconBox>
            {" "}
            <IoLogoGithub size={50} />
            github
          </IconBox>
        </Link>
      </ChangeBar>
    </>
  );
};

export default Sidebar;
