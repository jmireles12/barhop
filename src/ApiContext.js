import React from 'react'

export default React.createContext({
  bars: [],
  lists: [],
  addList: () => {},
  addBar: () => {},
  deleteBar: () => {},
  deleteList: () => {}
})