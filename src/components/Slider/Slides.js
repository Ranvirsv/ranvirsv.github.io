import React from "react";
import Slider from "react-slick";
import "./Slides.scss";
import Bash from "../../assets/Bash.png";
import C from "../../assets/C++.png";
import Css from "../../assets/CSS.png";
import Git from "../../assets/Git.png";
import HTML from "../../assets/HTML.png";
import Java from "../../assets/Java.png";
import JS from "../../assets/JS.png";
import Jupyter from "../../assets/Jupyter-notebook.png";
import Linux from "../../assets/Linux.png";
import llvm from "../../assets/LLVM-Logo.png";
import matplot from "../../assets/matplot.png";
import MLIR from "../../assets/MLIR.png";
import objc from "../../assets/obj-c.png";
import pandas from "../../assets/pandas-logo-300.png";
import psql from "../../assets/PSQL.png";
import Python from "../../assets/python.png";
import Pytroch from "../../assets/pytorch.png";
import R from "../../assets/R_logo.svg.png";
import react from "../../assets/React.png";
import sklearn from "../../assets/sklearn.png";
import sql from "../../assets/SQL.png";
import swift from "../../assets/Swift.png";

export default function Slides() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <>
      <div className="sliderTitleDiv">
        <div className="sliderTitle">Some technologies I am experienced in</div>
        <div className="sliderWindow"></div>
      </div>

      <div className="sliderDiv">
        <Slider {...settings} className="slickSlider">
          {[
            Bash,
            C,
            Css,
            Git,
            HTML,
            Java,
            JS,
            Jupyter,
            Linux,
            llvm,
            matplot,
            MLIR,
            objc,
            pandas,
            psql,
            Python,
            Pytroch,
            R,
            react,
            sklearn,
            sql,
            swift,
          ].map((elem) => (
            <>
              <div>
                <img src={elem} className="sliderImage" />
              </div>
            </>
          ))}
        </Slider>
      </div>
    </>
  );
}
