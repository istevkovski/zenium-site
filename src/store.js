import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    debug: true,
    state: {
        navActive: 1
    },
    mutations: {
        setNavActive(state, data) {
            state.navActive = data
        }
    }
});