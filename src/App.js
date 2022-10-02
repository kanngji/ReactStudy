import React, { useState } from "react"; // 이걸 안하면 에러가 뜨는구나..
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css 이용하기
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./bg1.png"; // 이미지 import 해오기
import "./App.css";
import data from "./data";
import Card from "./components/Card";
import Detail from "./components/Detail";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import style from "styled-components"; // styled-components
function App() {
  let [shoes] = useState(data);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/detail">Detail</Link>
                    <Link to="/about">Pricing</Link>
                  </Nav>
                </Container>
              </Navbar>
              <h1>메인페이지임</h1>
              <img className="main-bg" src={bg} alt="" />
              {/* 화면을 가로로 3등분하고 싶다 */}
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <Card shoes={shoes[0]} i={1}></Card>
                  </div>
                  <div className="col-md-4">
                    <Card shoes={shoes[1]} i={2}></Card>
                  </div>
                  <div className="col-md-4">
                    <Card shoes={shoes[2]} i={3}></Card>
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route
          path="/about"
          element={
            <>
              <Navbar bg="dark" variant="dark">
                <Container>
                  <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                  <Nav className="me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/detail">Detail</Link>
                    <Link to="/about">About</Link>
                  </Nav>
                </Container>
              </Navbar>
              <h1>어바웃페이지임</h1>
              <Outlet></Outlet>
            </>
          }
        >
          <Route path="member" element={<div>멤버들</div>} />
          <Route path="location" element={<div>회사위치</div>} />
        </Route>
        <Route path="*" element={<>없는 페이지임</>} />
      </Routes>
    </>
  );
}
console.log(data);
export default App;
