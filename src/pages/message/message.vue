<template>
    <div class="message">
        <mt-header title="消息"
                   fixed></mt-header>
        <mt-loadmore :bottom-method="loadBottom"
                     ref="loadmore"
                     :bottom-all-loaded="allLoaded"
                     :autoFill="false">
            <div class="messageBox">
                <div class="messageItem"
                     v-for="(item,index) in msg">
                    <div class="itemImg">
                        <img :src="item.business_logo" />
                    </div>
                    <div class="messageContent">
                        <h3>{{item.business_name}}</h3>
                        <p>{{item.description}}</p>
                        <a class="messageLink"
                           v-if="item.url!==''"
                           :href="item.url">
                            <img :src="item.img">
                            <span>{{item.description}}</span>
                        </a>
                        <router-link class="messageArticle"
                                     v-else
                                     :to="{name:'messageDetail',params:{messageId:1}}">
                            <img :src="item.img">
                        </router-link>
                        <div class="messageTime">
                            {{item.time|fmtDate}}
                        </div>
                    </div>
                </div>
            </div>
        </mt-loadmore>
        <footbar></footbar>
    </div>
</template>

<script>
import footbar from '../../components/footer/footer.vue'
import { mapGetters } from 'vuex'
import api from '../../fetch/api'
export default {
    components: {
        footbar
    },
    computed: {
        ...mapGetters([
            'messageList'
        ])
    },
    data() {
        return {
            allLoaded: false,
            bottomStatus: '',
            msg: [],
            page: 1,
            totalPage: 1
        }
    },
    methods: {
        loadBottom() {
            this.page += 1;
            if (this.page >= this.totalPage) {
                this.allLoaded = true;
            }
            setTimeout(() => {
                api.getMessageList({ begin: (this.page - 1) * 5, offset: 5 }).then(res => {
                    if (res.code === 0) {
                        this.msg = this.msg.concat(res.data)
                        // console.log((this.page - 1) * 5 + "asdsadas")
                    } else {

                    }
                }).catch(error => {
                })
                this.$refs.loadmore.onBottomLoaded();
            }, 1500);
        },
    },

    created() {

        api.getMessageList({ begin: 0, offset: 5 }).then(res => {
            if (res.code === 0) {
                this.msg = res.data
            }
        })
        api.getMessageList({ begin: 0, offset: 10000 }).then(res => {
            if (res.code === 0) {
                this.totalPage = (res.data.length) / 5;
            }
        })

        // this.$store.dispatch('get_message_list', { begin: 0, offset: 5 })
    }
}
</script>
<style lang="scss">
@import '../../common/style/mixin';
.message {
    .mint-loadmore,
    {
        margin-bottom: 4rem;
    }
    .mint-loadmore-text {
        font-size: .6rem;
    }
    .messageBox {
        margin-bottom: 0rem;
        margin-top: 1.8rem;
        .messageItem {
            display: flex;
            padding: .5rem;
            border-bottom: 1px solid #eee;
            .itemImg {
                @include wh(2.4rem, 2rem);
                img {
                    @include wh(100%, 100%);
                }
            }
            .messageContent {
                text-align: left;
                margin-left: .5rem;
                width: 100%;
                h3 {
                    @include sc(.6rem, #000);
                    font-weight: 500;
                }
                p {
                    @include sc(.6rem, #666);
                    margin: .3rem 0;
                }
                .messageLink {
                    background-color: #ddd;
                    display: flex;
                    width: 100%;
                    margin-top: .2rem;
                    padding: .2rem 0rem;
                    img {
                        @include wh(1.5rem, 1.5rem);
                        margin: 0 .2rem;
                    }
                    span {
                        @include sc(.6rem, #000);
                        margin-left: .2rem;
                    }
                }
                .messageArticle {
                    width: 100%;
                    display: block;
                    margin-top: .2rem;
                    img {
                        width: 100%;
                    }
                }
                .messageTime {
                    @include sc(.6rem, #999);
                    margin: .5rem 0 0 0;
                }
            }
        }
    }
}
</style>
