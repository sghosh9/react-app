import React, { Component } from "react";
import FusionCharts from "fusioncharts/core";
import AngularGauge from "fusioncharts/viz/angulargauge";
import ReactFC from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/es/fusioncharts.theme.fusion";

import data from "./data.json";

ReactFC.fcRoot(FusionCharts, AngularGauge, FusionTheme);

const chartConfigs = {
  type: "angulargauge",
  width: "100%",
  height: "100%",
  dataFormat: "json",
  dataSource: data
};

class Chart extends Component {
  render() {
    return <ReactFC {...chartConfigs} />;
  }
}

export default Chart;
