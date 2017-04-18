<template>
    <div class="messageDetail">
        <mt-header title="消息详情"
                   fixed>
            <router-link to="/message"
                         slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <div class="head">
            <h3>{{messageDetail.title}}</h3>
            <p>{{messageDetail.time|filterDate('YYYY-MM-dd hh:mm:ss')}}</p>
            <!-- <span>内容摘要：{{articledetail.describtion}}</span> -->
        </div>
        <div v-html="messageDetail.content"
             class="content"></div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'messageDetail'
        ])
    },
    created() {
        this.$store.dispatch('get_message_detail', this.$route.params.messageId)
    },
}
</script>
<style lang="scss" scoped>
.messageDetail {
    .head {
        padding: .5rem;
        line-height: 1.8;
        background-color: #fff;
        margin-top: 40px;
        text-align: left;
        h3 {
            font-size: .8rem;
        }
        p {
            font-size: .6rem;
            color: #666;
        }
        span {
            font-size: .7rem;
        }
    }
    .content {
        height: 100%;
        background-color: #fff;
        padding: .5rem .5rem .5rem .5rem;
        font-size: .7rem;
        text-align: left;
        margin-top: .2rem;
        img {
            width: 100%;
            height: 10rem;
        }
    }
}
</style>
