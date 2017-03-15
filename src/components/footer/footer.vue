<template>
    <div>
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="message">
                <span slot="icon" class="iconfont icon-xiaoxi"></span> 消息
            </mt-tab-item>
            <mt-tab-item id="bus">
                <span slot="icon" class="iconfont icon-chuxing"></span> 出行
            </mt-tab-item>
            <mt-tab-item id="home">
                <div class="yao-icon">
                    <span slot="icon" class="iconfont icon-snimicyaoyiyao"></span>
                </div>

            </mt-tab-item>
            <mt-tab-item id="mall">
                <span slot="icon" class="iconfont icon-shangcheng"></span> 商城
            </mt-tab-item>
            <mt-tab-item id="member">
                <span slot="icon" class="iconfont icon-wo"></span> 我的
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabItem } from 'mint-ui';
    export default {
        data() {
            return {
                selected: 'home'
            }
        },
        created() {
            let currentSelected = this.$route.name;
            this.selected = currentSelected.toLowerCase();
            this.$watch('selected', function (val) {
                this.$router.replace(val);
            })
        },
        methods: {

        }
    }

</script>

<style lang="scss">
    @import '../../common/font/iconfont.css';
    .mint-tabbar {
        height: 2.4rem;
        .mint-tab-item-icon {
            width: 1rem;
            height: 1rem;
            margin: 0 auto .3rem;
        }
        .mint-tab-item-label {
            font-size: .6rem;
        }
    }
    
    .yao-icon {
        background: #25b7f0;
        height: 100%;
        position: absolute;
        border-radius: 50%;
        padding: .5rem .7rem 0.1rem .7rem;
        margin-left: .1rem;
        top: -.9rem;
        width: 10%;
        text-align: center;
        .icon-snimicyaoyiyao {
            margin-left: -.1rem;
            &:before {
                font-size: 1.8rem;
                color: #fff;
            }
        }
    }
</style>