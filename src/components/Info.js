import React from 'react';
import CodeMirror from "react-codemirror";
import 'codemirror/mode/javascript/javascript';

var options = {
  tabSize: "4",
  smartIndent: true,
  lineNumbers: true,
  readOnly: true,
  theme: 'dracula',
  mode: 'javascript',
  viewportMargin: Infinity
};

var chartJSON = {
  chart: {
    caption: 'Countries With Most Oil Reserves [2017-18]',
    subCaption: 'In MMbbl = One Million barrels',
    xAxisName: 'Country',
    yAxisName: 'Reserves (MMbbl)',
    numberSuffix: 'K',
    theme: 'fusion'
  },
  data: [
    {
      label: 'Venezuela',
      value: '290'
    },
    {
      label: 'Saudi',
      value: '260'
    },
    {
      label: 'Canada',
      value: '180'
    },
    {
      label: 'Iran',
      value: '140'
    },
    {
      label: 'Russia',
      value: '115'
    },
    {
      label: 'UAE',
      value: '100'
    },
    {
      label: 'US',
      value: '30'
    },
    {
      label: 'China',
      value: '30'
    }
  ]
};

var code1 = 'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport FusionCharts from \'fusioncharts\';\nimport Charts from \'fusioncharts/fusioncharts.charts\';\nimport ReactFC from \'react-fusioncharts\';\nimport FusionTheme from \'fusioncharts/themes/fusioncharts.theme.fusion\';\n\nCharts(FusionCharts);\nFusionTheme(FusionCharts);\n\nconst myDataSource = ' + JSON.stringify(chartJSON, null, "\t") + ';\n\nconst chartConfigs = {\n  \ttype: \'column2d\',\n  \twidth: 600,\n  \theight: 400,\n  \tdataFormat: \'json\',\n  \tdataSource: myDataSource,\n};\n\nReactDOM.render(\n  \t<ReactFC {...chartConfigs} />,\n  \tdocument.getElementById(\'root\'),\n);';

var code2 = 'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport ReactFC from \'react-fusioncharts\';\n\n// Here import licensed version of FusionCharts\nimport FusionCharts from \'./path/to/fusioncharts\';\nimport Charts from \'./path/to/fusioncharts/fusioncharts.charts\';\n\n// Provide FusionCharts core and other modules to resolve\nReactFC.fcRoot(FusionCharts, Charts)\n\n// Rest of the application code';

var code3 = 'import React from \'react\';\nimport ReactDOM from \'react-dom\';\nimport ReactFC from \'react-fusioncharts\';\n\n// Here import licensed version of FusionCharts\nimport FusionCharts from \'./library_path/fusioncharts\';\nimport Charts from \'./library_path/fusioncharts/fusioncharts.charts\';\n\n// Resolve modules\nCharts(FusionCharts)\n\nReactDOM.render(\n\t<ReactFC\n\twidth="600"\n\theight="400"\n\ttype="column2d"\n\tdataSource={ /* Chart data source */ }\n\tfcLibrary={FusionCharts} // Provide FusionCharts library\n\t/>,\n\tdocument.getElementById(\'root\'),\n);\n\n// Rest of the application code';

class Banner extends React.Component {
  render() {
    return (
      <div className="container container-1200 info-wrapper pt-4">
        <div className="row">
          <div className="col">
            <div className="h2 mt-2">Quick Start</div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-3">
            <div className="h5">
              <span>Step 1: Install the React-FusionCharts wrapper framework</span>
            </div>
            <p className="code-desc">In the terminal run the following command:</p>
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c1">
                      <CodeMirror value={'$ npm install react-fusioncharts --save'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="code-desc">Also install fusionCharts, if it is not already installed:</p>
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c2">
                      <CodeMirror value={'$ npm install fusioncharts --save'} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-3">
            <div className="h5">
              <span>Step 2: Import the <a href="//www.npmjs.com/package/react-fusioncharts" target="_blank">ReactFC</a> component</span>
            </div>
            <p className="code-desc">After installing <a className="ref-link" href="//www.npmjs.com/package/react-fusioncharts" target="_blank">react-fusioncharts</a>, import it in your React app:</p>
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c3">
                      <CodeMirror value={code1} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p>
              <b>Using Licensed Version of <a className="ref-link" href="//www.fusioncharts.com/" target="_blank">FusionCharts</a></b>
            </p>
            <p className="code-desc">While using licensed version of <a className="ref-link" href="//www.fusioncharts.com/" target="_blank">FusionCharts</a>, you need to specify library as follows:
              <br />Specify library for all charts:
            </p>
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div className="codeMirrorDiv" id="c4">
                      <CodeMirror value={code2} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="code-desc">Specify library for a particular chart:</p>
            <div className="code-view mt-2">
              <div className="card-shadow">
                <div className="card-body p-0">
                  <div className="code-panel">
                    <div id="c5">
                      <CodeMirror value={code3} options={options} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-3">
            <div className="h5">Support</div>
            <p>
              <a className="ref-link" href="//github.com/fusioncharts/react-fusioncharts-component/issues" target="_blank">GitHub Issues</a>&nbsp;|&nbsp;
              <a className="ref-link" href="mailto:support@fusioncharts.com" target="_blank">Contact FusionCharts Support</a>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 pt-3">
            <div className="h5">Licensing</div>
            <p>React-FusionCharts module is licensed under open-source, distributed under the terms of the MIT/X11 License. You will
              still need to include FusionCharts in your page, as this project provides no direct functionality. You can download
              a free evaluation version&nbsp;
              <a className="ref-link" href="//www.fusioncharts.com/download/" target="_blank">here</a>. To use in a commercial environment, please&nbsp;
              <a className="ref-link" href="//www.fusioncharts.com/buy/" target="_blank">purchase a FusionCharts license</a>.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
