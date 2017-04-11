import * as types from '../mutation-types';

const state = {
	isLoading: false,
}

const actions = {
	updateLoadingStatus({ commit }, payload) {
        commit(types.COMMON_LOADING_STATUS, payload)
    },
}

const getters = {
	isLoading: state => state.isLoading,
}

const mutations = {
    [types.COMMON_LOADING_STATUS](state, payload) {
        state.isLoading = payload.isLoading
    },
}

export default {
    state,
    actions,
    getters,
    mutations,
}