<template>
    <div class="homePage">
        <!-- 头部搜索 -->
        <headcom></headcom>
        <!-- 中间内容 -->
         <router-view />
        <!-- 底部菜单 -->
        <tabbarcom></tabbarcom>
    </div>
</template>

<script>
import headcom from './common/head.vue'
import tabbarcom  from './common/tabbar.vue' // 引入Tabbar
export default {
    components: {
        tabbarcom,
        headcom
    },
    data() {
        return {

        }
    },
    created() {
        this.$http.get('http://localhost:8082/home').then (({data}) => {
            console.log(data)
        }).catch(err => {
            this.$vux.toast.text('服务器出错啦！', 'middle')
        })
    }
}
</script>


<style lang="less" scoped>
.homePage {
    padding-bottom: 138px;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
}
</style>

