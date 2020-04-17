<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/close.less';

body {
  background-color: #fff;
  touch-action: none; 
    li{
        list-style: none;
    }
}

html{
   touch-action:none;
}

</style>
