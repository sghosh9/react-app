import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
<div className="row">
<div className="masthead">
    <ul className="nav nav-pills pull-right">
        <li><a href="http://fusioncharts.com/">FusionCharts Home</a></li>
    </ul>
    <h3><a href="http://fusioncharts.github.io/react-fusioncharts/"><img src="http://www.fusioncharts.com/theme/210x38xlogo.png.pagespeed.ic.KZD9tJ7qIK.png" className="logo" alt="FusionCharts"></img></a></h3>
</div>
<div className="jumbotron">
    <img src="./assets/images/ng-fc-logo.png" className="logo" alt="FusionCharts" ></img>
    <h1>React-FusionCharts</h1>
    <p>An easy-to-use, lightweight React component for the FusionCharts JavaScript Charting Library</p>
</div>
<div className="row">
    <div className="col-md-4">
        <h3>About React-FusionCharts</h3>
        <p>
        The React-FusionCharts component lets you easily include FusionCharts in your React projects and add interactive charts to your React applications.
        </p>
    </div>
    <div className="col-md-4 ">
        <h3>Features</h3>
          <ul>
            <li>Adds a chart using just one single component.</li>
            <li>Auto-updates the chart object when the data source is modified.</li>
            <li>Adds a chart from a JSON URL, from a XML URL, or using props Binding.</li>
            <li>Allows you to enable interactivity between Javascript charts.</li>
            <li>Offers advanced control by giving you access to the complete FusionCharts object (containing the chart configuration).</li>
          </ul>
    </div>
    <div className="col-md-4">
    </div>
</div>
</div>    
    )
  }
}

export default Header;

