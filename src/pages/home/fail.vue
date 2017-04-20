<template>
    <div class="fail">
        <div class="fail-content">
            <h3>扬广凤凰购提醒您</h3>
            <p>只差一点</p>
            <p>再接再厉</p>
            <img src="../../common/images/fail.png">
            <mt-button type="primary"
                       size="large"  @click.native="close">继续摇</mt-button>
        </div>
        <section class="close"
                 @click="close"><span>×</span></section>
    </div>
</template>

<script>
export default {
    components: {

    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {
        close: function () {
            this.$emit('close');
        }
    }
}

</script>
<style lang="scss" scoped>
@import '../../common/style/mixin';
.fail {
    @include center;
    z-index: 101;
    background-color: #2e539a;
    @include wh(11rem, 16rem);
    .fail-content {
        margin: 3rem 1rem 1rem 1rem;
        line-height: 2;
        h3 {
            @include sc(.8rem, #fff);
        }
        p {
            @include sc(.7rem, #fff);
        }
        img {
            display: block;
            margin: .5rem auto;
        }
        .mint-button {
            margin-top: 2rem;
            background-color: #dae1e5;
            color: #2e539a;
        }
    }
    .close {
        position: absolute;
        right: -.5rem;
        top: -.5rem;
        background-color: #fff;
        @include borderRadius(50%);
        @include wh(1rem, 1rem);
        border: 2px solid #2e539a;
        box-shadow: 0 0 0 1px #2e539a;
        span {
            @include sc(1.2rem, #2e539a);
            position: absolute;
            top: -.4rem;
            right: .04rem;
        }
    }
}
</style>