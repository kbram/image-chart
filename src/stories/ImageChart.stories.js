import React from "react";
import {storiesOf} from '@storybook/react'

import { ImageChart } from "../components/ImageChart";
import "./style.css";

const stories = storiesOf('App Test',module);

stories.add('App',()=>{
     return(  <ImageChart name="chart" dark={false} total={1200} value={1200} />);
});

