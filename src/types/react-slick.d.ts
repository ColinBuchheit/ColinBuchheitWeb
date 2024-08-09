declare module 'react-slick' {
    import * as React from 'react';
  
    export interface Settings {
      dots?: boolean;
      infinite?: boolean;
      speed?: number;
      slidesToShow?: number;
      slidesToScroll?: number;
      autoplay?: boolean;
      autoplaySpeed?: number;
      pauseOnHover?: boolean;
      arrows?: boolean;
      nextArrow?: React.ReactElement;
      prevArrow?: React.ReactElement;
      responsive?: Array<{
        breakpoint: number;
        settings: Partial<Settings>;
      }>;
    }
  
    export default class Slider extends React.Component<Settings> {}
  }
  