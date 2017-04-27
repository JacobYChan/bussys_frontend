import * as types from '../mutation-types';
import api from '../../fetch/api'

const state = {
    messageList: [],
    messageDetail: {}
}

const actions = {
    get_message_list({ commit },params) {
        api.getMessageList(params).then(res => {
            commit(types.GET_MESSAGE_LIST, res)
        })
    },
    get_message_detail({ commit },id) {
        api.getMessageDetail(id).then(res => {
            commit(types.GET_MESSAGE_DETAIL, res)
        })
    },
}

const getters = {
    messageList: state => state.messageList,
    messageDetail: state => state.messageDetail
    
}

const mutations = {
    [types.GET_MESSAGE_LIST](state, res) {
        state.messageList = res.data
    },
    [types.GET_MESSAGE_DETAIL](state, res) {
        state.messageDetail = res.data
    },
}

export default {
    state,
    actions,
    getters,
    mutations,
}