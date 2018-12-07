import Vuex from 'Vuex'

import mutations from './mutations'

const createStore = () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    mutations
  })
}

export default createStore