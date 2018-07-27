import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts);

const chartConfigs = {
  type: 'column2d',
  width: 600,
  height: 400,
  dataFormat: 'json',
  dataSource: data
};

class SimpleColumn2D extends Component {
  render () {
    return (
      <ReactFC {...chartConfigs} />
    )
  }
}

export default SimpleColumn2D;
