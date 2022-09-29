import React from "react";
export default function Card(props) {
  return (
    <div>
      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="80%" />
        <h4>상품명:{props.shoes[0].title}</h4>
        <p>상품정보:{props.shoes[0].content}</p>
        <p>가격:{props.shoes[0].price}</p>
      </div>
    </div>
  );
}
