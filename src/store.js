import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        qboxVisible: false,
        keyword: ""
    },
    mutations: {
        visible (state) {
            state.qboxVisible = true
        },
        invisible (state) {
            state.qboxVisible = false
        },
        setKeyword (state, key) {
            state.keyword = key
        }
    },
    getters: {
        getqboxVisible (state) {
            return state.qboxVisible
        },
        getKeyword (state) {
            return state.keyword
        }
    }
})