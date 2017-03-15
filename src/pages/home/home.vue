<template>
    <div id="shake">
        <hgroup class="myPrize">
            <section class="myPrize_gold">
                <div class="gold_icon"><i class="iconfont icon-jinbi"></i></div>
                <span>金币</span>
                <label>{{goldCount}}元</label>
            </section>
            <section class="myPrize_redPacket">
                <div class="redPacket_icon"><i class="iconfont icon-hongbao"></i></div>
                <span>红包</span>
                <label>{{redPacketCount}}元</label>
            </section>
            <section class="myPrize_prize">
                <div class="prize_icon"><i class="iconfont icon-jiang"></i></div>
                <span>奖品</span>
                <label>{{prizeNum}}个</label>
            </section>
        </hgroup>
        <div class="shake_adv">
            <img v-lazy="img">
        </div>
        <!--名单滚动区域 -->
        <div class="shake_list" id="scroll">
            <ul style="margin-top:0">
                <li :key="index" v-for="(item,index) in shake_list" class="ellipsis">
                    <section class="head_img">
                        <img v-lazy="item.head_img">
                    </section>
                    <hgroup class="list_info">
                        <h3>{{item.name}}<span>{{item.action_detail}}</span></h3>
                        <h5>{{item.action}}</h5>
                    </hgroup>
                    <hgroup class="list_location">
                        <h5>{{item.location}}</h5>
                        <h5>{{item.action_time}}</h5>
                    </hgroup>
                </li>
            </ul>
        </div>
        <footerbar></footerbar>
    </div>
</template>

<script>
    import footerbar from '../../components/footer/footer'
    export default {
        components: {
            footerbar
        },
        data() {
            return {
                goldCount: 4.3,
                redPacketCount: 444,
                prizeNum: 2,
                img: 'http://wx.jsheyun.cn/yao.jpg',
                shake_list: [
                    {
                        head_img: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
                        name: '天之骄子',
                        action: '摇到一个红包',
                        action_detail: '提现52.33元',
                        action_time: '2017-3-15 14:00',
                        location: '扬州市 邗江区'
                    },
                     {
                        head_img: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
                        name: '天之骄子',
                        action: '摇到一个红包',
                        action_detail: '提现52.33元',
                        action_time: '2017-3-15 14:00',
                        location: '扬州市 邗江区'
                    },
                     {
                        head_img: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
                        name: '天之骄子',
                        action: '摇到一个红包',
                        action_detail: '提现52.33元',
                        action_time: '2017-3-15 14:00',
                        location: '扬州市 邗江区'
                    },
                     {
                        head_img: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
                        name: '天之骄子',
                        action: '摇到一个红包',
                        action_detail: '提现52.33元',
                        action_time: '2017-3-15 14:00',
                        location: '扬州市 邗江区'
                    },
                     {
                        head_img: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
                        name: '天之骄子',
                        action: '摇到一个红包',
                        action_detail: '提现52.33元',
                        action_time: '2017-3-15 14:00',
                        location: '扬州市 邗江区'
                    },
                     {
                        head_img: 'http://b.hiphotos.baidu.com/zhidao/wh%3D450%2C600/sign=f0c5c08030d3d539c16807c70fb7c566/8ad4b31c8701a18bbef9f231982f07082838feba.jpg',
                        name: '天之骄子',
                        action: '摇到一个红包',
                        action_detail: '提现52.33元',
                        action_time: '2017-3-15 14:00',
                        location: '扬州市 邗江区'
                    }
                ]
            }
        },
        created() {
            document.title = "公交摇一摇";
        }
    }

</script>

<style lang="scss" scoped>
    #shake {
        padding-bottom: 3rem;
        background: #fef3f1;
        .myPrize {
            display: flex;
            section {
                flex: 1;
                display: flex;
                margin: .6rem .2rem;
                padding: .2rem;
                border-radius: 1rem;
                .iconfont {
                    color: #fff;
                    font-size: .8rem;
                    display: inline-block;
                    vertical-align: top;
                    margin-left: -.06rem;
                    margin-top: -.1rem;
                }
            }
            //定义顶部三个图标颜色
            @mixin icon($color:#fcb700) {
                background: $color;
                width: .7rem;
                height: .7rem;
                float: left;
                border-radius: 50%;
                padding: .2rem;
            }
            @mixin span($color) {
                color: $color;
                font-size: .6rem;
                margin: .1rem 0 .2rem .2rem;
                font-weight: 500;
            }
            // 定义边框
            @mixin border($color) {
                border: 1px solid $color;
            }
            .myPrize_gold {
                @include border(#fcb700) .gold_icon {
                    @include icon;
                }
                span {
                    @include span(#fcb700);
                }
                label {
                    @extend span;
                }
            }
            .myPrize_redPacket {
                @include border(#f4505f);
                .redPacket_icon {
                    @include icon(#f4505f);
                }
                span {
                    @include span(#f4505f);
                }
                label {
                    @extend span;
                }
            }
            .myPrize_prize {
                @include border(#fd7638);
                .prize_icon {
                    @include icon(#fd7638);
                }
                span {
                    @include span(#fd7638);
                }
                label {
                    @extend span;
                }
            }
        }
        .shake_adv {
            width: 8rem;
            height: 8rem;
            margin: .6rem auto;
            padding-bottom: .8rem;
            img {
                width: 100%;
            }
        }
        .shake_list {
            ul li {
                display: flex;
                padding: .3rem;
                .head_img {
                    width: 2rem;
                    height: 2rem;
                    img {
                        width: 2rem;
                        height: 2rem;
                        border-radius: 50%;
                    }
                }
                $font_info-size:.7rem;
                .list_info {
                    margin-left: .3rem;
                    line-height: 1.5;
                    h3 {
                        color: #515e8b;
                        font-size: $font_info-size;
                        span {
                            background: #fa877f;
                            color: #fff;
                            border-radius: 1rem;
                            padding: .05rem .3rem;
                            font-weight: normal;
                            font-size: .5rem;
                            margin-left: .2rem;
                        }
                    }
                    h5 {
                        color: #fa877f;
                        font-weight: normal;
                        font-size: $font_info-size;
                        text-align: left;
                    }
                }
                .list_location {
                    padding-left: .5rem;
                    flex: 1;
                    h5 {
                        font-size: $font_info-size;
                        font-weight: normal;
                        color: #999;
                        line-height: 1.5;
                    }
                }
            }
        }
    }
</style>