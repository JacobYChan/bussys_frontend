<template>
    <div id="app">
        <transition name="router-fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
    import rem from './config/rem.js'
    export default {
        name: 'app',
        created() {
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            setTimeout(() => {
                Indicator.close();
            }, 1000)
        }

    }

</script>

<style lang="scss">
    @import './common/style/common';
    
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