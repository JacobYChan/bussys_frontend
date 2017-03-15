<template>
    <div>
    <mt-header title="个人中心" fixed></mt-header>
    
       <footbar></footbar>
    </div>
</template>

<script>
import footbar from '../../components/footer/footer.vue'
    export default {
         components: {
            footbar
        },
        data(){
            return{
                
            }
        },
        created(){
            document.title="公交车摇一摇";
        }
    }
</script>
<style lang="scss" scoped>


</style>
