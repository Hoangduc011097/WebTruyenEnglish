import { Carousel } from "antd";
import React from "react";
import imgTruyen from "../../../assets/images/imgTruyen.png";
import { Image } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  with: "fit-content",
};
export const Swipper = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // marginLeft: "40%",
        background: "red",
      }}
    >
      <Carousel
        autoplay={false}
        style={{
          background: "blue",
          display: "flex",
          height: 160,
        }}
      >
        <div>
          <Image src={imgTruyen} preview={false} style={contentStyle} />
          <Image src={imgTruyen} preview={false} style={contentStyle} />
          <Image src={imgTruyen} preview={false} style={contentStyle} />
          <Image src={imgTruyen} preview={false} style={contentStyle} />
          <Image src={imgTruyen} preview={false} style={contentStyle} />
          <Image src={imgTruyen} preview={false} style={contentStyle} />
          <Image src={imgTruyen} preview={false} style={contentStyle} />
        </div>
        <div>
          <Image src={imgTruyen} preview={false} style={contentStyle} />
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
      <>duv</>
    </div>
  );
};
