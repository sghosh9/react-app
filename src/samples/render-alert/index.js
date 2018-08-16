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
  height: '85%',
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'You will see a notification here after chart completes rendering'
    };

    this.renderComplete = this.renderComplete.bind(this);
  }

  renderComplete() {
    this.setState({
      message: 'Chart has completed rendering'
    });
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} fcEvent-rendered={this.renderComplete}/>
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.message}</p>
      </div>
    )
  }
}

export default Chart;
