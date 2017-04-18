<template>
    <div class="member">
        <mt-header title="我"></mt-header>
        <mt-cell :title="memberInfo.nickname"
                 to="/member/info"
                 is-link>
            <img slot="icon"
                 v-lazy="memberInfo.headimgurl"
                 width="60"
                 height="60">
        </mt-cell>
        <mt-cell title="订单"
                 to=""
                 is-link>
            <i slot="icon"
               class="iconfont icon-dingdan"
               width="24"
               height="24"></i>
        </mt-cell>
        <mt-cell title="中奖"
                 to=""
                 is-link
                 style="margin:0">
            <i slot="icon"
               class="iconfont icon-jiang"
               width="24"
               height="24"></i>
        </mt-cell>
        <mt-cell title="钱包"
                 to=""
                 is-link
                 style="margin:0">
            <span>金币, 现金</span>
            <i slot="icon"
               class="iconfont icon-qianbao"
               width="24"
               height="24"></i>
        </mt-cell>
        <mt-cell title="退出"
                 to=""
                 is-link>
            <i slot="icon"
               class="iconfont icon-shezhi"
               width="24"
               height="24"></i>
        </mt-cell>
        <footbar></footbar>
    </div>
</template>

<script>
import footbar from '../../components/footer/footer.vue'
import { mapGetters } from 'vuex'
import { getStore, setStore, removeStore } from '../../config/mUtils'
export default {
    components: {
        footbar
    },
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'memberInfo'
        ])
    },
    created() {
        this.$store.dispatch('get_member_info', { token: getStore('token') })
    }
}

</script>
<style lang="scss">
@import '../../common/style/mixin';
.member {
    background-color: #efeff4;
    position: absolute;
    width: 100%;
    height: 100%;
    .mint-cell {
        margin-top: .8rem;
        .mint-cell-wrapper {
            text-align: left;
            background-image: none;
            .mint-cell-title {
                margin: .5rem 0;
                .iconfont {
                    @include sc(1rem, #0eadfe);
                }
                span {
                    @include sc(.7rem, #000);
                    margin-left: .4rem;
                    position: relative;
                    top: -.1rem;
                }
                img {
                    @include borderRadius(.2rem);
                    margin-right: .6rem;
                }
            }
            .mint-cell-value {
                span {
                    @include sc(.6rem, #999);
                }
            }
        }
    }
}
</style>