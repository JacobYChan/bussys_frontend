<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    import { Indicator } from 'mint-ui';
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

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>