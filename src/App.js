//React dependencies
import React, { Component } from 'react';

//Components
import Toolbar from './components/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
			 <Toolbar />
       <SideDrawer />
       <Backdrop />
			 <main style={{marginTop: '64px'}}>
				 <p>Hey everyone here is a paragraph</p>
			 </main>
      </div>
    );
  }
}

export default App;
