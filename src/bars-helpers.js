export const findList = (lists=[], listid) =>
lists.find(list => list.id === listid)

export const findBar = (bars=[], barId) =>
bars.find(bar => bar.id === barId)

export const getBarsForList = (bars=[], listid) => (
(!listid)
  ? bars
  : bars.filter(bar => bar.listid === listid)
)

export const countBarsForList = (bars=[], listid) =>
bars.filter(bar => bar.listid === listid).length

export const getResults = (results=[], place_id) => (
  (!place_id)
    ? results
    : results.filter(result => result.place_id === place_id)
)