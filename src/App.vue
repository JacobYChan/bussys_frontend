<template>
    <div id="app">
        <router-view></router-view>
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
    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>