<template>
    <div class="memberInfo">
        <mt-header title="个人资料">
            <router-link to="/member" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <mt-cell title="头像">
            <img slot="icon" v-lazy="headImg" width="60" height="60">
        </mt-cell>
        <mt-cell title="昵称" to="" :value="name" is-link style="margin:0">
        </mt-cell>

        <mt-cell title="性别" to="" is-link :value="sex">
        </mt-cell>

        <mt-cell title="地区" to="" is-link :value="area" style="margin:0">
        </mt-cell>

        <mt-cell title="我的地址" to="" is-link style="margin:0">
        </mt-cell>

        <mt-cell title="个性签名" to="" is-link :value="sign" class="ellipsis" style="margin:0">
        </mt-cell>

        <p>账号绑定</p>
        <mt-cell title="微信" to="" is-link :value="weixin">
            <i slot="icon" class="iconfont icon-weixin"></i>
        </mt-cell>
        <mt-cell title="手机" to="" is-link style="margin:0" :value="phone">
            <i slot="icon" class="iconfont icon-shouji"></i>
        </mt-cell>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '风中的小草',
                headImg: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
                sex: '未设置',
                area: '未设置',
                sign: '她只知道摇红包，忘记写签名了...',
                weixin:'未绑定',
                phone:'未绑定',
            }
        },
        created() {
            document.title = "公交车摇一摇";
        }
    }

</script>
<style lang="scss">
    @import '../../../common/style/mixin';
    .memberInfo {
        background-color: #efeff4;
        position: absolute;
        width: 100%;
        height: 100%;
        p {
            @include sc(.5rem, #666);
            margin: .8rem;
            display: flex;
        }
        .mint-cell {
            &:first-of-type {
                .mint-cell-wrapper {
                    .mint-cell-title {
                        span {
                            line-height: 3rem;
                        }
                    }
                }
            }
            &:nth-of-type(7) {
                .mint-cell-wrapper {
                    .mint-cell-title {
                        span {
                            margin-left: .3rem;
                        }
                    }
                }
            }
            margin-top: .8rem;
            .mint-cell-wrapper {
                text-align: left;
                background-image: none;
                font-size: 1rem;
                .mint-cell-title {
                    margin: .5rem 0;
                    .mint-cell-text {
                        vertical-align: inherit;
                    }
                    .iconfont {
                        @include sc(1.2rem, #0eadfe);
                    }
                    span {
                        @include sc(.7rem, #000);
                        // margin-left: .4rem;
                        position: relative;
                        top: -.1rem;
                    }
                    img {
                        @include borderRadius(50%);
                        margin-right: .6rem;
                        float: right;
                    }
                }
                .mint-cell-value {
                    span {
                        @include sc(.6rem, #999);
                    }
                }
            }
        }
    }
</style>