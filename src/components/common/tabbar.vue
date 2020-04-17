<template>
    <div class="tarbarPage">
        <tabbar>
            <tabbar-item v-for="(item,index) in tabbarData" :key="index" :link="item.link" :class="currentIndex === index+1 ? `select` : ''" @click.native="currentIndex=index+1">
                <i class="iconfont" :class="currentIndex === index+1 ? `${item.selectIcon}` : item.icon" slot="icon" style="font-size:20px;"></i>
                <span slot="label">{{item.name}}</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>


<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
    components: {
        Tabbar,
        TabbarItem
    },
    data() {
        return {
            tabbarData: [
                {
                    link: '',
                    icon: 'icon-shouye-weixuanzhong',
                    selectIcon: 'icon-shouye-copy',
                    name: '首页',
                    id: 1,
                },
                {
                    link: '',
                    icon: 'icon-leimupinleifenleileibie',
                    selectIcon: 'icon-leimupinleifenleileibie2-copy-copy',
                    name: '分类',
                    id: 2,
                },
                {
                    link: '',
                    icon: 'icon-faxian1',
                    selectIcon: 'icon-faxian',
                    name: '发现',
                    id: 3,
                },
                {
                    link: '',
                    icon: 'icon-gouwuche1',
                    selectIcon: 'icon-gouwuche-copy',
                    name: '购物车',
                    id: 4,
                },
                {
                    link: '',
                    icon: 'icon-wode',
                    selectIcon: 'icon-wodedangxuan-copy',
                    name: '我的',
                    id: 5,
                },
            ],
            // 默认选中第一个
            currentIndex:1,
        }
    },
   
}
</script>



<style lang="less" scoped>
@deep: ~'>>>';
.tarbarPage{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 138px;
    i{
        color:#2e2d2d;
    }
    .select{
        i{
            color:#e2231a !important;
    
        }
        span{
            color:#e2231a;
        }
    }
    @{deep} .weui-tabbar{
        background: #f9f9f9;
        // height:1.3rem;
    }
    @{deep}  .weui-tabbar__icon{
        width: auto;
    }
    @{deep} .weui-tabbar__label{
        font-size: 26px;
        color:#2e2d2d;
    }

}
</style>
