export default function ({commit}, {data, callback, failback}) {
  if (data.code === 1) {
    commit('_setTilte', data.title)
    if (typeof callback === "function") callback()
  } else {
    if (typeof failback === 'function') failback()
  }
}
