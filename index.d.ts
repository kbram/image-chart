// d:\My Projects\try\image-chart\index.d.ts

import * as React from 'react';

export interface ImageChartProps {
  name: string;
  type?: 'building' | 'map' | 'map2' | 'mountain' | 'my';
  image?: string; // Path or URL to the image, used when type is 'my'
  title?: string;
  total?: number;
  value?: number;
  dark?: boolean;
  cardTextColor?: string;
  cardBackColor?: string;
  lineColor?: string;
  highLightColor?: string;
  fontStyle?: string;
  cardSideTextColor?: string;
  // Add any other props your component accepts
}

export class ImageChart extends React.Component<ImageChartProps> {}
