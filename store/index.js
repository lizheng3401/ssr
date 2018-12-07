import Vue from 'Vue'
import Vuex from 'Vuex'

Vue.use(Vuex)

const store = () => new Vuex.store({
    state:{
        counter: 0
    },
    mutations:{
        increment(state){
            state.counter++
        }
    }
})

export default store