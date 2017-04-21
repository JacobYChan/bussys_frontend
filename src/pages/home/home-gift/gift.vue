<template>
    <div class="gift">
        <section class="head margin">
            <h3>恭喜您摇到一个礼品！</h3>
        </section>
        <section class="good_img"><img v-lazy="prize.img"></section>
        <p class="ellipsis">{{prize.title}}</p>
        <mt-button type="primary"
                   size="large"
                   @click="getPrize">立即使用</mt-button>
        <section class="close"
                 @click="close"><span>×</span></section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    components: {

    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters([
            'prize'
        ])
    },
    created() {

    },
    methods: {
        getPrize: function () {
            this.$emit('toadv',true,'');
        },
        close: function () {
            this.$emit('close');
        }
    }
}

</script>
<style lang="scss" scoped>
@import '../../../common/style/mixin';
.gift {
    @include center;
    z-index: 101;
    background-color: #fff;
    @include wh(11rem, 16rem);
    .head {
        @include wh(100%, auto);
        background-color: #ffb400;
        h3 {
            @include sc(.7rem, #b10112);
            padding: .4rem 0;
            font-family: '\9ED1\4F53';
        }
    }
    h4 {
        @include sc(.8rem, #f56932);
        font-weight: normal;
        @include center;
        width: 100%;
    }
    .good_img {
        margin: 1rem auto;
        height: 7rem;
        width: 7rem;
        border: 1px solid #666;
        padding: .5rem;
        line-height: 7rem;
        position: relative;
        img {
            @include wh(7rem, 7rem);
            @include center;
        }
    }
    p {
        @include sc(.6rem, #404040);
        padding: 0 .2rem;
        margin-top: -.5rem;
    }
    .mint-button--large {
        display: block;
        width: 100%;
        margin: 0 auto;
        width: 90%;
        height: 1.5rem;
        font-size: .7rem;
        background-color: #ffb400;
        margin-top: .7rem;
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
            top: -.2.5rem;
            right: .1.5rem;
        }
    }
}
</style>