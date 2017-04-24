import * as types from '../mutation-types';
import api from '../../fetch/api'

const state = {
    memberInfo: {},
    goldCoin: 0,
    tickets: 0,
    redPacket: 0,

}

const actions = {
    get_member_info({ commit }, params) {
        api.getMemberInfo(params).then(res => {
            commit(types.GET_MEMBER_INFO, res)
        })
    },
    get_member_gold_coin({ commit }, params) {
        api.getMemberGoldCoin(params).then(res => {
            commit(types.GET_GOLD_COIN, res)
        })
    },
    get_member_red_packet({ commit }, params) {
        api.getMemberRedPacket(params).then(res => {
            commit(types.GET_RED_PACKET, res)
        })
    },
    get_member_ticket({ commit }, params) {
        api.getMemberTickets(params).then(res => {
            commit(types.GET_TICKETS_AMOUNT, res)
        })
    },
}

const getters = {
    memberInfo: state => state.memberInfo,
    goldCoin: state => state.goldCoin,
    redPacket: state => state.redPacket,
    tickets: state => state.tickets
}

const mutations = {
    [types.GET_MEMBER_INFO](state, res) {
        state.memberInfo = res.data
    },
    [types.GET_GOLD_COIN](state, res) {
        state.goldCoin = res.result
    },
    [types.GET_RED_PACKET](state, res) {
        state.redPacket = res.result
    },
    [types.GET_TICKETS_AMOUNT](state, res) {
        state.tickets = res.data
    }
}

export default {
    state,
    actions,
    getters,
    mutations,
}