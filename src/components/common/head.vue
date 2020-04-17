<template>
    <div class="headpage">
        <div class="top">
            <div class="top_left">
                <img src="@/assets/images/home/1_03.png" alt="">
                <span><x-icon type="ios-arrow-right" size="30" style="fill: #eb3531"></x-icon></span>
            </div>
            <div class="top_right">
                <img src="@/assets/images/home/bayp.png" alt="" class="bayp">
                <div class="scan sys">
                    <i class="iconfont icon-saoyisao1"></i>
                    <p>扫一扫</p>
                </div>
                <div class="scan">
                    <i class="iconfont icon-xiazai16"></i>
                    <p>消息</p>
                </div>
            </div>
        </div>
        <div class="bottom">
            <x-input placeholder="儿童餐椅" :show-clear="false" @on-focus="$router.push({path: '/search'})">
                <i slot="label"  class="iconfont icon-sousuo" style="font-size:0.45rem;margin-right:0.2rem;"></i>
                <img style="padding-right:10px;display:block;" src="" width="24" height="24">
                <span slot="right">
                    <i class="iconfont icon-zhaoxiangji" size="22"></i>
                </span>
            </x-input>
        </div>
        <!-- 商品分类 -->
        <div class="jd_type">
            <ul>
                <li v-for="(item,index) in typeData" :key="index" @click="jdTypeClick(item,index)" :class="{active: typeIndex === index}">{{item.name}}</li>
            </ul>
            <div class="jd_type_right">
                <i class="iconfont icon-icon_xinyong_xianxing_jijin- type_icon"></i>
                <h2>分类</h2>
            </div>
        </div>
    </div>
</template>

<script>
import { Group, XInput,Tab,TabItem,Sticky  } from 'vux'
export default {
    components: {
        Group,
        XInput,
        Tab,
        TabItem,
        Sticky
    },
    data() {
        return {
            // 分类索引
            typeIndex: 0,
            // 分类头部数据
            typeData: [
                {
                    name: '首页',
                },
                {
                    name: '数码',
                },
                {
                    name: '手机',
                },
                {
                    name: '食品',
                },
                {
                    name: '生鲜',
                },
                {
                    name: '家居厨具',
                },
                {
                    name: '运动',
                },
                {
                    name: '美妆',
                },
            ],
            // 分类索引
            typeIndex: 0,
        }
    },
    methods: {
        /**
         * 点击分类
         */
        jdTypeClick(item,index) {
            this.typeIndex = index;
            if(index === 0) {
                this.$router.push({path: '/home/enter'})
            } else {
                this.$router.push({path: '/home/goodtype'})
            }
        }
    },
}
</script>

<style lang="less" scoped>
@deep: ~'>>>';
    .headpage{
        padding: 30px 0;
        background-image: linear-gradient( 135deg, #cf291b 10%, #cc251c 100%);
        height: 590px;
        .top,.bottom{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 25px;
        }
        .top{
            padding:0 35px;
            .top_left{
                display: flex;
                align-items: center;
                img{
                    height: 85px;
                    width:450px;
                }
                span{
                    display: flex;
                    align-items: center;
                    width:45px;
                    height: 45px;
                    background: #fff;
                    border-radius: 50%;
                    justify-content: center;
                    margin-left: 0.1rem;
                }
            }
            .top_right{
                display: flex;
                align-items:center;
                color:#fff;
                .bayp{
                    width:72px;
                    margin-right: 40px;
                }
                .sys{
                    margin-right: 40px;
                }
                .scan{
                    text-align: center;
                    .icon-saoyisao1{
                        font-size: 55px;
                    }
                    .icon-xiazai16{
                        font-size: 60px;
                    }
                    p{
                        font-size: 24px;
                        color:#ffeff3;
                        line-height: 24px;
                    }
                }
            }
        }
        .bottom{
            padding:0 35px;
            .icon-zhaoxiangji{
                font-size: 0.5rem;
            }
        }
        @{deep} .weui-cell{
            height: 88px;
            line-height: 88px;
            background: #f5f5f5;
            border-radius: 50px;
            width: 100%;
            padding: 0 40px 0 34px;
            box-sizing: border-box;
        }
        @{deep} .weui-input{
            font-size: 32px;
            color:#9b9b9b;
        }
        @{deep} .weui-cell__ft{
            height: 100%;
        }
        .jd_type{
            overflow: hidden;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 18px 0 35px;
            height: 100px;
            box-sizing: border-box;
            ul {
                display: flex;
                width: 80%;
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
                li {
                    display: inline-block;  /*设置li为行内块级元素*/
                    text-align: left;
                    border-radius: 6px 6px 6px 6px;
                    margin-right: 40px;
                    color:#fff;
                    font-size: 40px;
                    line-height: 68px;
                    &.active{
                        color:#fff;
                        font-size: 46px;
                        font-weight: bold;
                        border-bottom:10px transparent solid;
                        border-image:linear-gradient(to right,#f9fffe,#cd261b) 1 10;
                    }
                }   
            }
            .jd_type_right{
                display: flex;
                align-items: center;
                justify-content: center;
                width:18%;
                height: 100%;
                margin-right: 0.1rem;
                box-shadow:-7px 0px 7px -7px #5E5E5E;
                .type_icon{
                    font-size: 0.4rem;
                    color:#fff;
                    margin-right: 0.1rem;
                }
                h2{
                    font-size: 0.4rem;
                    color:#fff;
                    
                }
            }
        }
    
    }
</style>
