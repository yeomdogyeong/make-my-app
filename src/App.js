import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import MangoToDo from "./pages/MangoToDo";
import { ListPage } from "./pages/ListPage";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { WhoIsShe } from "./pages/WhoIsShe";
import { Mention } from "./pages/Mention";
import { Weather } from "./pages/Weather";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MangoToDo />} />
          <Route path="/listpage" element={<ListPage />} />
          <Route path="whoisshe" element={<WhoIsShe />} />
          <Route path="mention" element={<Mention />} />
          <Route path="weather" element={<Weather />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
