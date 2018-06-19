import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '../components/HelloWorld';
import SellGoods from 'components/goods/SellGoods';
import SellRatings from 'components/ratings/SellRatings';
import SellSeller from 'components/seller/SellSeller';

Vue.use(Router);

const routes = [
  { path: '/', redirect: '/goods' },
  // { path: '/', component: SellGoods },
  { path: '/goods', component: SellGoods },
  { path: '/ratings', component: SellRatings },
  { path: '/seller', component: SellSeller }
];

export default new Router({
  linkActiveClass: 'active', // 重命名点击路径时的class名称，方便写样式
  routes
});
