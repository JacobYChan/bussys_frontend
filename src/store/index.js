import Vue from 'vue'
import Vuex from 'vuex'
import common from './modules/common'
import message from './modules/message'
import activity from './modules/activity'
import memberInfo from './modules/memberInfo'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        common,
        message,
        activity,
        memberInfo
    }
})