//React dependencies
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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


//3:01 https://www.youtube.com/watch?v=eofpZPRUnP8&t=19s

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

  renderHome = (props) =>
    <Home />

  renderAboutMe = (props) =>
    <AboutMe />

    renderSkills = (props) =>
    <Skills />

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Outer>
        <Router>
          <div>
            <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backDrop}
            <Main>
              <Switch>
                <Route exact path="/" Component={this.renderHome} />
                <Route path="/about" render={this.renderAboutMe} />
                <Route path={"/skills"} render={this.renderSkills} />
              </Switch>
            </Main>
          </div>
        </Router>
      </Outer>
    );
  }
}

export default App;
