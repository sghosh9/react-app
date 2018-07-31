import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import AngularGauge from 'fusioncharts/viz/angulargauge';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.fusion";
import "../../assets/css/fusioncharts.theme.fusion.css";

ReactFC.fcRoot(FusionCharts, AngularGauge);

const chartConfigs = {
  type: 'angulargauge',
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