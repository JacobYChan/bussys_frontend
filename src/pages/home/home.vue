<template>
    <div id="shake">
        <hgroup class="myPrize">
            <section class="myPrize_gold">
                <div class="gold_icon"><i class="iconfont icon-jinbi"></i></div>
                <span>金币</span>
                <label>{{goldCoin.goldcoin}}元</label>
            </section>
            <section class="myPrize_redPacket">
                <div class="redPacket_icon"><i class="iconfont icon-hongbao"></i></div>
                <span>红包</span>
                <label>{{redPacket.pdr_amount}}元</label>
            </section>
            <section class="myPrize_prize">
                <div class="prize_icon"><i class="iconfont icon-jiang"></i></div>
                <span>奖品</span>
                <label>{{tickets}}张</label>
            </section>
        </hgroup>
        <div class="shake_adv">
            <img v-lazy="activityInfo.page_gif">
        </div>
        <!--名单滚动区域 -->
        <div class="shake_list"
             id="scroll">
            <transition-group tag="ul"
                              style="margin-top:0"
                              name="fade">
                <li :key="index"
                    v-for="(item,index) in memberList"
                    :class="[item.gold ? 'active_gold' : 'active_ticket', 'ellipsis']">
    
                    <section class="head_img">
                        <img :src="item.headimgurl">
                    </section>
                    <hgroup class="list_info">
                        <h3>{{item.nickname}}</h3>
                        <h5 v-if="item.gold">摇到了1个金币锦囊</h5>
                        <h5 v-else>摇到了1个卡券锦囊</h5>
                    </hgroup>
                    <hgroup class="list_location">
                        <!--<h5>江苏省扬州市</h5> -->
                        <h5>{{item.time|fmtDate}}</h5>
                    </hgroup>
                </li>
            </transition-group>
        </div>
        <footerbar></footerbar>
        <!--开屏页 -->
        <transition name="component-fade"
                    mode="out-in">
            <welcome v-if="showWelcome"
                     @close="closeWelcome"
                     :getFromparent='22'></welcome>
        </transition>
        <!--动态组件，显示摇出来的结果 -->
        <transition name="component-fade"
                    mode="out-in">
            <component v-bind:is="currentView"
                       @close="closePrize"
                       @toadv="getToAdv"></component>
        </transition>
        <transition name="component-fade"
                    mode="out-in">
            <adv @closeAdv="getToAdv"
                 v-show="showAdv"></adv>
        </transition>
        <transition name="component-fade"
                    mode="out-in">
            <div class="v-modal"
                 style="z-index: 100;"
                 v-show="show"></div>
        </transition>
    
        <audio ref="yao"
               src="http://yao.jsheyun.net/app/hongxing/voice/v4.mp3"
               preload="auto"></audio>
    
        <div @click="getjp"
             style="position:absolute;left:20%;bottom:20%; color:red">
            测试摇一摇
        </div>
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
import fail from './fail'
import { getStore, setStore, removeStore } from '../../config/mUtils'
import api from '../../fetch/api'
import { mapGetters } from 'vuex'
import { Toast } from 'mint-ui'
export default {
    components: {
        footerbar,
        redpacket,
        goldcoin,
        gift,
        adv,
        recommendgood,
        welcome,
        fail
    },
    data() {
        return {
            // goldCount: 4.3,
            // redPacketCount: 444,
            // prizeNum: 2,
            confirm: false,//遮罩背景是否显示
            ScrollContent: null,
            scrollNum: 0,
            upHeight: 0,
            //动态组件
            currentView: '',
            //显示遮罩
            show: true,
            showWelcome: true,
            flag: 1,//控制是否摇一摇
            showAdv: false,
            x: 0,
            y: 0,
            z: 0,
            last_x: 0,
            last_y: 0,
            last_z: 0,
            SHAKE_THRESHOLD: 1300,
            last_update: 0
        }
    },

    computed: {
        ...mapGetters([
            'activityInfo',
            'prize',
            'memberList',
            'memberInfo',
            'goldCoin',
            'redPacket',
            'tickets'
        ])
    },
    created() {
        if (getStore('notMind')) {
            this.showWelcome = false;
            this.show = false;
        }
        api.visitInfoInitial({ token: getStore('token'), wid: 174 }).then(res => {
            if (res.code !== 0) {
                setTimeout(function () {
                    Toast({
                        message: res.msg,
                        iconClass: 'icon iconfont icon-iconsb iconsb'
                    })
                }, 1000)
            }
        })
        this.$store.dispatch('get_member_info', { token: getStore('token') }).then(() => {
            this.$store.dispatch('get_member_gold_coin', { member_id: this.memberInfo.fhid })
            this.$store.dispatch('get_member_red_packet', { member_id: this.memberInfo.fhid })
        })
        this.$store.dispatch('get_member_ticket', { token: getStore('token'), wid: 174 })


        // if (this.$route.query.token) {
        //     setStore('token', this.$route.query.token)
        //     //console.log(this.$route.query.token + "路由token")
        // }

        // if (getStore('token')===undefined) {
        //     setStore('token', this.$route.query.token)
        // }

    },
    mounted() {
        this.$nextTick(function () {
            this.ScrollContent = document.getElementById('scroll').getElementsByTagName('ul')[0];
            this.scrollNum = this.ScrollContent.getElementsByTagName('li').length;
            if (this.scrollNum !== 0) {
                this.upHeight = 0 - this.ScrollContent.getElementsByTagName('li')[0].scrollHeight;
            }

            if (this.scrollNum > 4) {
                this.Start();
            }
            if (window.DeviceMotionEvent) {
                window.addEventListener('devicemotion', this.deviceMotionHandler, false)
            } else {
                alert('你的手机不支持摇一摇，请点击中间手机进行抽奖')
            }
        })
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
            if (checked === true) {
                setStore('notMind', checked);
            }

        },
        closePrize: function () {
            this.currentView = "";
            this.show = false;
            this.flag = 1;
        },
        getToAdv(status, url) {
            if (status) {//判断是打开广告还是关闭广告
                this.showAdv = true;
            } else {
                this.showAdv = false;
                if (this.prize.type === 1) {
                    this.currentView = ""
                    window.location.href = url
                    this.flag = 1;
                }
            }

        },
        deviceMotionHandler(eventData) {
            var acceleration = eventData.accelerationIncludingGravity
            var curTime = new Date().getTime()
            if ((curTime - this.last_update) > 100) {
                var diffTime = curTime - this.last_update;
                this.last_update = curTime;
                this.x = acceleration.x;
                this.y = acceleration.y;
                this.z = acceleration.z;
                var speed = Math.abs(this.x + this.y + this.z - this.last_x - this.last_y - this.last_z) / diffTime * 10000;

                if (speed > this.SHAKE_THRESHOLD && this.show === false) {
                    this.$refs.yao.play();
                    if (this.flag == 1) {
                        setTimeout(() => {
                            this.getjp()
                        }, 200);
                        this.flag = 0;
                    }
                }
                this.last_x = this.x;
                this.last_y = this.y;
                this.last_z = this.z;
            }
        },
        getjp() {
            this.$store.dispatch('get_prize', { token: getStore('token'), wid: 174 }).then(() => {
                this.show = true;
                if (this.prize.code === 0) {
                    if (this.prize.type === 1) {
                        this.currentView = 'gift'
                    } else if (this.prize.type === 5) {
                        if (this.prize.crptype === 2) {
                            this.currentView = "goldcoin"
                        } else if (this.prize.crptype === 3) {
                            this.currentView = "redpacket"
                        }
                    }
                } else {
                    this.currentView = "fail"
                }
            })
        }
    }
}

</script>

<style lang="scss">
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

.iconsb,
.icon-success {
    font-size: 1.2rem !important;
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
        } //定义顶部三个图标颜色
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
        } // 定义边框
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
        margin: .6rem auto 0 auto; // padding-bottom: .8rem;
        img {
            width: 100%;
        }
    }
    .shake_list {
        height: 12.2rem;
        overflow: hidden;
        padding: .2rem;
        ul {
            height: 12rem;
            overflow: hidden;
            li {
                transition: all 1s;
                display: flex;
                padding: .2rem;
                position: relative;
                &.active_gold {
                    @include active();
                    @include borderRadius(2rem);
                }
                &.active_ticket {
                    @include active(rgba(253, 122, 156, 0.8), #fd7a9c);
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
                    text-align: left;
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
                    padding-right: 1rem;
                    line-height: 3.5;
                    text-align: right;
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