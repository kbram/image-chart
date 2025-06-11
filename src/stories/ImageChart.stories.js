import React from "react";
import { storiesOf } from "@storybook/react";

import { ImageChart } from "../components/ImageChart";
import myCustomMapImage from "../components/ImageChart/image/map.png";
import myCustomMountainImage from "../components/ImageChart/image/mountain.png";

const stories = storiesOf("App Test", module);

stories.add("App", () => {
  return (
    <ImageChart
      dark={false}
      cardTextColor="#000"
      name="chart"
      type="mountain"
      title="Occupancy Chart"
      total={1200}
      value={1000}
      image={myCustomMountainImage}
      cardBackColor="#f8c7ff" 
      lineColor="#fa2eec" 
      highLightColor="#fa2eec"
    />
  );
});
