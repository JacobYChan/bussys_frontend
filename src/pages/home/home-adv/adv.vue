<template>
    <div class="adv">
        <section class="open"><img v-lazy="adv_img"></section>
        <section class="close" @click="close"><span>×</span></section>
    </div>
</template>

<script>

    export default {
         components: {
            
        },
        data(){
            return{
                adv_img:'http://pic.35pic.com/normal/00/00/28/3014495_091255091_2.jpg'
            }
        },
        created(){
            document.title="公交车摇一摇";
        },
        methods:{
            close:function(){
                this.$emit('close');
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
        @include wh(11rem, 15rem);
        .open{
            @include wh(11rem, 15rem);
            img{
                @include wh(11rem, 15rem);
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
            span {
                @include sc(1.2rem, #fbc658);
                position: absolute;
                top: -.4rem;
                right: .04rem;
            }
        }
    }

</style>
