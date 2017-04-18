import * as types from '../mutation-types';
import api from '../../fetch/api'

const state = {
    memberInfo: {},
}

const actions = {
    get_member_info({ commit }, params) {
        api.getMemberInfo(params).then(res => {
            commit(types.GET_MEMBER_INFO, res)
        })
    },
}

const getters = {
    memberInfo: state => state.memberInfo,
}

const mutations = {
    [types.GET_MEMBER_INFO](state, res) {
        state.memberInfo = res.data
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
}