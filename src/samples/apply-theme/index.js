import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.gammel";
import "../../assets/css/fusioncharts.theme.gammel.css";

ReactFC.fcRoot(FusionCharts, Column2D);

const chartConfigs = {
  type: 'Column2D',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  render () {
    return (
      <ReactFC {...chartConfigs} />
    )
  }
}

export default Chart;
