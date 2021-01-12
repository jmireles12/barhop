import React from 'react'

export default React.createContext({
  bars: [],
  lists: [],
  createList: () => {},
  addBar: () => {},
  deleteBar: () => {},
  deleteList: () => {}
})