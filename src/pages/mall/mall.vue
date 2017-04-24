<template>
    <div>
        <mt-header title="商城"
                   fixed>
            <router-link to="/"
                         slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>
        <iframe src="//fhg.jsheyun.net/"
                scrolling="yes"
                frameborder="0"
                class="mall"></iframe>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    created() {

    }
}
</script>
<style lang="scss" scoped>
    .mall{
        height: 93.5%;
        width: 100%;
        margin-top: 40px;
    }
</style>
