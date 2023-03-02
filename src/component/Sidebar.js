import React from "react";
// TODO - import문을 이용하여 react-router-dom 라이브러리의 Link 컴포넌트를 불러옵니다.
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const ChangeBar = styled.section`
  display: flex;
  border: solid blue;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  width: 100px;
  height: 700px;
  margin: 10px;
  //위 마진이 전체적으로 적용된다..?!뭐지
`;
const Sidebar = () => {
  return (
    <ChangeBar>
      <Link to="/">
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <div>mangtodo</div>
      </Link>
      <Link to="/listpage">
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <div>listpage</div>
      </Link>
      <Link to="/whoisshe">
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <div>who is she</div>
      </Link>
      <Link to="/mention">
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <div>Mention</div>
      </Link>
      <Link to="/weather">
        {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
        <div>Weather</div>
      </Link>
    </ChangeBar>
  );
};

export default Sidebar;
