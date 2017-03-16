<template>
    <div class="gift">
        <section class="head margin">
            <section class="logo margin"><img v-lazy="logo"></section>
            <h3>{{name}}</h3>
        </section>
        <h4>给您发了一堆金币</h4>
        <section class="open"><img src="../../../common/images/kai.png"></section>
        <p>点击广告得金币</p>
        <section class="close"><span>×</span></section>
    </div>
</template>

<script>
    export default {
        components: {

        },
        data() {
            return {
                logo: 'http://wx.jsheyun.cn/logo.png',
                name: '广电来摇吧',
            }
        },
        created() {
            document.title = "公交车摇一摇";
        }
    }

</script>
<style lang="scss" scoped>
    @import '../../../common/style/mixin';
    .gift {
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
</style>