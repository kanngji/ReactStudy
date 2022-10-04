import React, { Fragment, useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
function Detail(props) {
  useEffect(() => {
    setTimeout(() => {
      setAlarm(false);
    }, 2000);
  }, []);
  let [count, setCount] = useState(0);
  let [alarm, setAlarm] = useState(true);
  let { id } = useParams();
  let [num, setNum] = useState("");
  let [탭, 탭변경] = useState(0);

  useEffect(() => {
    if (isNaN(num) == true) alert("no");
  }, [num]);
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
              alt="신발1"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{props.shoes[id].title}</h4>
            <p>{props.shoes[id].content}</p>
            <p>{props.shoes[id].price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
      <input
        onChange={(e) => {
          setNum(e.target.value);
        }}
      ></input>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {alarm == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}

      <Nav variant="tabs" defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link onClick={() => 탭변경(0)} eventKey="link0">
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => 탭변경(1)} eventKey="link1">
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => 탭변경(2)} eventKey="link2">
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent 탭={탭}></TabContent>
    </Fragment>
  );
}
function TabContent({ 탭 }) {
  let [fade, setFade] = useState("");
  useEffect(() => {
    const a = setTimeout(() => {
      setFade("end");
    }, 100);

    return () => {
      clearTimeout(a);
      setFade("");
    };
  }, [탭]);
  return (
    <div className={`start ${fade}`}>
      {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}
    </div>
  );
}
export default Detail;
