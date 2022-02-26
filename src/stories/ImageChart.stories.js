import React from "react";
import {storiesOf} from '@storybook/react'

import { ImageChart } from "../components/ImageChart";


const stories = storiesOf('App Test',module);

stories.add('App',()=>{
     return(<ImageChart dark={true} cardTextColor="#fff" name="chart" type="map"  title="Occupancy"  total={1200} value={520} />);
});

