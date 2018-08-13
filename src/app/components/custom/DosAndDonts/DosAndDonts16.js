import React, { Component } from 'react';
import Example from './Example.js';

class DosAndDonts16 extends Component {
  render() {
    const typeN = require('./images/2.2-N.png');
    const typeY = require('./images/2.2-Y.png');
    return (
      <div>
        <div className="do-and-dont">
          <Example correct caption="Correct" text="" img={typeY} />
          <Example incorrect caption="Incorrect" text="" img={typeN} />
        </div>
      </div>
    );
  }
}

export default DosAndDonts16;
