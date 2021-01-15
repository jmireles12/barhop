import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Lists from '../Lists/Lists'
import HomePage from '../HomePage/HomePage'
import Search from '../Search/Search'
import About from '../About/About'
import Contact from '../Contact/Contact'
import BarList from '../BarList/BarList'
import config from '../config'
import './App.css'
import ApiContext from '../ApiContext'
import BarContent from '../BarContent/BarContent'


class App extends Component {
    
  state = {
    bars: [],
    lists: []
  }

  componentDidMount() {
    setTimeout(() => this.setState(config.API_ENDPOINT))
  }

  handleAddList = list => {
    this.setState({
      lists: [
        ...this.state.lists,
        list
      ]
    })
  }

  handleAddBar = bar => {
    this.setState({
      bars: [
        ...this.state.bars,
        bar
      ]
    })
  }

  handleDeleteList = listId => {
    this.setState({
      lists: this.state.lists.filter(list => list.id !== listId)
    })
  }

  handleDeleteBar = barId => {
    this.setState({
      bars: this.state.bars.filter(bar => bar.id !== barId)
    })
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
      addList: this.handleAddList,
      addBar: this.handleAddBar,
      deleteBar: this.handleDeleteBar,
      deleteList: this.handleDeleteList
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
