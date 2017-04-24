<template>
    <div>
        <mt-header title="公交查询"
                   fixed></mt-header>
        <div class="error">抱歉，该功能暂未开放</div>
        <footbar></footbar>
    </div>
</template>

<script>
import footbar from '../../components/footer/footer.vue'
export default {
    components: {
        footbar
    },
    data() {
        return {

        }
    },
    created() {
        document.title = "公交车摇一摇";
    }
}
</script>
<style lang="scss" scoped>
.error {
    margin-top: -40px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>
