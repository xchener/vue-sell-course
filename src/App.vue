<template>
  <div id="app">
    <!-- <div class="header">
      I am header！
    </div> -->
    <sell-header></sell-header>
    <div class="tab">
      <div class="tab-item">商品</div>
      <div class="tab-item">评论</div>
      <div class="tab-item">商家</div>
    </div>
    <div class="content">
      I am content!
    </div>
  </div>
</template>

<script>
import SellHeader from './components/header/SellHeader.vue';
export default {
  components: {
    SellHeader
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  .tab
    width 100%
    display flex
    height 40px
    line-height 40px
    .tab-item
      flex 1
      text-align center
</style>
