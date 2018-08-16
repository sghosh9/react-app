import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import GammelTheme from 'fusioncharts/themes/es/fusioncharts.theme.gammel';

import data from './data.json';

ReactFC.fcRoot(FusionCharts, Column2D, GammelTheme);

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
