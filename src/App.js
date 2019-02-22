//React dependencies
import React, { Component } from 'react'

//styled
import Outer from './styled/Outer.js'

//Components
import Toolbar from './components/Toolbar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import Backdrop from './components/Backdrop/Backdrop'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Skills from './components/Skills'
import Main from './components/Main'




class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Outer>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <Main>
          <Home />
          <AboutMe />
          <Skills />
        </Main>
      </Outer>
    );
  }
}

export default App;
