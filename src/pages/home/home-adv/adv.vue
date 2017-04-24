<template>
    <div class="adv">
        <section class="open"><img :src="prize.adpic"></section>
        <section class="close"
                 @click="close">
            <div><span>×</span></div>
        </section>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters([
            'prize'
        ])
    },
    data() {
        return {
        }
    },
    created() {

    },
    // watch:{
    //     prize:function(){
    //         console.log(this.prize.adpic)
    //     }
    // },
    methods: {
        close: function () {
            this.$emit('closeAdv', false, this.prize.url);
        }
    }
}
</script>
<style lang="scss" scoped>
@import '../../../common/style/mixin';
.adv {
    @include center;
    z-index: 101;
    background-color: #fff;
    @include wh(11rem, 16rem);
    .open {
        @include wh(11rem, 16rem);
        img {
            @include wh(11rem, 16rem);
        }
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
        div {
            position: relative;
            @include wh(1rem, 1rem);
            span {
                @include sc(1.2rem, #fbc658);
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}
</style>
