<template>
    <div id="shake">
        <hgroup>
            <section v-for="item in prize">
                <div><i class="iconfont" :class="{item.className}"></i></div>
                <span>{{item.name}}}</span>
                <label>{item.num}}</label>
            </section>
        </hgroup>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                prize:[
                    {className:'icon-hongbao',name:'红包',num:'114'},
                    {className:'icon-jiang',name:'奖品',num:'114'}
                ]
            }
        },
        created(){
            document.title="公交摇一摇";
        }
    }
</script>

<style lang="scss" scoped>
import  '../../font/iconfont.css'

body{
    background: #fef3f1;
}

</style>