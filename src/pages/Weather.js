import React from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import { useState } from "react";
import axios from "axios";

const DefaultBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border: solid black;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  margin-top: 40px;
`;

const SecondBox = styled.div`
  width: 700px; //이거 max-width로 하면안됨
  height: 700px;
  border: solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border: 1px solid blue;

  .appContentWrap {
    /* transform: translate(-50%, -50%); */
    position: absolute;
    /* border: 1px solid pink; */
    padding: 20px;
  }
  input {
    padding: 16px;
    border: 2px black solid;
    border-radius: 16px;
  }

  .textstyle {
    margin-bottom: 50px;
    font-size: 20px;
  }
`;

const ResultWrap = styled.div`
  margin-top: 60px;
  padding: 10px;
  border: 1px black solid;
  border-radius: 8px;
  .city {
    font-size: 24px;
  }
  .temperature {
    font-size: 60px;
    margin-top: 8px;
  }
  .sky {
    font-size: 20px;
    text-align: right;
    margin-top: 8px;
  }
`;
export const Weather = () => {
  const API_KEY = "c7c716fe52aa4c8416d73b17d1e25492";
  const [location, setLocation] = useState("");
  const [result, setResult] = useState({});
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  const searchWeather = async (e) => {
    if (e.key === "Enter") {
      try {
        const data = await axios({
          method: "get",
          url: url,
        });
        console.log(data);
        setResult(data);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <DefaultBox>
      <Sidebar />

      <SecondBox>
        <div className="appContentWrap">
          <div className="textstyle">
            망고랑 산책하기 좋은날씨일까? 도시를 입력해보자!
          </div>
          <input
            placeholder="도시를 입력하세요"
            value={location}
            onChange={(e) => setLocation(e.target.value)} //input의 값이 변할때마다 새 로케이션 변경
            type="text"
            onKeyDown={searchWeather}
          />
          {Object.keys(result).length !== 0 && (
            <ResultWrap>
              <div className="city">{result.data.name}</div>
              <div className="temperature">
                {Math.floor((result.data.main.temp - 273.15) * 10) / 10}°C
              </div>
              <div className="sky">{result.data.weather[0].main}</div>
            </ResultWrap>
          )}
        </div>
      </SecondBox>
    </DefaultBox>
  );
};
