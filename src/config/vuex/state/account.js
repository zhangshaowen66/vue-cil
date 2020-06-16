import disp from '@/api/disp'
export default {
  state: {
    signedIn: false,
    session: undefined,
    nick: undefined,
    uid: undefined,
    username: undefined,
    tilte: '头部'
  },
  mutations: {
    _setTilte (state, aug) {
      state.tilte = aug
    }
  },
  action: {
    testDis () {
      disp.call(this, arguments)
    }
  }
}
