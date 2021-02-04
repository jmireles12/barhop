import React from 'react'

export default React.createContext({
  bars: [],
  lists: [],
  results: [],
  addList: () => {},
  addBar: () => {},
  addInput: () => {},
  deleteBar: () => {},
  deleteList: () => {}
})