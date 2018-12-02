import Vuex from "Vuex"

const store = new Vuex({
    state: {
        count: 0
    },
    mutations: {
        add(state){
            state.count++
        }
    }
})