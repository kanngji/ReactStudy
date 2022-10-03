import React, { Fragment, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
function Detail(props) {
  useEffect(() => {
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  }, []);
  let [count, setCount] = useState(0);
  let [alert, setAlert] = useState(true);
  let { id } = useParams();
  console.log(id);
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

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼
      </button>
      {alert == true ? (
        <div className="alert alert-warning">2초이내 구매시 할인</div>
      ) : null}
    </Fragment>
  );
}

export default Detail;
