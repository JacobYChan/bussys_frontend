<template>
    <div class="message">
        <mt-header title="消息"
                   fixed></mt-header>
        <div class="messageBox">
            <div class="messageItem"
                 v-for="(item,index) in messageList">
                <div class="itemImg">
                    <img :src="item.business_logo" />
                </div>
                <div class="messageContent">
                    <h3>{{item.business_name}}</h3>
                    <p>{{item.content}}</p>
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
        <footbar></footbar>
    </div>
</template>

<script>
import footbar from '../../components/footer/footer.vue'
import { mapGetters } from 'vuex'
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
        }
    },
    created() {
        this.$store.dispatch('get_message_list')
    }
}
</script>
<style lang="scss" scoped>
@import '../../common/style/mixin';
.message {
    .messageBox {
        margin-bottom: 4rem;
        margin-top: 40px;
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
                    @include sc(.7rem, #000);
                    font-weight: 500;
                }
                p {
                    @include sc(.6rem, #666);
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
                .messageArticle{
                    width: 100%;
                    display: block;
                    margin-top: .2rem;
                }
                .messageTime{
                    @include sc(.6rem,#999);
                    margin: .5rem 0 0 0;
                }
            }
        }
    }
}
</style>
