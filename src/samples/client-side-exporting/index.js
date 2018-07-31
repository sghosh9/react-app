import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/charts';
// import Column2D from 'fusioncharts/viz/column2d';
// import StackedColumn2D from 'fusioncharts/viz/stackedcolumn2d';
// import ExportModule from "fusioncharts/features/export-module";
// import BatchExport from "fusioncharts/features/batchexport";
import ReactFC from 'react-fusioncharts';
import data1 from './data1.json';
import data2 from './data2.json';
// import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

import "../../assets/js/fusioncharts.theme.fusion";
import "../../assets/css/fusioncharts.theme.fusion.css";

// ReactFC.fcRoot(FusionCharts, Column2D, StackedColumn2D, ExportModule, BatchExport);
ReactFC.fcRoot(FusionCharts, Charts);

const chart1Configs = {
  type: 'column2d',
  width: '100%',
  height: 300,
  dataFormat: 'json',
  dataSource: data1
};
const chart2Configs = {
  type: 'stackedcolumn2d',
  width: '80%',
  height: 500,
  dataFormat: 'json',
  dataSource: data2
};

class Chart extends Component {
  constructor() {
    super();
    this.exportChart = this.exportChart.bind(this);
  }

  exportChart(e) {
    FusionCharts.batchExport({
      exportFormat: 'pdf',
    });
  }

  render () {
    return (
      <div>
        <ReactFC {...chart1Configs} />
        <ReactFC {...chart2Configs} />
        <center><button className="btn btn-custom" onClick={this.exportChart}>Export both charts as a single PDF</button></center>
      </div>
    )
  }
}

export default Chart;
