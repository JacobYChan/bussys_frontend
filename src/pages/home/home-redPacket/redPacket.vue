<template>
    <div>
        <div class="redPacket"
             v-if="status==1">
            <section class="head margin">
                <section class="logo margin"><img :src="prize.img"></section>
                <h3>{{prize.title}}</h3>
            </section>
            <h4>给您发了一个红包</h4>
            <section class="open"
                     @click="openRedpacket"><img src="../../../common/images/kai.png"></section>
            <p>点击广告得红包</p>
            <section class="close"
                     @click="close">
                <div><span>×</span></div>
            </section>
        </div>
        <div class="packetResult"
             v-else>
            <section class="blank">
                <div class="blank_content"></div>
            </section>
            <section class="logo margin"><img :src="prize.img"></section>
            <h3>{{prize.title}}</h3>
            <section class="packet_Amount">
                <div>红包</div>
                <span>{{prize.money|filterMoney}}</span>元
            </section>
            <p>已存入您的财富账户</p>
            <section class="close"
                     @click="close">
                <div><span>×</span></div>
            </section>
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
            status: 1,
            // packet_Amount: '5.94',
        }
    },
    filters:{
        filterMoney(value){
            newValue = value/100
            return newValue.toFixed(2)
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
        openRedpacket: function () {
            this.$emit('toadv', true, '');
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
.redPacket {
    @include center;
    z-index: 101;
    background-color: #e1544a;
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
        right: -.5rem;
        top: -.5rem;
        background-color: #fff;
        @include borderRadius(50%);
        @include wh(1rem, 1rem);
        border: 2px solid #e1544a;
        box-shadow: 0 0 0 1px #ff6226;
        div {
            position: relative;
            @include wh(1rem, 1rem);
            span {
                @include sc(1.2rem, #ff6226);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}

.packetResult {
    @extend .redPacket;
    background-color: darken(#fff, 6%);
    .blank {
        overflow: hidden;
        @include wh(11rem, 5rem);
        .blank_content {
            @include wh(15rem, 8rem);
            border-radius: 15rem/8rem;
            background-color: #ef265c;
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
    .packet_Amount {
        margin-top: .6rem;
        @include sc(.5rem, #f1245c);
        div {
            background-color: #f1245c;
            @include sc(.5rem, #fff);
            padding: .01rem .2rem;
            @include borderRadius(.2rem);
            display: inline;
        }
        span {
            font-size: 1.7rem;
            font-weight: bold;
            margin-right: .2rem;
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
        border: 2px solid #e1544a;
        box-shadow: 0 0 0 1px #ff6226;
        div {
            position: relative;
            @include wh(1rem, 1rem);
            span {
                @include sc(1.2rem, #ff6226);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}
</style>