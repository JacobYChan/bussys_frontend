<template>
    <div class="message">
        <mt-header title="消息"
                   fixed></mt-header>
        <div class="messageItem" v-for="(item,index) in messageList">
            <div class="itemImg">
                <img :src="item.business_logo" />
            </div>
            <div class="messageContent">
                <h3>{{item.business_name}}</h3>
                <p>{{item.content}}</p>
                <router-link class="messageLink"
                             tag="div"
                             v-if="item.url!==''"
                             :to="{path:'item.url'}">
                    <img :src="item.img">
                    <span>{{item.description}}</span>
                </router-link>
                <router-link class="messageArticle" v-else :to="{path:'messageDetail',params:{messageId:1}}">
                    <img :src="item.img">
                </router-link>
                <div class="messageTime">
                    {{item.time|fmtDate}}
                </div>
            </div>
        </div>
        <footbar></footbar>
    </div>
</template>

<script>
import footbar from '../../components/footer/footer.vue'
export default {
    components: {
        footbar
    },
    data() {
        return {
            messageList:[
                {business_logo:'http://wx.jsheyun.cn/logo.png',business_name:'来摇吧',img:'http://wx.jsheyun.cn/logo.png',
                content:'抵制韩货',description:'打响制裁乐天第一枪',time:'1492141537'},
                 {business_logo:'http://wx.jsheyun.cn/logo.png',business_name:'来摇吧',img:'http://wx.jsheyun.cn/logo.png',
                content:'抵制韩货',description:'打响制裁乐天第一枪',time:'1492141537'},
                 {business_logo:'http://wx.jsheyun.cn/logo.png',business_name:'来摇吧',img:'http://wx.jsheyun.cn/logo.png',
                content:'抵制韩货',description:'打响制裁乐天第一枪',time:'1492141537'}
            ]
        }
    },
    created() {
        document.title = "公交车摇一摇";
    }
}
</script>
<style lang="scss" scoped>

</style>
