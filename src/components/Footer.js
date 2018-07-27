import React, { Component } from 'react';
import 'prismjs/prism.js';
import 'prismjs/themes/prism.css';

class Footer extends Component {
  render () {
    return (

<div className="row">
<div className="col-md-12">
    <h2>QuickStart</h2>

    <h3>Step 1: Install the <code>React-FusionCharts</code> wrapper framework</h3>
    <p>In the terminal run the following command:</p>
    <pre className="code-tab language-javascript"><code>$ npm install react-fusioncharts --save</code></pre>
    <p>Also install <code>FusionCharts</code>, if it is not already installed:</p>
    <pre className="code-tab language-javascript"><code>$ npm install fusioncharts --save</code></pre>

    <h3>Step 2: Import the <code>ReactFC</code> component</h3>
    <p>After installing <code>react-fusioncharts</code>, import it in your React app</p>
    <pre className="code-tab language-javascript"><code>{`import React from 'react';
import ReactDOM from 'react-dom';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

const myDataSource = {
    chart: {
    caption: 'Harry\'s SuperMart',
    subCaption: 'Top 5 stores in last month by revenue',
    numberPrefix: '$',
    theme: 'ocean',
    },
    data: [
    {
        label: 'Bakersfield Central',
        value: '880000',
    },
    {
        label: 'Garden Groove harbour',
        value: '730000',
    },
    {
        label: 'Los Angeles Topanga',
        value: '590000',
    },
    {
        label: 'Compton-Rancho Dom',
        value: '520000',
    },
    {
        label: 'Daly City Serramonte',
        value: '330000',
    },
    ],
};

const chartConfigs = {
    type: 'column2d',
    width: 600,
    height: 400,
    dataFormat: 'json',
    dataSource: myDataSource,
};

ReactDOM.render(
    <ReactFC {...chartConfigs} />,
    document.getElementById('root'),
);`}</code></pre>

<p>Using Licensed Version of <code>FusionCharts</code></p>
While using licensed version of <code>FusionCharts</code>, you need to specify library as follows:
Specify library for all charts:

<pre className="code-tab language-javascript"><code className="ng-binding">{`import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';

// Here import licensed version of FusionCharts
import FusionCharts from './path/to/fusioncharts';
import Charts from './path/to/fusioncharts/fusioncharts.charts';

// Provide FusionCharts core and other modules to resolve
ReactFC.fcRoot(FusionCharts, Charts)

// Rest of the application code`}</code></pre>

Specify library for a particular chart:
<pre className="code-tab language-javascript"><code className="ng-binding">{`import React from 'react';
import ReactDOM from 'react-dom';
import ReactFC from 'react-fusioncharts';

// Here import licensed version of FusionCharts
import FusionCharts from './library_path/fusioncharts';
import Charts from './library_path/fusioncharts/fusioncharts.charts';

// Resolve modules
Charts(FusionCharts)

ReactDOM.render(
    <ReactFC
    width="600"
    height="400"
    type="column2d"
    dataSource={ /* Chart data source */ }
    fcLibrary={FusionCharts} // Provide FusionCharts library
    />,
    document.getElementById('root'),
);

// Rest of the application code`}
</code></pre>

    <h3>Community</h3>
    <p><a href="https://github.com/fusioncharts/react-fusioncharts-component">Github Repo</a> | <a href="https://github.com/fusioncharts/react-fusioncharts-component/issues">Issues</a> | <a href="http://twitter.com/fusioncharts">FusionCharts Twitter</a> | <a href="http://stackoverflow.com/questions/tagged/fusioncharts">Stack Overflow</a></p>

    <h3>Support</h3>
    <p>Simply open up a <a href="https://github.com/fusioncharts/react-fusioncharts-component/issues/new">Github</a> issue with your query, bug report, or suggestion.</p>

    <h3>Licensing</h3>
    <p>React-FusionCharts is an open-source resouorce, distributed under the terms of the MIT/X11 License. You will still need to include FusionCharts in your page, as this project provides no direct functionality. You can download a free evaluation version <a href="http://fusioncharts.com/download/">here</a>.</p>    
    <p>FusionCharts is <a href="http://www.fusioncharts.com/download/free/">free for non-commercial and personal use</a>. To use in a commercial environment, please purchase a FusionCharts license.</p>
</div>
</div>

    )
  }
}

export default Footer;


