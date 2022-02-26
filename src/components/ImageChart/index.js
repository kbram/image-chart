import React, { Component } from "react";
import buildingImage from "./image/building.png";

export class ImageChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image:buildingImage,
    }
  }

  render() {
    return (
      <>
      <style>
        {
          `
          .DashCard-${this.props.name} {
            background-color: ${
              this.props.cardBackColor
                ? this.props.cardBackColor
                : "rgb(245, 245, 244)"
            };
            border-radius: 8px;
            padding-top: 7px;
            padding-bottom: 4px;
            padding-right: 30px;
            padding-left: 7px;
            max-width: 300px;
          }
          .DashCardDark-${this.props.name} {
            background-color: ${
              this.props.cardBackColor
                ? this.props.cardBackColor
                : "rgb(32, 32, 32)"
            };
            border-radius: 8px;
            padding-top: 7px;
            padding-bottom: 4px;
            padding-right: 30px;
            padding-left: 7px;
            max-width: 300px;
          }
          .ImageChartNumbersLight-${this.props.name}{
            font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
            margin-top: 50px;
            margin-bottom: -5px;
            color:  ${
              this.props.cardSideTextColor ? this.props.cardSideTextColor : "#343a40"
            };!important;
        }
        .ImageChartNumbersDark-${this.props.name}{
          font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
          margin-top: 50px;
          margin-bottom: -5px;
          color:  ${
            this.props.cardSideTextColor ? this.props.cardSideTextColor : "#e2e3e4"
          };!important;
      }
        .imageChartHeadDark-${this.props.name}{
          font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
            position: absolute;
            margin-top:10px ;
            margin-left:10px ;
            z-index: 15;
            color:  ${
              this.props.cardTextColor ? this.props.cardTextColor : "#343a40"
            };!important;
        }
        .imageChartHeadLight-${this.props.name}{
          font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
            position: absolute;
            margin-top:10px ;
            margin-left:10px ;
            z-index: 15;
            color:  ${
              this.props.cardTextColor ? this.props.cardTextColor : "#343a40"
            };!important;
        }
        .imageChartText1Light-${this.props.name}{
          font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
          position: absolute;
          font-size:40px;
          margin-left:60px ;
          font-weight:100 !important;
          margin-top:10px ;
          z-index: 15;
          color:  ${
            this.props.cardTextColor ? this.props.cardTextColor : "#343a40"
          };!important;
         
      }
      .imageChartText1Dark-${this.props.name}{
        font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
        position: absolute;
        font-size:40px;
        margin-left:60px ;
        font-weight:100 !important;
        margin-top:10px ;
        z-index: 15;
        color:  ${
          this.props.cardTextColor ? this.props.cardTextColor : "#343a40"
        };!important;
      }
      .textSize{
        font-family: `+(this.props.fontStyle?this.props.fontStyle:"Montserrat")+`, sans-serif;
        font-weight: 100;
        font-size: 8px;
       line-height: 0px;
    }
          `
        }
      </style>
        <div className={this.props.dark ? " DashCardDark-"+this.props.name : "DashCard-"+this.props.name}>
          <h3 
          
          className={
            this.props.dark
              ? " imageChartHeadDark-"+this.props.name
              : " imageChartHeadLight-"+this.props.name
          }>Occupancy <label   className={
            this.props.dark
              ? " imageChartText1Dark-"+this.props.name
              : " imageChartText1Light-"+this.props.name
          }>{this.props.value}</label></h3>
          

          <div className="rowImageChart ">
            <div className="colImageChart ">
              <div className="Bar">
                <div className="colorBox"></div>
                <div className={this.getHeightColor()}>
                  {" "}
                  <img src={this.state.image} alt="imageForChart" id="imageForChart" className="imageBox" />
                </div>
                <div className={this.getLineHeight()}></div>
              </div>
            </div>
            <div  className={
              this.props.dark
                ? " ImageChartNumbersDark-"+this.props.name
                : " ImageChartNumbersLight-"+this.props.name
            }>
              <h6 className="textSize"> </h6>
              <h6 className="textSize"> </h6>
              <h6 className="textSize"> </h6>
              <h6 className="textSize">{this.indicator(100)}</h6>
              <h6 className="textSize">{this.indicator(90)}</h6>
              <h6 className="textSize">{this.indicator(80)}</h6>
              <h6 className="textSize">{this.indicator(70)}</h6>
              <h6 className="textSize">{this.indicator(60)}</h6>
              <h6 className="textSize">{this.indicator(50)}</h6>
              <h6 className="textSize">{this.indicator(40)}</h6>
              <h6 className="textSize">{this.indicator(30)}</h6>
              <h6 className="textSize">{this.indicator(20)}</h6>
              <h6 className="textSize">{this.indicator(10)}</h6>
              <h6 className="textSize">{this.indicator(0)}</h6>
            </div>
          </div>
        </div>
      </>
    );
  }
  getLineHeight() {
    return "colorLine" + this.getHeight();
  }
  getHeightColor() {
    return "colorBox colorChanger Box" + this.getHeight();
  }
  getHeight() {
    var percentage =
      (parseInt(this.props.value) / parseInt(this.props.total)) * 100;
    if (percentage > 95) {
      return " height100 ";
    } else if (percentage > 90) {
      return " height95";
    } else if (percentage > 85) {
      return " height90";
    } else if (percentage > 80) {
      return " height85";
    } else if (percentage > 75) {
      return " height80";
    } else if (percentage > 70) {
      return " height75";
    } else if (percentage > 65) {
      return " height70";
    } else if (percentage > 60) {
      return " height65";
    } else if (percentage > 55) {
      return " height60";
    } else if (percentage > 50) {
      return " height55";
    } else if (percentage > 45) {
      return " height50";
    } else if (percentage > 40) {
      return " height45";
    } else if (percentage > 35) {
      return " height40";
    } else if (percentage > 30) {
      return " height35";
    } else if (percentage > 25) {
      return " height30";
    } else if (percentage > 20) {
      return " height25";
    } else if (percentage > 15) {
      return " height20";
    } else if (percentage > 10) {
      return " height15";
    } else if (percentage > 5) {
      return " height10";
    } else if (percentage > 0) {
      return " height05";
    } else {
      return " height00";
    }
  }
  indicator(value) {
    return (parseInt(this.props.total) * value) / 100;
  }
}
export default ImageChart;
