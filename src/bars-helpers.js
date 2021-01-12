export const findList = (lists=[], listId) =>
lists.find(list => list.id === listId)

export const findBar = (bars=[], barId) =>
bars.find(bar => bar.id === barId)

export const getBarsForList = (bars=[], listId) => (
(!listId)
  ? bars
  : bars.filter(bar => bar.listId === listId)
)

export const countBarsForList = (bars=[], listId) =>
bars.filter(bar => bar.listId === listId).length
