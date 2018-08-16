import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import Pie2D from 'fusioncharts/viz/pie2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

import data from './data.json';

ReactFC.fcRoot(FusionCharts, Pie2D, FusionTheme);

const chartConfigs = {
  type: 'Pie2D',
  width: '100%',
  height: 400,
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chart: {}
    }

    this.renderComplete = this.renderComplete.bind(this);
    this.sliceMicrosoft = this.sliceMicrosoft.bind(this);
    this.resetChart = this.resetChart.bind(this);
  }

  renderComplete(chart) {
    this.state.chart = chart;
  }

  sliceMicrosoft() {
    this.state.chart.slicePlotItem(1, true);
  }

  resetChart() {
    this.state.chart.slicePlotItem(1, false);
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} onRender={this.renderComplete} />
        <button className='btn btn-outline-secondary btn-sm' onClick={this.sliceMicrosoft}>Slice out Microsoft</button>
        <button className='btn btn-outline-secondary btn-sm' onClick={this.resetChart}>Reset</button>
      </div>
    )
  }
}

export default Chart;
