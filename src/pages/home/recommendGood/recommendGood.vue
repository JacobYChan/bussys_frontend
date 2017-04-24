<template>
    <div class="recommedGood">
        <section class="head margin">
            <h3 class="ellipsis">凤凰购物 用余额立返现金</h3>
        </section>
        <section class="good_img"><img v-lazy="good_img"></section>
        <section class="good_price">
            <p class="ellipsis">{{good_title}}</p>
            <h3>商城价：￥{{good_price}}</h3>
        </section>
    
        <mt-button type="primary"
                   size="large">去看看</mt-button>
        <section class="close">
            <div>
                <span>×</span>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {
            good_img: 'http://fhg.jsheyun.net/upload/shop/store/goods/41/41_05409900017896702_480.jpg',
            good_title: '扬州大学实验蜂场江大蜂胶鱼油软胶囊24g ',
            name: '广电来摇吧',
            good_price: '240.00',
        }
    },
    created() {
        document.title = "公交车摇一摇";
    }
}

</script>
<style lang="scss" scoped>
@import '../../../common/style/mixin';
.recommedGood {
    @include center;
    z-index: 101;
    background-color: #fff;
    @include wh(11rem, 15rem);
    .head {
        @include wh(100%, auto);
        background-color: #ca402a;
        h3 {
            @include sc(.7rem, #fce2af);
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
        margin: .3rem auto;
        height: 7rem;
        width: 7rem;
        padding: .5rem;
        line-height: 7rem;
        position: relative;
        img {
            @include wh(7rem, 7rem);
            @include center;
            @include borderRadius(.5rem);
        }
    }
    .good_price {
        line-height: 2;
        text-align: left;
        width: 80%;
        margin: 0 auto;
        p {
            @include sc(.6rem, #404040);
            padding: 0 .2rem;
        }
        h3 {
            @extend p;
        }
    }
    .mint-button--large {
        display: block;
        width: 100%;
        margin: 0 auto;
        width: 90%;
        height: 1.5rem;
        font-size: .7rem;
        background-color: #ca402a;
        margin-top: .2rem;
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
                top: -.2.5rem;
                right: .1.5rem;
            }
        }
    }
}
</style>