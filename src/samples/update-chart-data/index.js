import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import Column2D from 'fusioncharts/viz/column2d';
import ReactFC from 'react-fusioncharts';
import data from './data.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.fusion";
import "../../assets/css/fusioncharts.theme.fusion.css";

ReactFC.fcRoot(FusionCharts, Column2D);

const chartConfigs = {
  type: 'column2d',
  width: '100%',
  height: '75%',
  dataFormat: 'json',
  dataSource: data
};


class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = chartConfigs;

    this.updateData = this.updateData.bind(this);
  }

  getRandomNumber() {
    var max = 290, min = 30;
    return Math.round(((max - min) * Math.random()) + min);
  }

  updateData() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.data[2].value = this.getRandomNumber();
    prevDs.data[3].value = this.getRandomNumber();
    this.setState({
      dataSource: prevDs,
    });
  }

  render() {
    return (
      <div>
        <ReactFC {...this.state} />
        <br />
        <br />
        <center><button className="btn btn-custom" onClick={this.updateData}>Change Chart Data</button></center>
      </div>
    );
  }
}

export default Chart;
