<template>
    <div id="app">
        <transition name="router-fade"
                    mode="out-in">
            <router-view class="outter"
                         :class="{'hideLeft':$route.path.split('/').length>2}"></router-view>
        </transition>
        <!--其他店内页集合 有过渡效果-->
        <transition name="custom-classes-transition"
                    :enter-active-class="enterAnimate"
                    :leave-active-class="leaveAnimate">
            <router-view name="subPage"
                         class="sub-page"></router-view>
        </transition>
    </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import rem from './config/rem.js'
import { mapState } from 'vuex'
export default {
    name: 'app',
    data() {
        return {
            "enterAnimate": "", //页面进入动效
            "leaveAnimate": "" //页面离开动效
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.common.isLoading
        })
    },
    created() {
        if (this.isLoading) {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            })
        }else{
            Indicator.close();
        }
    },
    watch: {
        // 监听 $route 为店内页设置不同的过渡效果
        "$route"(to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            //同一级页面无需设置过渡效果

            this.enterAnimate = toDepth > fromDepth ? "animated fadeInRight" : "animated fadeInLeft"
            this.leaveAnimate = toDepth > fromDepth ? "animated fadeOutLeft" : "animated fadeOutRight"
            // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
            if (toDepth === 3) {
                this.leaveAnimate = "animated fadeOutRight"
            }
        }
    }
}

</script>

<style lang="scss">
@import './common/style/common';
@import './common/style/animate';
.router-fade-enter-active,
.router-fade-leave-active {
    transition: opacity .3s;
}

.router-fade-enter,
.router-fade-leave-active {
    opacity: 0;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
}
</style>