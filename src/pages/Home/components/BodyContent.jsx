import { Image } from "antd";
import React from "react";
import imgTruyen from "../../../assets/images/imgTruyen.png";
import "../styles/BodyContent.css";
const itemHotMonth = [
  {
    id: 1,
    title: "content",
    src: imgTruyen,
  },
  {
    id: 2,
    title: "content",
    src: imgTruyen,
  },
  {
    id: 3,
    title: "content",
    src: imgTruyen,
  },
  {
    id: 4,
    title: "content",
    src: imgTruyen,
  },
];
export const BodyContent = () => {
  return (
    <div className="body-content_wrapper">
      <div className="hot_month">
        <div className="title-menu">Truyện hot tháng </div>
        <div className="content">
          {itemHotMonth.map((item) => (
            <div key={item.id} className="content-item">
              <Image src={item.src} preview={false} className="img" />
              <div>{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
