import React, { useState } from "react"; // 이걸 안하면 에러가 뜨는구나..
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap css 이용하기
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./bg1.png"; // 이미지 import 해오기
import "./App.css";
import data from "./data";
import Card from "./components/Card";

function App() {
  let [shoes] = useState(data);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <img className="main-bg" src={bg} alt="" />
      {/* 화면을 가로로 3등분하고 싶다 */}
      <div className="container">
        <div className="row">
          <Card shoes={shoes}></Card>
          <Card shoes={shoes}></Card>
          <Card shoes={shoes}></Card>
        </div>
      </div>
    </div>
  );
}
console.log(data);
export default App;
