import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import Bar2D from 'fusioncharts/viz/bar2d';
import Line from 'fusioncharts/viz/line';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.fusion";
import "../../assets/css/fusioncharts.theme.fusion.css";

ReactFC.fcRoot(FusionCharts, Column2D, Bar2D, Line);

const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '100%',
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = chartConfigs;

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      type: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <br />
        <br />
        <center>
          <select onChange={this.onChange}>
            <option value="column2d">Column 2D Chart</option>
            <option value="bar2d">Bar 2D Chart</option>
            <option value="line">Line 2D Chart</option>
          </select>
        </center>
      </div>
    );
  }
}

export default Chart;
