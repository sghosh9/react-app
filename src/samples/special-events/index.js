import React, { Component } from 'react';
import FusionCharts from 'fusioncharts/core';
import DragColumn2D from 'fusioncharts/viz/dragcolumn2d';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/es/fusioncharts.theme.fusion';

import data from './data.json';

ReactFC.fcRoot(FusionCharts, DragColumn2D, FusionTheme);

const chartConfigs = {
  type: 'dragcolumn2d',
  width: '100%',
  height: '85%',
  dataFormat: 'json',
  dataSource: data
};

class Chart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'You have dragged a plot of ______ dataset, its previous value was _______ and its current value is _______',
    };

    this.dataplotDragEnd = this.dataplotDragEnd.bind(this);
  }

  dataplotDragEnd(eventObj, dataObj) {
    var prevValue = FusionCharts.formatNumber(dataObj.startValue.toFixed(2));
    var curValue = FusionCharts.formatNumber(dataObj.endValue.toFixed(2));
    this.setState({
      message: ["You have dragged a plot of the ", <strong>{eventObj.data.datasetName}</strong>, " dataset, its previous value was ", <strong>{prevValue}</strong>, " and its current value is ", <strong>{curValue}</strong>]
    });
  }

  render () {
    return (
      <div>
        <ReactFC {...chartConfigs} fcEvent-dataplotDragEnd={this.dataplotDragEnd}/>
        <p style={{ padding: '10px', background: '#f5f2f0' }}>{this.state.message}</p>
      </div>
    )
  }
}

export default Chart;
