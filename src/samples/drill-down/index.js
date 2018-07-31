import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import Pie2D from 'fusioncharts/viz/pie2d';
import Linked from 'fusioncharts/features/linkedcharts';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.fusion";
import "../../assets/css/fusioncharts.theme.fusion.css";

ReactFC.fcRoot(FusionCharts, Column2D, Pie2D, Linked);

const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource: data
};
const alterChart = (chart) => {
  chart.configureLink({
    type: 'pie2d',
    width: '500',
    overlayButton: {
      message: 'Back',
      fontColor: '880000',
      bgColor: 'FFEEEE',
      borderColor: '660000',
    },
  }, 0);
};

class Chart extends Component {
  render () {
    return (
      <ReactFC {...chartConfigs} onRender={alterChart} />
    )
  }
}

export default Chart;
