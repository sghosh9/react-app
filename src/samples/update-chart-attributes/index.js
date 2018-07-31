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

    this.changeBackgroundColor = this.changeBackgroundColor.bind(this);
    this.changeCaptionTextAlignment = this.changeCaptionTextAlignment.bind(this);
  }

  changeBackgroundColor() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.chart.bgColor = '#efefef';
    this.setState({
      dataSource: prevDs,
    });
  }

  changeCaptionTextAlignment() {
    const prevDs = Object.assign({}, this.state.dataSource);
    prevDs.chart.captionAlignment = 'left';
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
        <center>
          <button className="btn btn-custom" onClick={this.changeBackgroundColor}>Change Background</button>
          <button className="btn btn-custom" onClick={this.changeCaptionTextAlignment}>Change Caption Alignment</button>
        </center>
      </div>
    );
  }
}

export default Chart;
