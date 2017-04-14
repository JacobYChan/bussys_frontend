<template>
    <div>
        <div class="welcome">
            <section class="head margin">
                <h3>嗨！我是小瑶！</h3>
                <img v-lazy="head_img">
                <p class="ellipsis">很高兴和您成为摇一摇里的新朋友</p>
                <p class="ellipsis">摇一摇有惊喜哦，跟我一起摇起来吧！</p>
            </section>
            <hgroup class="welcome_detail">
                <section>
                    <i class="iconfont icon-yu"></i>
                    <p class="ellipsis">购物时可用<em>余额</em>抵扣现金</p>
                    <p class="ellipsis">获得更多优惠</p>
                </section>
                <section>
                    <i class="iconfont icon-duobaobi"></i>
                    <p class="ellipsis">参与<em>金币</em>抽奖，赢取幸运豪礼</p>
                    <p class="ellipsis">邀请好友PK游戏，还能赚取更多<em>金币</em></p>
                </section>
                <section>
                    <i class="iconfont icon-iconyue2"></i>
                    <p class="ellipsis">所有的返现和摇到的锦囊</p>
                    <p class="ellipsis">都是真金白银能直接<em>提现</em></p>
                </section>
            </hgroup>
            <section class="welcome_msg">
                <i class="iconfont icon-xiaoxi">
                                                <mt-badge type="error" size="small">1</mt-badge>
                                            </i>
                <span class="ellipsis">赶快领取小瑶送你的<em>专属福利</em></span>
            </section>
            <section class="notRemind">
                <!-- CheckBox-->
                <span class="mint-checkbox"><input type="checkbox" class="mint-checkbox-input" v-model="checked" id="remind"> 
                                                    <span class="mint-checkbox-core" @click="check()"></span>
                </span>
                <label for="remind">下次不再提醒</label>
            </section>
            <section class="close" @click="close()"><span>×</span></section>
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
            checked: false,
        }
    },
    props: {
        getFromparent: {
           
        }
    },
    created() {
    },
    methods: {
        check: function () {
            this.checked = !this.checked;
        },
        close: function () {
            this.$emit('close',this.checked);
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
    border-radius: .1rem;
    border: 1px solid #ccc;
    position: relative;
    width: .8rem;
    height: .8rem;
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
    transform: rotate(45deg) scale(0);
    transition: transform 0s;
}

.mint-checkbox-input:checked+.mint-checkbox-core {
    border-color: #fe6028;
    background-color: #fff;
}

.mint-checkbox-input:checked+.mint-checkbox-core::after {
    border-color: #fe6028;
}

.welcome {
    @include center;
    z-index: 101;
    background-color: #efefef;
    @include wh(13rem, 20.8rem);
    .head {
        @include wh(100%, auto);
        h3 {
            @include sc(.7rem, #5e5f5b);
            font-weight: normal;
            margin-top: .3rem;
        }
        img {
            @include wh(2rem, 2rem);
            @include borderRadius(50%);
            margin-top: .5rem;
        }
        p {
            width: 95%;
            @include sc(.7rem, #5e5f5b);
            margin: 0 auto;
        }
    }
    .welcome_detail {
        section {
            margin: 1rem auto;
            width: 90%;
            background-color: #fff;
            position: relative;
            @include borderRadius(.5rem);
            padding: .3rem 0;
            em {
                color: #ff6226;
                font-style: normal;
            }
            i {
                font-size: 1.4rem;
                @include cl;
                top: -1rem;
                &.icon-yu {
                    color: #ff753e;
                }
                &.icon-duobaobi {
                    color: #ffb400;
                }
                &.icon-iconyue2 {
                    color: #fb4c60;
                }
            }
            p {
                @include sc(.7rem, #5e5f5b);
                margin-top: .1rem;
            }
        }
    }
    .welcome_msg {
        margin-top: -.5rem;
        .icon-xiaoxi {
            position: relative;
            @include sc(1.2rem, #666);
            .mint-badge {
                position: absolute;
                padding: .2rem;
                border-radius: 50%;
                width: .3rem;
                height: .3rem;
                font-size: .4rem;
                vertical-align: top;
                left: .9rem;
                top: -.1rem;
                line-height: .4rem;
                color: #fff;
            }
        }
        span {
            @include sc(.7rem, #5e5f5b);
            em {
                color: #ff6226;
                font-style: normal;
            }
        }
    }
    .notRemind {
        label {
            @include sc(.7rem, #fe6028);
        }
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