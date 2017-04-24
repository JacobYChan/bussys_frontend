import * as types from '../mutation-types';
import api from '../../fetch/api'

const state = {
    activityInfo: {},
    memberList: [],
    prize: {}
}

const actions = {
    get_activity_info({ commit }, params) {
        api.getActivityInfo(params).then(res => {
            commit(types.GET_ACTIVITY_INFO, res)
        })
    },
    get_member_list({ commit }, params) {
        api.getMemberList(params).then(res => {
            commit(types.GET_MEMBER_LIST, res)
        })
    },
    get_prize({ commit }, params) {
        api.getPrize(params).then(res => {
            commit(types.GET_PRIZE, res)
        })
    },
}

const getters = {
    activityInfo: state => state.activityInfo,
    memberList: state => state.memberList,
    prize: state => state.prize,

}

const mutations = {
    [types.GET_ACTIVITY_INFO](state, res) {
        state.activityInfo = res.data
    },
    [types.GET_MEMBER_LIST](state, res) {
        state.memberList = res.data
    },
    [types.GET_PRIZE](state, res) {
        state.prize = res
    },
}

export default {
    state,
    actions,
    getters,
    mutations,
}