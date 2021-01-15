import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Lists from './Lists/Lists'
import HomePage from './HomePage/HomePage'
import Search from './Search/Search'
import About from './About/About'
import Contact from './Contact/Contact'
import BarList from './BarList/BarList'
import Bar from './Bar/Bar'
import config from './config'
import './App.css'
import ApiContext from './ApiContext'
import BarContent from './BarContent/BarContent'


class App extends Component {
    
  state = {
    bars: [],
    lists: []
  }

  componentDidMount() {
    setTimeout(() => this.setState(config.API_ENDPOINT))
  }

  renderNav() {
    return (
      <>
        <Route path='/' exact component={HomePage} />
        <Route path='/lists' component={Lists} />
        <Route path='/search' component={Search} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
      </>
    )
  }

  renderBarLists() {
    return (
      <>
          {['/list/:listId'].map(path =>
              <Route
                exact
                key={path}
                path={path}
                component={BarList}
              />
          )}
          <Route
            path='/bar/:barId'
            component={BarContent}
          />
      </>
    )
  }

  render() {
    const value = {
      bars: this.state.bars,
      lists: this.state.lists,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className="App">
          <Header />
          {this.renderNav()}
          {this.renderBarLists()}
          <Footer/>
        </div>  
      </ApiContext.Provider>
      
    );  
  }
}

export default App;
