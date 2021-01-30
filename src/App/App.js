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
import AddList from '../AddList/AddList'


class App extends Component {
    
  state = {
    bars: [],
    lists: [],
    results: []
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/bars`),
      fetch(`${config.API_ENDPOINT}/lists`),
      fetch(config.API_SEARCH)
    ])
      .then(([barsRes, listsRes, resultsRes]) => {
        if (!barsRes.ok)
          return barsRes.json().then(e => Promise.reject(e))
        if (!listsRes.ok)
          return listsRes.json().then(e => Promise.reject(e))
        if (!resultsRes.ok)
          return resultsRes.json().then(e => Promise.reject(e))

        return Promise.all([
          barsRes.json(),
          listsRes.json(),
          resultsRes.json()
        ])
      })
      .then(([bars, lists, results]) => {
        this.setState({ bars, lists, results })
      })
      .catch(error => {
        console.error({ error })
      })
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
        <Route path='/lists' render={(props) => (
          <Lists {...props} lists={this.state.lists}/>
        )} />
        <Route path='/search' render={(props) => (
          <Search {...props} results={this.state.results}/>
        )} />
        <Route path='/about' component={About} />
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
          <Route
            path='/add-list'
            component={AddList}
          />
      </>
    )
  }

  render() {
    const value = {
      bars: this.state.bars,
      lists: this.state.lists,
      results: this.state.results,
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
