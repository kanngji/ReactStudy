import React from "react";
export default function Card(props) {
  return (
    <div>
      <div className="col-md-4">
        <img
          src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
          width="80%"
          alt="sadf"
        />
        <h4>상품명:{props.shoes.title}</h4>
        <p>상품정보:{props.shoes.content}</p>
        <p>가격:{props.shoes.price}</p>
      </div>
    </div>
  );
}
