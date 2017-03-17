<template>
    <div>
        <div class="welcome">
            <section class="head margin">
                <h3>嗨！我是小瑶！</h3>
                <img v-lazy="head_img">
                <p>很高兴和您成为摇一摇里的新朋友</p>
                <p>每次摇一摇都有惊喜等你哦，跟我一起摇起来吧！</p>
            </section>
            <hgroup>
                <section>
                    <i class="iconfont icon-yu"></i>
                    <p>购物时可用<em>余额</em>抵扣现金</p>
                    <p>获得更多优惠</p>
                </section>
                <section>
                    <i class="iconfont icon-duobaobi"></i>
                    <p>参与<em>金币</em>抽奖，赢取幸运豪礼</p>
                    <p>邀请好友PK游戏，还能赚取更多<em>金币</em></p>
                </section>
                <section>
                    <i class="iconfont icon-iconyue2"></i>
                    <p>所有的返现和摇到的锦囊</p>
                    <p>都是真金白银能直接<em>提现</em></p>
                </section>
            </hgroup>
            <section>
                <i class="iconfont icon-xiaoxi"></i>
                <span>赶快领取小瑶送你的<em>专属福利</em></span>
            </section>
            <section>
                <!-- CheckBox-->
                <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" v-model="checked" id="remind"> 
                    <span class="mint-checkbox-core" @click="check()"></span>
                </span>
                <label for="remind">下次不再提醒</label>
            </section>

            <section class="close"><span>×</span></section>
        </div>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {
                head_img: 'http://wx.jsheyun.cn/logo.png',
                name: '广电来摇吧',
                checked:false,
            }
        },
        created() {
            document.title = "公交车摇一摇";
        },
        methods:{
            check:function(){
                this.checked=!this.checked;
            }    
        }
    }

</script>
<style lang="scss" scoped>
    @import '../../../common/style/mixin';
    //复选框样式
    .mint-checkbox-core {
        display: inline-block;
        background-color: #fff;
        border-radius: 100%;
        border: 1px solid #ccc;
        position: relative;
        width: 20px;
        height: 20px;
    }
    
    .mint-checkbox-core::after {
        border: 2px solid transparent;
        border-left: 0;
        border-top: 0;
        content: " ";
        top: 3px;
        left: 6px;
        position: absolute;
        width: 4px;
        height: 8px;
        -webkit-transform: rotate(45deg) scale(0);
        transform: rotate(45deg) scale(0);
        -webkit-transition: -webkit-transform .2s;
        transition: -webkit-transform .2s;
        transition: transform .2s;
        transition: transform .2s, -webkit-transform .2s;
    }
    
    .mint-checkbox-input:checked + .mint-checkbox-core {
        background-color: #26a2ff;
        border-color: #26a2ff;
    }
    
    .mint-checkbox-input:checked + .mint-checkbox-core::after {
        border-color: #fff;
        -webkit-transform: rotate(45deg) scale(1);
        transform: rotate(45deg) scale(1);
    }
    
    .mint-cell-allow-right:after {
        border: 2px solid #c8c8cd;
        border-bottom-width: 0;
        border-left-width: 0;
        content: " ";
        top: 50%;
        right: 20px;
        position: absolute;
        width: 5px;
        height: 5px;
        -webkit-transform: translateY(-50%) rotate(45deg);
        transform: translateY(-50%) rotate(45deg);
    }
    
    .welcome {
        @include center;
        z-index: 101;
        background-color: #efefef;
        @include wh(13rem, 20rem);
        .head {
            @include wh(100%, auto);
            margin-top: 2rem;
            .logo {
                background-color: #fff;
                @include borderRadius(50%);
                @include wh(2rem, 2rem);
                padding: .2rem;
                img {
                    @include wh(2rem, 2rem);
                }
            }
            h3 {
                @include sc(.6rem, #fdd482);
                font-weight: normal;
                margin-top: .3rem;
            }
        }
        h4 {
            @include sc(.8rem, #fdd482);
            font-weight: normal;
            @include center;
            width: 100%;
        }
        .open {
            img {
                @include wh(3rem, 3rem);
                @include cl();
                top: 60%;
            }
        }
        p {
            @include sc(.4rem, #f5aa85);
            @include cl();
            bottom: 6%;
        }
        .close {
            position: absolute;
            right: -.8rem;
            top: -.8rem;
            background-color: #fff;
            @include borderRadius(50%);
            @include wh(1.5rem, 1.5rem);
            border: 2px solid #e1544a;
            box-shadow: 0 0 0 1px #ff6226;
            span {
                @include sc(1.8rem, #ff6226);
                position: absolute;
                top: -.53rem;
                right: .06rem;
            }
        }
    }
</style>