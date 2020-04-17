<template>
    <div class="searchPage">
        <div class="top">
            <div class="top_left">
                <img src="@/assets/images/search/back.png" alt="">
                <x-input placeholder="老用户福利" v-model="keyword">
                    <i slot="label"  class="iconfont icon-sousuo" style="font-size:0.45rem;margin-right:0.2rem;"></i>
                    <img style="padding-right:10px;display:block;" src="" width="24" height="24">
                </x-input>
                <p class="top_right">搜索</p>
            </div>
        </div>
        <!-- 热门搜索记录 -->
        <div class="host">
            <h3>热门搜索</h3>
            <ul>
                <li v-for="(item,index) in hostData" :key="index" :class="item.active === '0' ? '' : 'active'" @click="hostClick(item)">
                    {{item.name}}
                </li>
            </ul>
        </div>
        <!-- 历史搜索记录 -->
        <div class="history" v-show="isHistory">
            <div class="his_top">
                <h3>搜索历史</h3>
                <span @click="clearHistory">清空</span>
            </div>
            <ul>
                <li v-for="(item,index) in historyData" :key="index" @click="hostClick(item)">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { XInput,XHeader  } from 'vux'
export default {
    components: {
        XInput,
        XHeader 
    },
    data() {
        return {
            // 热门搜索
            hostData: [
                {
                    name: 'P40',
                    active: '1',
                },
                {
                    name: 'Play4T Pro',
                    active: '1',
                },
                {
                    name: 'Mate Xs',
                    active: '0',
                },
                {
                    name: '荧光30S',
                    active: '0',
                },
                {
                    name: '智慧屏',
                    active: '1',
                },
                {
                    name: 'Mate 30',
                    active: '1',
                },
                {
                    name: '荣耀V30 5G',
                    active: '0',
                },
                {
                    name: '荣耀9X',
                    active: '0',
                },
                {
                    name: 'WATCH GT 2',
                    active: '1',
                },
                {
                    name: '荣耀畅玩9A',
                    active: '0',
                },
                {
                    name: 'nova 5z',
                    active: '0',
                },
                {
                    name: '荣耀20 Pro',
                    active: '0',
                },
            ],
            // 搜索历史记录
            historyData: [
                {
                    name: '智慧屏',
                },
                {
                    name: '手机',
                },
            ],
            // 是否显示搜索记录记录
            isHistory: true,
            // 搜索关键词
            keyword: '',
        }
    },
    methods: {
        /**
         * 点击热门搜索记录
         */
        hostClick(item) {
            this.keyword = item.name;
        },
        /**
         * 清空历史记录
         */
        clearHistory() {
            this.historyData = [];
            this.isHistory = false;
        }
    }
}
</script>

<style lang="less">
    .searchPage{
        .top{
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1rem;
            padding:0.2rem;
            background: #fff;
            .top_left{
                display: flex;
                width:90%;
                align-items: center;
                img{
                    height:0.55rem;
                }
                /deep/ .vux-header{
                    background: transparent;
                    /deep/ .left-arrow:before{
                        width:0.8rem;
                    }
                }
                /deep/ .vux-x-input{
                    background: #f5f5f5;
                    width:99%;
                    margin-left: 0.2rem;
                    border-radius: 0.5rem;
                }
                /deep/ .weui-cell:before{
                    border-top: 0;
                }
            }
            .top_right{
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 0.45rem;
                width:10%;
            }
        }
        .host{
            padding-bottom: 0.2rem;
            h3{
                background: #fff;
                padding: 0.2rem 0 0.4rem 0.3rem;
                color:#333333;
            }
            ul{
                overflow: hidden;
                li{
                    float: left;
                    background: #f9f9f9;
                    margin: 0.2rem;
                    padding: 0.1rem 0.25rem 0;
                    color:#454545;
                    &.active{
                        color:#cb0c2e;
                    }
                }
            }
        }
        .history{
            padding-top: 0.3rem;
            background: #f9f9f9;
            .his_top{
                background: #fff;
                display: flex;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid #e5e5e5;
                padding: 0.2rem 0.3rem;
                span{
                    color:#888;
                }
            }
            ul{
                overflow: hidden;
                background: #fff;
                padding: 0.2rem 0.3rem;
                li{
                    padding: 0.2rem 0.15rem;
                    float: left;
                }
            }
        }
    }
</style>

