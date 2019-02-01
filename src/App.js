//React dependencies
import React, { Component } from 'react';

//Components
import Toolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
			 <Toolbar />
			 <main style={{marginTop: '64px'}}>
				 <p>Hey everyone here is a paragraph</p>
			 </main>
      </div>
    );
  }
}

export default App;
