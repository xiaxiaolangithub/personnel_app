<template>
    <div class="enterpage">
        <div class="banner_swiper">
            <swiper :list="bannerList" v-model="swiperIndex" @on-index-change="swiperChange" dots-position="center" auto :loop="true"></swiper>
        </div>
        <ul class="advertising">
            <li v-for="(item,index) in adverData" :key="index">
                <img  v-lazy="item.src" alt="">
            </li>
        </ul>
        <div class="nav_swiper">
            <swiper dots-position="center" :loop="true">
                <swiper-item class="black" v-for="(item,index) in navList" :key="index">
                    <ul>
                        <li v-for="(ele,i) in item.itemData" :key="i">
                            <div class="nav_img">
                                <img  v-lazy="ele.url" alt="">
                            </div>
                            <p>{{ele.title}}</p>
                        </li>
                    </ul>
                </swiper-item>
            </swiper>
        </div>
        <!-- 新人礼包 -->
        <div class="couple">
            <img src="@/assets/images/home/couple.png" alt="">
        </div>
        <!-- 各类活动 -->
        <div class="activities">
            <ul class="activities_area">
                <li v-for="(item,index) in activitiesData" :key="index" class="area_li" >
                    <h3 class="title">
                        <p>{{item.title}} </p>
                        <swiper auto loop height="40px" direction="vertical" :interval=5000 class="text-scroll" :show-dots="false" v-show="item.num === 3">
                            <swiper-item>
                                <span :class="item.num === 3 ? ' instruct_down': 'instruct'" :style="`color: transparent;background-clip: text;background:linear-gradient(45deg, ${item.color_start} 25%,${item.color_end} 70%);-webkit-background-clip: text;`" >
                                    <!-- 秒杀显示时间倒计时 -->
                                    {{item.instruct}} {{hr}}:{{min}}:{{sec}}
                                </span>
                            </swiper-item>
                            <swiper-item><p>秒抢专区</p></swiper-item>
                        </swiper>
                        <span v-if="item.num !== 3" class="instruct" :style="`color: transparent;background-clip: text;background:linear-gradient(45deg, ${item.color_start} 25%,${item.color_end} 70%);-webkit-background-clip: text;`">
                            {{item.instruct}}
                        </span>
                        <i v-if="item.num !== 3" class="iconfont icon-gengduo" :style="`color:${item.color_start}`"></i>
                    </h3>
                    <p class="sum_title" :style="`color: transparent;background-clip: text;background:linear-gradient(45deg, ${item.color_start} 25%,${item.color_end} 70%);-webkit-background-clip: text;`">{{item.sum_title}}</p>
                    <ul class="activities_part">
                        <li v-for="(ele,i) in item.goods" :key="i" :class="{'part_li':item.num === 3} ">
                            <div class="active_img">
                                <img  v-lazy="ele.url" alt="" />
                                <h4 v-show="item.num === 3" class="discount">{{ele.discount}}</h4>
                                <p v-show="item.num === 3" class="base_price">{{ele.base}}</p>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <!-- 我的频道 -->
        <div class="channel">
            <div class="channel_inner">
                <div class="channel_top">
                    <h3>我的频道</h3>
                    <p>
                        发现更多频道
                        <span><i class="iconfont icon-gengduo"></i></span>
                    </p>
                </div>
                <ul class="channel_bottom">
                    <li v-for="(item,index) in channelData" :key="index">
                        <div class="channel_img">
                            <img  v-lazy="item.url"  alt="" />
                        </div>
                        <div class="channel_content">
                            <img  v-lazy="item.icon"  alt="" />
                            <span>{{item.title}}</span>
                        </div>
                    </li>
                    <p class="channel_more">
                        <x-icon type="ios-arrow-thin-left" size="30"></x-icon>
                        <span >查看更多</span>
                    </p>
                </ul>
            </div>
        </div>
        <!-- 商品活动 -->
        <div class="eventact"> 
            <sticky scroll-box="vux_view_box_body"   ref="sticky"   :offset="46"   :check-sticky-support="false"  :disabled="disabled">
                <tab :line-width=0 scroll-threshold="5">
                    <tab-item :selected="demo === index" v-for="(item, index) in eventTabData" @click="demo = index" :key="index">
                        <h3>{{item.title}}</h3>
                        <p>{{item.sum_title}}</p>
                        <img :src="item.url" alt="">
                    </tab-item>
                </tab>
            </sticky>
        </div>
    </div>
</template>

<script>
import { Swiper,SwiperItem,Sticky,Tab, TabItem  } from 'vux'
export default {
    components: {
        Swiper,
        SwiperItem,
        Sticky ,
        Tab, 
        TabItem
    },
    data() {
        return {
            // 时间倒计时
            day: 0,//天
            hr: 0,//时
            min: 0,//分
            sec: 0,//秒
            // 轮播索引
            swiperIndex: 0,
            // banner轮播数据
            bannerList: [
                {
                    url: 'javascript:',
                    img: 'https://img10.360buyimg.com/pop/s590x470_jfs/t1/99629/31/18272/90641/5e9573f3E8a9e4a87/283b79696691265c.jpg.webp', // 404
                    title: '轮播一',
                },
                {
                    url: 'javascript:',
                    img: 'https://img20.360buyimg.com/pop/s590x470_jfs/t1/106983/23/18008/81656/5e8d4a94E9aa02430/ae43de98e46be827.jpg.webp',
                    title: '轮播二'
                },
                {
                    url: 'javascript:',
                    img: '//imgcps.jd.com/ling/12695948/5pWZ6IKy6ICD6K-V5Zu-5Lmm/5q-P5ruhMTAw5YePNTA/p-5bd8253082acdd181d02fa55/e51099d6.jpg',
                    title: '轮播三'
                }, 
                {
                    url: 'javascript:',
                    img: 'https://img10.360buyimg.com/pop/s590x470_jfs/t1/99629/31/18272/90641/5e9573f3E8a9e4a87/283b79696691265c.jpg.webp', // 404
                    title: '轮播四',
                },
                {
                    url: 'javascript:',
                    img: 'https:////img30.360buyimg.com/da/s590x470_jfs/t1/86432/19/18464/94619/5e9429efE31d8399e/6d3b67c2d822aa39.jpg.webp', // 404
                    title: '轮播五',
                },
                {
                    url: 'javascript:',
                    img: 'https:////imgcps.jd.com/ling/29039858049/57K-5ZOB5a625YW36I2f6IGa/5q-P5ruhMzAw5YePMzA/p-5bd8253082acdd181d02fa5d/984ab54a.jpg', // 404
                    title: '轮播六',
                }
            ],
            // 广告数据
            adverData: [
                {
                    src: require('../../assets/images/home/enter_left.png',)
                },
                {
                    src: require('../../assets/images/home/enter_middle.png'),
                },
                {
                    src: require('../../assets/images/home/enter_right.png'),
                },
            ],
            // 导航轮播数据
            navList: [
                {
                    itemData: [
                        {
                            title: '京东超市',
                            url: require('../../assets/images/home/nav (1).png')
                        },
                        {
                            title: '数码电器',
                            url: require('../../assets/images/home/nav (2).png')
                        },
                        {
                            title: '京东服饰',
                            url: require('../../assets/images/home/nav (3).png')
                        },
                        {
                            title: '免费水果',
                            url: require('../../assets/images/home/nav (4).png')
                        },
                        {
                            title: '京东到家',
                            url: require('../../assets/images/home/nav (5).png')
                        },
                        {
                            title: '生活服务',
                            url: require('../../assets/images/home/nav (6).png')
                        },
                        {
                            title: '领京豆',
                            url: require('../../assets/images/home/nav (7).png')
                        },
                        {
                            title: '领券',
                            url: require('../../assets/images/home/nav (8).png')
                        },
                        {
                            title: '领金贴',
                            url: require('../../assets/images/home/nav (9).png')
                        },
                        {
                            title: 'PLUS会员',
                            url: require('../../assets/images/home/nav (10).png')
                        },
                    ]
                },
                {
                    itemData: [
                        {
                            title: '京东国际',
                            url: require('../../assets/images/home/nav (10).png')
                        },
                        {
                            title: '数码拍卖',
                            url: require('../../assets/images/home/nav (9).png')
                        },
                        {
                            title: '唯品会',
                            url: require('../../assets/images/home/nav (8).png')
                        },
                        {
                            title: '沃尔玛',
                            url: require('../../assets/images/home/nav (7).png')
                        },
                        {
                            title: '京东旅行',
                            url: require('../../assets/images/home/nav (6).png')
                        },
                        {
                            title: '看病购药',
                            url: require('../../assets/images/home/nav (5).png')
                        },
                        {
                            title: '拍拍二手',
                            url: require('../../assets/images/home/nav (4).png')
                        },
                        {
                            title: '京东生鲜',
                            url: require('../../assets/images/home/nav (3).png')
                        },
                        {
                            title: '种豆得豆',
                            url: require('../../assets/images/home/nav (2).png')
                        },
                        {
                            title: '更多频道',
                            url: require('../../assets/images/home/nav (1).png')
                        },
                    ]
                },

            ],
            // 活动数据
            activitiesData: [
                {
                    title: '京东秒杀',
                    instruct: '16点场',
                    color_start:'#ff2b21',
                    color_end:'#f9454e',
                    num: 3,
                    goods:[
                        {
                            url: require('../../assets/images/home/kill/kill (1).png'),
                            discount: '￥5639',
                            base: '￥5999'
                        },
                        {
                            url: require('../../assets/images/home/kill/kill (2).png'),
                            discount: '￥122',
                            base: '￥129'
                        },
                        {
                            url: require('../../assets/images/home/kill/kill (3).png'),
                            discount: '￥1199',
                            base: '￥1599'
                        },
                    ]
                },
                {
                    title: '京东直播',
                    sum_title: '有趣有料',
                    instruct: '好物超值购',
                    color_start:'#f35af9',
                    color_end:'#ec32ab',
                    sum: 2,
                    goods:[
                        {
                            url: require('../../assets/images/home/live/live (1).png'),
                            discount: '',
                            base: ''
                        },
                        {
                            url: require('../../assets/images/home/live/live (2).png'),
                            discount: '',
                            base: ''
                        },
                    ]
                },
                {
                    title: '每日特价',
                    sum_title: '9块9疯抢',
                    instruct: '跟榜购好物',
                    color_start:'#ff0382',
                    color_end:'#ff1c4f',
                    sum: 2,
                    goods:[
                        {
                            url: require('../../assets/images/home/special/special (1).png'),
                            discount: '',
                            base: ''
                        },
                        {
                            url: require('../../assets/images/home/special/special (2).png'),
                            discount: '',
                            base: ''
                        },
                    ]
                },
                {
                    title: '发现好货',
                    sum_title: '美好新生活',
                    instruct: '品质好物',
                    color_start:'#56e2bc',
                    color_end:'#2fc9de',
                    sum: 2,
                    goods:[
                        {
                            url: require('../../assets/images/home/found/found (1).png'),
                            discount: '',
                            base: ''
                        },
                        {
                            url: require('../../assets/images/home/found/found (2).png'),
                            discount: '',
                            base: ''
                        },
                    ]
                },
                {
                    title: '品牌闪购',
                    sum_title: '享惊喜折扣',
                    instruct: '李宁特卖日',
                    color_start:'#9351ec',
                    color_end:'#5530f3',
                    sum: 2,
                    goods:[
                        {
                            url: require('../../assets/images/home/brand/brand (1).png'),
                            discount: '',
                            base: ''
                        },
                        {
                            url: require('../../assets/images/home/brand/brand (2).png'),
                            discount: '',
                            base: ''
                        },
                    ]
                },
                {
                    title: '新品首发',
                    sum_title: '京东小魔方',
                    instruct: '新潮趣玩',
                    color_start:'#565ddc',
                    color_end:'#4190fc',
                    sum: 2,
                    goods:[
                        {
                            url: require('../../assets/images/home/starting/starting (1).png'),
                            discount: '',
                            base: ''
                        },
                        {
                            url: require('../../assets/images/home/starting/starting (2).png'),
                            discount: '',
                            base: ''
                        },
                    ]
                },
            ],
            // 频道数据
            channelData: [
                {
                    icon:require('../../assets/images/home/channel/channel_icon (3).png'),
                    url: require('../../assets/images/home/channel/channel_img (2).png'),
                    title: '免费水果',
                },
                {
                    icon:require('../../assets/images/home/channel/channel_icon (4).png'),
                    url: require('../../assets/images/home/channel/channel_img (3).png'),
                    title: '京东生鲜',
                },
                {
                    icon:require('../../assets/images/home/channel/channel_icon (1).png'),
                    url: require('../../assets/images/home/channel/channel_img (4).png'),
                    title: '拍拍夺宝导',
                },
                {
                    icon:require('../../assets/images/home/channel/channel_icon (2).png'),
                    url: require('../../assets/images/home/channel/channel_img (1).png'),
                    title: '自营药店',
                },
                {
                    icon:require('../../assets/images/home/channel/channel_icon (3).png'),
                    url: require('../../assets/images/home/channel/channel_img (2).png'),
                    title: '免费水果',
                },
                {
                    icon:require('../../assets/images/home/channel/channel_icon (4).png'),
                    url: require('../../assets/images/home/channel/channel_img (3).png'),
                    title: '京东生鲜',
                },
                {
                    icon:require('../../assets/images/home/channel/channel_icon (1).png'),
                    url: require('../../assets/images/home/channel/channel_img (4).png'),
                    title: '拍拍夺宝导',
                },
                {
                    icon:require('../../assets/images/home/channel/channel_icon (2).png'),
                    url: require('../../assets/images/home/channel/channel_img (1).png'),
                    title: '自营药店',
                },
            ],
            // 商品底部tab固定数据
            eventTabData: [
                {
                    title: '精选',
                    sum_title: '为你推荐',
                    icon: require('../../assets/images/home/show.png')
                },
                {
                    title: '新品',
                    sum_title: '春日焕新',
                    icon: require('../../assets/images/home/show.png')
                },
                {
                    title: '直播',
                    sum_title: '主播力荐',
                    icon: require('../../assets/images/home/show.png')
                },
                {
                    title: '实惠',
                    sum_title: '超值好货',
                    icon: require('../../assets/images/home/show.png')
                },
                {
                    title: '进口',
                    sum_title: '京东国际',
                    icon: require('../../assets/images/home/show.png')
                },
            ],
            // 商品活动选择索引
            demo: 0,

            
        }
    },
    mounted(){
        this.countdown()
    },
    created() {
    },
    methods: {
        //倒计时
        countdown() {
            const end = Date.parse(new Date("2020-04-17 16:00:00"));
            const now = Date.parse(new Date());
            const msec = end - now;
            let day = parseInt(msec / 1000 / 60 / 60 / 24);
            let hr = parseInt(msec / 1000 / 60 / 60 % 24)*day;
            let min = parseInt(msec / 1000 / 60 % 60);
            let sec = parseInt(msec / 1000 % 60);
            this.day = day
            this.hr = hr > 9 ? hr : '0' + hr;
            this.min = min > 9 ? min : '0' + min;
            this.sec = sec > 9 ? sec : '0' + sec;
            const that = this;
            this._interval = setTimeout(function () {
                that.countdown()
            }, 1000)
        },
        swiperChange() {

        },
        activeMore(item) {
            return `color: ${item.color_start};`
        }
    },
    // 当离开页面时，清除倒计时
    beforeDestroy() {
        clearInterval(this._interval)
    },


}
</script>


<style lang="less" scoped>
@deep: ~'>>>';
.enterpage{
    .banner_swiper{
        padding:0 30px;
        position: absolute;
        top:390px;
        width: 100%;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        @{deep} .vux-swiper{
            height:400px !important;
        }
        @{deep} .vux-slider{
            width:1020px;
            height: 400px;
            border-radius:20px;
        }
        @{deep} .vux-icon-dot{
            width: 24px;
            height: 8px;
            background: #7a7c7f;
            opacity: 0.6;
            &.active{
                width:36px;
                background: #fff;
            }
        }
    }
    .advertising{
        padding:160px 30px 0;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        li{
            width:380px;
            height: 250px;
            display: flex;
            &:nth-child(1),&:nth-child(3) {
                width:320px;
            }
        }
        img{
            width:100%;
        }
    }
    .nav_swiper{
        background: #f6f6f6;
        ul{
            padding:30px 50px;
            box-sizing: border-box;
            overflow: hidden;
            li{
                width:20%;
                height: 190px;
                float: left;
                padding-top:10px;
                .nav_img{
                    width:100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    img{
                        width:115px;
                    }
                }
                p{
                    line-height: 76px;
                    font-size: 30px;
                    color:#848689;
                    width:100%;
                    text-align: center;
                }
            }
        }
        @{deep} .vux-indicator{
            margin-top:-15px;

        }
        @{deep} .vux-icon-dot{
            background: #c5c5c5;
            width:22px;
            height: 8px;
            &.active{
                width:35px;
                background: #000;
            }

        }
    }
    .couple{
        padding:35px 30px;
        box-sizing: border-box;
        background: #f6f6f6;
        display: flex;
        justify-content: center;
        img{
            width:100%;
            height: 492px;
        }
    }
    // 活动列表
    .activities{
        padding:30px;
        background: #f6f6f6;
        padding-top:0;
        box-sizing: border-box;
        .activities_area{
            background: #fff;
            padding:10px 30px;
            box-sizing: border-box;
            overflow: hidden;
            .area_li{
                float: left;
                width:50%;
                padding-top:25px;
            }
            &>li:nth-child(1) {
                width:55%;
            }
            &>li:nth-child(2) {
                width:45%;
            }
            .title {
                display: flex;
                align-items: center;
                p{
                    font-size: 42px;
                    line-height: 55px;
                    color:#000;
                    font-weight: bold;
                    margin-right: 10px;
                }
                @{deep} .vux-swiper{
                    width:200px;
                    margin-left: 20px;
                    .vux-swiper-item{
                        margin-top:25px;
                    }
                    p{
                        color:#ff2b21;
                        font-size: 30px;
                    }
                }

            }
            .sum_title{
                font-size: 30px;
                line-height: 46px;
            }
        }
        .activities_part{
            overflow: hidden;
            li{
                width:50%;
                float: left;
                height: 250px;
                display: flex;
                justify-content: center;
                align-items: center;
                img{
                    width:186px;
                    height: 222px;
                }
                &.part_li{
                    width:30%;
                    box-sizing: border-box;
                    margin-right: 5px;
                    img{
                        width:100%;
                        height: 140px;
                    }
                }
            }
            .discount{
                font-size: 25px;
                color:#000;
                text-align: center;
                font-weight: bold;
                padding-top:15px;
            }
            .base_price{
                font-size: 20px;
                color:#9f9f9f;
                text-align: center;
                text-decoration: line-through;
            }
        }
        .instruct,.instruct_down{
            font-size: 30px;
        }
        .instruct_down{
            height: 50px;
            padding:0 5px;
            box-sizing: border-box;
            color:#fff !important;
            background: #ff2b21 !important;
            border-radius: 25px;
            padding:0 15px;
            line-height: 50px;
        }
    }
    // 我的频道
    .channel{
        padding:0 30px;
        background: #f6f6f6;
        .channel_inner{
            padding:0 28px 40px 30px;
            background: #fff;
            overflow: hidden;
        }
        .channel_top{
            line-height: 104px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h3{
                font-size: 40px;
                color:#545454;
                font-weight: bold;
            }
            p{
                font-size: 32px;
                color:#666;
                display: flex;
                align-items: center;
                span{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 50%;
                    margin-left: 15px;
                    color:#fff;
                    width:37px;
                    height: 37px;
                    background-image: linear-gradient( 135deg, #f34f80 10%, #fa454d 100%);
                    .icon-gengduo{
                        margin-left: -5px;
                        font-size: 24px;
                    }
                }
            }
        }
        .channel_bottom{
            display: flex;
            width: 100%;
            position: relative;
            background: #fff;
            box-sizing: border-box;
            /* 下面是实现横向滚动的关键代码 */
            display: inline;
            float: left;
            white-space: nowrap;
            overflow-x: scroll;
            -webkit-overflow-scrolling: touch; /*解决在ios滑动不顺畅问题*/
            overflow-y: hidden;
            &::-webkit-scrollbar {
                display: none;
            }
            li{
                width:200px;
                margin-right: 42px;
                display: inline-block;  /*设置li为行内块级元素*/
                text-align: center;
                .channel_img{
                    width:100%;
                    img{
                        width:100%;
                        height: 190px;
                    }
                }
                .channel_content{
                    display: flex;
                    align-items: center;
                    img{
                        width:40px;
                        height: 40px;
                        margin-right: 10px;
                    }
                    span{
                        color:#000;
                        font-size: 36px;
                        width:154px;
                        display: inline-block;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                }
                &:nth-child(4n) {
                    margin-right: 0;
                }
            }
            .channel_more{
                width:20px;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                right: 15px;
            }
        }
    }
    // 商品各类活动集合
    .eventact{
        @{deep} .vux-tab-selected{
            color:#e2231a;
        }
    }

}
</style>
