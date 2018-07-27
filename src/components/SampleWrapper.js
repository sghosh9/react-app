import React, { Component } from 'react';






export default function (Chart, data) {
  return class SimpleColumn2D extends Component {
    render () {
      return (
        <div> 
          <Chart/>
          <pre className="code-tab language-javascript"><code className="ng-binding"> {data} </code></pre>
        </div>
      )
    }
  };
};
