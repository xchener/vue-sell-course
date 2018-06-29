<template>
  <div id="app">
    <!-- <div class="header">
      I am header！
    </div> -->
    <sell-header :seller="seller"></sell-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 路由匹配的组件将渲染在这里 -->
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import SellHeader from 'components/header/SellHeader.vue';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    this.$http.get('/api/seller').then((res) => {
      res = res.body;
      if (res.errno === ERR_OK) {
        this.seller = res.data;
      }
    });
  },
  components: {
    SellHeader
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/stylus/mixin";
// 布局、宽高（重绘）、字体颜色等
#app
  .tab
    width 100%
    display flex
    height 40px
    line-height 40px
    border-1px(rgba(7, 17, 27, 0.1))
    // border-bottom 1px solid rgba(7, 17, 27, 0.1)
    .tab-item
      flex 1
      text-align center
      & > a
        display block
        font-size 14px
        color rgb(77,85,93)
        &.active
          color: rgb(240, 20, 20)
</style>
