import React, { Component } from "react";
import buildingImage from "./image/building.png";
import mapImage from "./image/map.png";
import "./style.css";
export class ImageChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: this.props.type==="building"?buildingImage:this.props.type==="map"?mapImage:buildingImage,
    };
  }

  render() {
    return (
      <>
        <style>
          {`
          
          .DashCard-${this.props.name} {
            background-color: ${
              this.props.cardBackColor
                ? this.props.cardBackColor
                : "rgb(245, 245, 244)"
            }!important;
            border-radius: 8px!important;
            padding-top: 7px!important;
            padding-bottom: 4px!important;
            padding-right: 30px!important;
            padding-left: 7px!important;
            max-width: 300px!important;
          }
          .DashCardDark-${this.props.name} {
            background-color: ${
              this.props.cardBackColor
                ? this.props.cardBackColor
                : "rgb(32, 32, 32)"
            }!important;
            border-radius: 8px!important;
            padding-top: 7px!important;
            padding-bottom: 4px!important;
            padding-right: 30px!important;
            padding-left: 7px!important;
            max-width: 300px!important;
          }
          .ImageChartNumbersLight-${this.props.name}{
            font-family: ` +
            (this.props.fontStyle ? this.props.fontStyle : "Montserrat") +
            `, sans-serif!important;
            margin-top: 50px!important;
            margin-bottom: -5px!important;
            color:  ${
              this.props.cardSideTextColor
                ? this.props.cardSideTextColor
                : "#343a40"
            }!important;
        }
        .ImageChartNumbersDark-${this.props.name}{
          font-family: ` +
            (this.props.fontStyle ? this.props.fontStyle : "Montserrat") +
            `, sans-serif!important;
          margin-top: 50px!important;
          margin-bottom: -5px!important;
          color:  ${
            this.props.cardSideTextColor
              ? this.props.cardSideTextColor
              : "#e2e3e4"
          }!important;
      }
        .imageChartHeadDark-${this.props.name}{
          font-family: ` +
            (this.props.fontStyle ? this.props.fontStyle : "Montserrat") +
            `, sans-serif!important;
            position: absolute!important;
            margin-top:10px !important;
            margin-left:10px !important;
            z-index: 15!important;
            color:  ${
              this.props.cardTextColor ? this.props.cardTextColor : "#343a40"
            }!important;
        }
        .imageChartHeadLight-${this.props.name}{
          font-family: ` +
            (this.props.fontStyle ? this.props.fontStyle : "Montserrat") +
            `, sans-serif!important;
            position: absolute!important;
            margin-top:10px !important;
            margin-left:10px !important;
            z-index: 15!important;
            color:  ${
              this.props.cardTextColor ? this.props.cardTextColor : "#343a40"
            }!important;
        }
        .imageChartText1Light-${this.props.name}{
          font-family: ` +
            (this.props.fontStyle ? this.props.fontStyle : "Montserrat") +
            `, sans-serif!important;
          position: absolute!important;
          font-weight:100 !important;
          color:  ${this.props.cardTextColor ? this.props.cardTextColor : "#343a40"}!important;
         
      }
      .imageChartText1Dark-${this.props.name}{
        font-family: ` +
            (this.props.fontStyle ? this.props.fontStyle : "Montserrat") +
            `, sans-serif!important;
        position: absolute!important;
        font-weight:100 !important;
        color:  ${
          this.props.cardTextColor ? this.props.cardTextColor : "#343a40"
        }!important;
      }
      .imageCardText{
        font-family: ` +
            (this.props.fontStyle ? this.props.fontStyle : "Montserrat") +
            `, sans-serif!important;
        font-weight: 100!important;
        font-size: 8px!important;
       line-height: 0px!important;
    }
    .DashCard-${this.props.name} h3 h6 {
      margin-bottom: 0.0rem!important;
      line-height: 0!important;
      margin-top: 19px!important;
      margin-bottom: 0.5rem!important;
  }
    .DashCard-${this.props.name} h3{
      font-weight: 800!important;
      font-size: 1.15rem!important;
    }
    .DashCardDark-${this.props.name} h3 ,h6 {
      margin-bottom: 0.0rem!important;
      font-weight: 100!important;
      line-height: 0!important;
      margin-top: 19px!important;
      margin-bottom: 0.5rem!important;
    }
    .DashCardDark-${this.props.name} h3{
      font-weight: 800!important;
      font-size: 1.15rem!important;
    }

    
  .imageCardColorLine{
    border-bottom: 3px solid ${this.props.lineColor ? this.props.lineColor : "#3cb4e7"}!important;
    opacity: 1!important;
    width:100%!important;   
    z-index: 6!important;
    position: absolute!important;
  }
  .imageCardColorBox {
    background: linear-gradient(to bottom, #cab4a9 0%, ${this.props.highLightColor ? this.props.highLightColor : "#3cb4e7"} 100%) ;
  }

          `}
        </style>
        <div
          className={
            this.props.dark
              ? "DashCardDark-" + this.props.name
              : "DashCard-" + this.props.name
          }
        >
          <h3
            className={
              this.props.dark
                ? " imageChartHeadDark-" + this.props.name
                : " imageChartHeadLight-" + this.props.name
            }
          >
            {this.props.title} -{" "}
            <label
              className={
                this.props.dark
                  ? " imageChartText1Dark-" + this.props.name
                  : " imageChartText1Light-" + this.props.name
              }
            >
              {this.props.value}
            </label>
          </h3>

          <div className="rowImageChart ">
            <div className="colImageChart ">
              <div className="imageCardBar">
                <div className="imageCardColorBox"></div>
                <div className={this.getHeightColor()}>
                  {" "}
                  <img
                    src={this.state.image}
                    alt="imageForChart"
                    id="imageForChart"
                    className="imageCardImageBox"
                  />
                </div>
                <div className={this.getLineHeight()}></div>
              </div>
            </div>
            <div
              className={
                this.props.dark
                  ? " ImageChartNumbersDark-" + this.props.name
                  : " ImageChartNumbersLight-" + this.props.name
              }
            >
              <h6 className="imageCardText"> </h6>
              <h6 className="imageCardText"> </h6>
              <h6 className="imageCardText"> </h6>
              <h6 className="imageCardText">{this.indicator(100)}</h6>
              <h6 className="imageCardText">{this.indicator(90)}</h6>
              <h6 className="imageCardText">{this.indicator(80)}</h6>
              <h6 className="imageCardText">{this.indicator(70)}</h6>
              <h6 className="imageCardText">{this.indicator(60)}</h6>
              <h6 className="imageCardText">{this.indicator(50)}</h6>
              <h6 className="imageCardText">{this.indicator(40)}</h6>
              <h6 className="imageCardText">{this.indicator(30)}</h6>
              <h6 className="imageCardText">{this.indicator(20)}</h6>
              <h6 className="imageCardText">{this.indicator(10)}</h6>
              <h6 className="imageCardText">{this.indicator(0)}</h6>
            </div>
          </div>
        </div>
      </>
    );
  }
  getLineHeight() {
    return "imageCardColorLine" + this.getHeight();
  }
  getHeightColor() {
    return (
      "imageCardColorBox imageCardColorChanger imageCardBox" + this.getHeight()
    );
  }
  getHeight() {
    var percentage =
      (parseInt(this.props.value) / parseInt(this.props.total)) * 100;
    if (percentage > 95) {
      return " heightImageCard100 ";
    } else if (percentage > 90) {
      return " heightImageCard95";
    } else if (percentage > 85) {
      return " heightImageCard90";
    } else if (percentage > 80) {
      return " heightImageCard85";
    } else if (percentage > 75) {
      return " heightImageCard80";
    } else if (percentage > 70) {
      return " heightImageCard75";
    } else if (percentage > 65) {
      return " heightImageCard70";
    } else if (percentage > 60) {
      return " heightImageCard65";
    } else if (percentage > 55) {
      return " heightImageCard60";
    } else if (percentage > 50) {
      return " heightImageCard55";
    } else if (percentage > 45) {
      return " heightImageCard50";
    } else if (percentage > 40) {
      return " heightImageCard45";
    } else if (percentage > 35) {
      return " heightImageCard40";
    } else if (percentage > 30) {
      return " heightImageCard35";
    } else if (percentage > 25) {
      return " heightImageCard30";
    } else if (percentage > 20) {
      return " heightImageCard25";
    } else if (percentage > 15) {
      return " heightImageCard20";
    } else if (percentage > 10) {
      return " heightImageCard15";
    } else if (percentage > 5) {
      return " heightImageCard10";
    } else if (percentage > 0) {
      return " heightImageCard05";
    } else {
      return " heightImageCard00";
    }
  }
  indicator(value) {
    return (parseInt(this.props.total) * value) / 100;
  }
}
