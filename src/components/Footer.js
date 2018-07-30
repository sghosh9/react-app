import React, { Component } from 'react';
import 'prismjs/prism.js';
import 'prismjs/themes/prism.css';

class Footer extends Component {
  render () {
    return (
        <div id="footbar" class="row text-center mt-2">
            <div class="col-12">
                <p class="foot-item pt-4">© 2002-2018 InfoSoft Global Private Limited. All Rights Reserved.</p>
            </div>
        </div>
    )
  }
}

export default Footer;


