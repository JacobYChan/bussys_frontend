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
            <transition-group tag="ul" style="margin-top:0" name="fade">
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
            </transition-group>
        </div>
        <footerbar></footerbar>
        <!--开屏页 -->
        <transition name="component-fade" mode="out-in">
            <welcome v-if="showWelcome" @close="closeWelcome" :getFromparent='22'></welcome>
        </transition>
        <!--动态组件，显示摇出来的结果 -->
        <transition name="component-fade" mode="out-in">
            <component v-bind:is="currentView" @close="closePrize"></component>
        </transition>
        <transition name="component-fade" mode="out-in">
            <div class="v-modal" style="z-index: 100;" v-show="show"></div>
        </transition>
    </div>
</template>

<script>
import footerbar from '../../components/footer/footer'
import redpacket from './home-redPacket/redPacket'
import goldcoin from './home-goldCoin/goldCoin'
import gift from './home-gift/gift'
import adv from './home-adv/adv'
import recommendgood from './recommendGood/recommendGood'
import welcome from './welcome/welcome'
import { getStore, setStore } from '../../config/mUtils'
export default {
    components: {
        footerbar,
        redpacket,
        goldcoin,
        gift,
        adv,
        recommendgood,
        welcome
    },
    data() {
        return {
            goldCount: 4.3,
            redPacketCount: 444,
            prizeNum: 2,
            img: 'http://wx.jsheyun.cn/yao.jpg',
            confirm: false,//遮罩背景是否显示
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
            ],
            ScrollContent: null,
            scrollNum: 0,
            upHeight: 0,
            //动态组件
            currentView: adv,
            //显示遮罩
            show: true,
            showWelcome: true,
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.ScrollContent = document.getElementById('scroll').getElementsByTagName('ul')[0];
            this.scrollNum = this.ScrollContent.getElementsByTagName('li').length;
            this.upHeight = 0 - this.ScrollContent.getElementsByTagName('li')[0].scrollHeight;

            if (this.scrollNum > 2) {
                this.Start();
            }
        })
    },
    created() {
        document.title = "公交摇一摇";
        if (getStore('notMind')) {
            this.show = false;
            this.showWelcome = false;
        };
    },
    methods: {
        Start: function () {
            setInterval(() => {
                this.Run(this.ScrollContent, "margin-top", this.upHeight, () => {
                    this.ScrollContent.appendChild(this.ScrollContent.firstChild);
                    this.ScrollContent.style.marginTop = 0;
                })
            }, 1000);
        },
        Run: function (obj, attr, target, fn) {
            clearInterval(obj.timer);
            obj.timer = setInterval(() => {
                var cur = 0;
                if (attr == "opacity") {
                    cur = Math.round(parseFloat(this.getstyle(obj, attr)) * 100);
                } else {
                    cur = parseInt(this.getstyle(obj, attr));
                }
                var speed = (target - cur) / 8;
                speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

                if (cur == target) {
                    clearInterval(obj.timer);
                    if (fn) {
                        fn();
                    }
                } else {
                    if (attr == "opacity") {
                        obj.style.filter = "alpha(opacity=" + (cur + speed) + ")";
                        obj.style.opacity = (cur + speed) / 100;
                    } else {
                        obj.style[attr] = cur + speed + "px";
                    }
                }

            }, 80)
        },
        getstyle: function (obj, name) {
            if (obj.currentStyle) {
                return obj.currentStyle[name];
            } else {
                return getComputedStyle(obj, false)[name];

            }
        },
        closeWelcome: function (checked) {
            this.showWelcome = false;
            this.show = false;
            setStore('notMind', checked);
        },
        closePrize: function () {
            this.currentView = "";
            this.show = false;
        }
    }
}

</script>

<style lang="scss" scoped>
@import '../../common/style/mixin';
.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.fade-list-move {
    transition: transform 1s;
}

.component-fade-enter-active,
.component-fade-leave-active {
    transition: opacity .5s ease;
}

.component-fade-enter,
.component-fade-leave-active {
    opacity: 0;
}

#shake {
    background: #fef3f1;
    min-height: 100%;
    .myPrize {
        display: flex;
        section {
            flex: 1;
            display: flex;
            margin: .6rem .2rem;
            padding: .2rem;
            @include borderRadius(1rem);
            .iconfont {
                @include sc(.8rem, #fff);
                display: inline-block;
                vertical-align: top;
                margin-left: -.06rem;
                margin-top: -.1rem;
            }
        }
        //定义顶部三个图标颜色
        @mixin icon($color:#fcb700) {
            background: $color;
            @include wh(.7rem, .7rem);
            float: left;
            @include borderRadius(50%);
            padding: .2rem;
        }
        @mixin span($color) {
            @include sc(.6rem, $color);
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
        @include wh(8rem, 8rem);
        margin: .6rem auto;
        padding-bottom: .8rem;
        img {
            width: 100%;
        }
    }
    .shake_list {
        ul {
            height: 12rem;
            overflow: hidden;
            li {
                transition: all 1s;
                display: flex;
                padding: .2rem;
                position: relative;
                &.active {
                    @include active();
                    @include borderRadius(2rem);
                }
                &:after {
                    display: block;
                    position: absolute;
                    width: 100%;
                    left: 0;
                    bottom: 0;
                    border-top: 1px solid #eee;
                    content: '';
                    @meidia(-webkit-min-device-pixel-ratio: 1.5), (min-device-pixel-ratio: 1.5) {
                        -webkit-transform: scaleY(0.7);
                        transform: scaleY(0.7)
                    }
                    @meidia(-webkit-min-device-pixel-ratio:2),
                    (min-device-pixel-ratio:2) {
                        -webkit-transform: scaleY(0.5);
                        transform: scaleY(0.5)
                    }
                }
                .head_img {
                    @include wh(2rem, 2rem);
                    img {
                        @include wh(2rem, 2rem);
                        @include borderRadius(50%);
                    }
                }
                .list_info {
                    margin-left: .3rem;
                    line-height: 1.8;
                    h3 {
                        @include sc(.5rem, #515e8b);
                        span {
                            background: #fa877f;
                            @include borderRadius(1rem);
                            padding: .05rem .3rem;
                            font-weight: normal;
                            @include sc(.5rem, #fff);
                            margin-left: .2rem;
                        }
                    }
                    h5 {
                        font-weight: normal;
                        @include sc(.5rem, #fa877f);
                        text-align: left;
                    }
                }
                .list_location {
                    padding-left: .5rem;
                    line-height: 1.8;
                    flex: 1;
                    h5 {
                        font-weight: normal;
                        @include sc(.5rem, #999);
                    }
                }
            }
        }
    }
}
</style>