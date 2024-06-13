import React from "react";
import "./CombineSection.scss";
import Newspaper from "../Newspaper/Newspaper";
import Knowledge from "../Knowledge/Knowledge";
import Question from "../Question/Question";
import Image from "next/image";
import mask from "../../../../public/home/mask-01.png";

const CombineSection = () => {
  return (
    <div className="combine-section">
      <Image width={2000} height={1000} src={mask} alt="error" className="image-mask" />
      <Newspaper />
      <Knowledge />
      <div className="line-horizontal"></div>
      <Question />
    </div>
  );
};

export default CombineSection;
