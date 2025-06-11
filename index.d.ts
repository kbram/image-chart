import * as React from 'react';

export interface ImageChartProps {
  name: string;
  type?: 'building' | 'map' | 'map2' | 'mountain' | 'my';
  image?: string;
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
}

export class ImageChart extends React.Component<ImageChartProps> {}