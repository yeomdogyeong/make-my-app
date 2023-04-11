import React, { useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../component/Sidebar";
import { useState } from "react";
import axios from "axios";
import Navigate from "../component/Navigate";

const MainBox = styled.div``;

const DefaultBox = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: solid black; */
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  /* margin-top: 40px; */
`;

const SecondBox = styled.div`
  width: 700px; //이거 max-width로 하면안됨
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: white;
  /* border: 1px solid green; */

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

  .textStyle {
    margin-bottom: 50px;
    font-size: 20px;
  }

  .seoulWeather {
    margin-bottom: 2rem;
  }
`;

const FirstBox = styled.div`
  display: flex;
  flex-direction: column;
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
  const [result2, setResult2] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`; //react값 순차적으로 렌더링되니까 location이랑 API_KEY위로 올려주기
  const seoulUrl = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${API_KEY}`;

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
  const searchWeather2 = async (e) => {
    try {
      const data = await axios({
        method: "get",
        url: seoulUrl,
      });

      setResult2(data);
    } catch (err) {
      alert(err);
    }
  };
  console.log(searchWeather2);
  useEffect(() => {
    searchWeather2();
    setIsLoading(false);
  }, []);

  return (
    <MainBox>
      <DefaultBox>
        <Sidebar />
        <FirstBox>
          <SecondBox>
            <div className="appContentWrap">
              <div className="textStyle">
                망고랑 산책하기 좋은날씨일까? 도시를 입력해보자!
              </div>
              {Object.keys(result2).length !== 0 && (
                <div className="seoulWeather">
                  망고가 사는 서울의 날씨는 현재
                  {isLoading ? (
                    <div> Loading중...</div>
                  ) : (
                    Math.floor((result2.data.main.temp - 273.15) * 10) / 10
                  )}
                  °C입니다
                </div>
              )}
              <input
                placeholder="ex) Seoul"
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
          <Navigate />
        </FirstBox>
      </DefaultBox>
    </MainBox>
  );
};
