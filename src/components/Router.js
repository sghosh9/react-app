import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import config from '../samples/config.json'

import SampleWrapper from './SampleWrapper'

import Pie3DChart from '../samples/3d-pie-chart'
import ChangeChartTypeRuntime from '../samples/change-chart-type-runtime'
import ClientSideExporting from '../samples/client-side-exporting'
import ColumnAreaLineCombiChart from '../samples/column-area-line-combi-chart'
import DrillDown from '../samples/drill-down'
import FetchDataFromJsonUrl from '../samples/fetch-data-from-json-url'
import FetchDataFromXmlUrl from '../samples/fetch-data-from-xml-url'
import RenderFusionmaps from '../samples/render-fusionmaps'
import SimpleColumnChart from '../samples/simple-column-chart'
import SimpleMap from '../samples/simple-map'
import SimpleWidget from '../samples/simple-widget'
import TriggerEventsFromChart from '../samples/trigger-events-from-chart'
import UpdateChartAttributes from '../samples/update-chart-attributes'
import UpdateChartData from '../samples/update-chart-data'
import UseAnnotations from '../samples/use-annotations'

class Router extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="row">

          <div className="col-md-3">
            <div className="list-group" role="tablist">
              <nav>
                <ul>
                  {/* { Object.keys(config.sampleProps).map(i => <li key={i}><Link to={config.sampleProps[i].directory}>{config.sampleProps[i].title}</Link></li> ) } */}
                  { Object.keys(config.sampleProps).map(i => <li key={i}><Link to={config.sampleRouteMapping[i]}>{config.sampleProps[i].title}</Link></li> ) }
                </ul>
              </nav>
            </div>
          </div>

          <div className="col-md-9" ng-controller="DemoController">
              <Route path='/simple-column-chart' component={SampleWrapper(SimpleColumnChart, <pre className="code-tab language-javascript"><code className="ng-binding"> data will be render here </code></pre>)} />
              <Route path='/3d-pie-chart' component={Pie3DChart} />
              <Route path='/column-area-line-combi-chart' component={ColumnAreaLineCombiChart} />
              <Route path='/change-chart-type-runtime' component={ChangeChartTypeRuntime} />
              <Route path='/client-side-exporting' component={ClientSideExporting} />
              <Route path='/drill-down' component={DrillDown} />
              <Route path='/fetch-data-from-json-url' component={FetchDataFromJsonUrl} />
              <Route path='/fetch-data-from-xml-url' component={FetchDataFromXmlUrl} />
              <Route path='/render-fusionmaps' component={RenderFusionmaps} />
              <Route path='/simple-map' component={SimpleMap} />
              <Route path='/simple-widget' component={SimpleWidget} />
              <Route path='/trigger-events-from-chart' component={TriggerEventsFromChart} />
              <Route path='/update-chart-attributes' component={UpdateChartAttributes} />
              <Route path='/update-chart-data' component={UpdateChartData} />
              <Route path='/use-annotations' component={UseAnnotations} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default Router;

