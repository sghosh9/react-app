import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import Pie3D from 'fusioncharts/viz/pie3d';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.fusion";
import "../../assets/css/fusioncharts.theme.fusion.css";

ReactFC.fcRoot(FusionCharts, Pie3D);

const chartConfigs = {
  type: 'Pie3D',
  width: 600,
  height: 400,
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
