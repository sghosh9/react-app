import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

import data from './data.json';

ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '80%',
  dataFormat: 'json',
  dataSource: data
};

var defaultMessage = 'Click on the plot to see the value along with the label';

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    }

    this.trackPlotClick = this.trackPlotClick.bind(this);
    this.resetChart = this.resetChart.bind(this);
    this.dataPlotClick = this.dataPlotClick.bind(this);
  }

  trackPlotClick() {
    FusionCharts.addEventListener('dataplotClick', this.dataPlotClick);
    this.setState({
      message: defaultMessage
    });
  }

  dataPlotClick(eventObj, dataObj) {
    this.setState({
      message: ['You have clicked on plot ', <strong>{dataObj.categoryLabel}</strong>, ' whose value is ', <strong>{dataObj.displayValue}</strong>],
    });
  }

  resetChart() {
    FusionCharts.removeEventListener('dataplotClick', this.dataPlotClick);
    this.setState({
      message: ''
    });
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} />
        <div style={{ padding: '5px' }} id="message">
          { this.state.message || ['Click on ', <b>TRACK DATA PLOT CLICK</b>, ' button to listen to dataplotclick event']}
        </div>
        <button className='btn btn-outline-secondary btn-sm' onClick={this.trackPlotClick}>Track Data Plot Clicks</button>
        <button className='btn btn-outline-secondary btn-sm' onClick={this.resetChart}>Reset</button>
      </div>
    )
  }
}

export default Chart;
