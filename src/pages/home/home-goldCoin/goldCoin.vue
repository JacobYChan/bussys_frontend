<template>
    <div>
        <div class="goldCoin"
             v-if="status==1">
            <section class="head margin">
                <section class="logo margin"><img :src="prize.img"></section>
                <h3>{{prize.title}}</h3>
            </section>
            <h4>给您发了一堆金币</h4>
            <section class="open"
                     @click="openGoldcoin"><img src="../../../common/images/kai.png"></section>
            <p>点击广告得金币</p>
            <section class="close"
                     @click="close"><span>×</span></section>
        </div>
        <div class="coinResult"
             v-else>
            <section class="blank">
                <div class="blank_content"></div>
            </section>
            <section class="logo margin"><img :src="prize.img"></section>
            <h3>{{prize.title}}</h3>
            <section class="coin_Amount">
                <i class="iconfont icon-duobaobi"></i>
                <span>×{{prize.money}}</span>金币
            </section>
            <p>已存入您的金币口袋</p>
            <section class="close"
                     @click="close"><span>×</span></section>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {

    },
    data() {
        return {
            // logo: 'http://wx.jsheyun.cn/logo.png',
            // name: '广电来摇吧',
            // coin_Amount: '100',
            status: 1,
        }
    },
    created() {

    },
    computed: {
        ...mapGetters([
            'prize'
        ])
    },
    methods: {
        openGoldcoin: function () {
            this.$emit('toadv',true,'');
            setTimeout(() => {
                this.status = 2;
            }, 1000)
        },
        close: function () {
            this.$emit('close');
        }
    }
}

</script>
<style lang="scss" scoped>
@import '../../../common/style/mixin';
.goldCoin {
    @include center;
    z-index: 101;
    background-color: #fbc658;
    @include wh(11rem, 16rem);
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
            @include sc(.6rem, #f56932);
            font-weight: normal;
            margin-top: .3rem;
        }
    }
    h4 {
        @include sc(.8rem, #f56932);
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
        @include sc(.4rem, #f56932);
        @include cl();
        bottom: 6%;
    }
    .close {
        position: absolute;
        right: -.5rem;
        top: -.5rem;
        background-color: #fff;
        @include borderRadius(50%);
        @include wh(1rem, 1rem);
        border: 2px solid #fbc658;
        box-shadow: 0 0 0 1px #fbc658;
        span {
            @include sc(1.2rem, #fbc658);
            position: absolute;
            top: -.4rem;
            right: .04rem;
        }
    }
}

.coinResult {
    @extend .goldCoin;
    background-color: darken(#fff, 6%);
    .blank {
        overflow: hidden;
        @include wh(11rem, 5rem);
        .blank_content {
            @include wh(15rem, 8rem);
            border-radius: 15rem/8rem;
            background-color: #fdbb1c;
            margin-top: -3rem;
            margin-left: -2rem;
        }
    }
    .logo {
        background-color: #fff;
        @include borderRadius(50%);
        @include wh(2rem, 2rem);
        padding: .2rem;
        margin-top: -1.2rem;
        img {
            @include wh(2rem, 2rem);
        }
    }
    h3 {
        font-size: .7rem;
        font-family: "\9ED1\4F53";
        margin-top: .2rem;
    }
    .coin_Amount {
        margin-top: .6rem;
        @include sc(.5rem, #ffb81f);
        span {
            font-size: 1.7rem;
            font-weight: bold;
            margin-right: .2rem;
        }
        i {
            font-size: 1.7rem;
        }
    }
    p {
        bottom: 26%;
        @include sc(.5rem, #1e5b95);
    }
    .close {
        position: absolute;
        right: -.5rem;
        top: -.5rem;
        background-color: #fff;
        @include borderRadius(50%);
        @include wh(1rem, 1rem);
        border: 2px solid #fbc658;
        box-shadow: 0 0 0 1px #fbc658;
        span {
            @include sc(1.2rem, #fbc658);
            position: absolute;
            top: -.4rem;
            right: .04rem;
        }
    }
}
</style>