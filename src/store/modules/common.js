import * as types from '../mutation-types';
import api from '../../fetch/api'
const state = {
    isLoading: false,
}

const actions = {
    updateLoadingStatus({ commit }, payload) {
        commit(types.COMMON_LOADING_STATUS, payload)
    },
    // getToken({ commit }, param) {
    //     api.getUser(param).then(res => {
    //         commit(types.COMMON_TOKEN_INFO, res)
    //     })
    // },
}

const getters = {
    isLoading: state => state.isLoading,
    // token: state => state.token
}

const mutations = {
    [types.COMMON_LOADING_STATUS](state, payload) {
        state.isLoading = payload.isLoading
    },
    // [types.COMMON_TOKEN_INFO](state, res) {
    //     state.token = res
    //     // console.log(res.token)
    // },
}

export default {
    state,
    actions,
    getters,
    mutations,
}