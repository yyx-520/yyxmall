<template>
  <tabbar>
    <tabbaritem path="/home" mycolor="blue">
      <img src="~assets/image/tarbar/canku.png" alt="" slot="item-icon">
      <img src="~assets/image/tarbar/canku2.png" alt="" slot="item-activeicon">
      <div slot="item-text">商品</div>
      <!--            <router-link to="/home" replace></router-link>-->
    </tabbaritem>
    <tabbaritem path="/catagory" mycolor="green" >
      <img src="~assets/image/tarbar/zhankai.png" alt="" slot="item-icon">
      <img src="~assets/image/tarbar/zhankai2.png" alt="" slot="item-activeicon">
      <div slot="item-text">分类</div>
      <!--        <router-link to="/details" replace>dfd</router-link>-->
    </tabbaritem>
    <tabbaritem path="/shopcar" mycolor="pink">
      <img src="~assets/image/tarbar/cart-Empty-fill.png" alt="" slot="item-icon">
      <img src="~assets/image/tarbar/cart-Empty-fill2.png" alt="" slot="item-activeicon">
      <div slot="item-text">购物车</div>
      <!--        <router-link to="/shopcar" replace ></router-link>-->
    </tabbaritem>
    <tabbaritem path="/prime" mycolor="yellow">
      <img src="~assets/image/tarbar/bussiness-man-fill.png" alt="" slot="item-icon">
      <img src="~assets/image/tarbar/bussiness-man-fill2.png" alt="" slot="item-activeicon">
      <div slot="item-text">我的</div>
      <!--        <router-link to="/prime" replace></router-link>-->
    </tabbaritem>
  </tabbar>
</template>

<script>
import Tabbaritem from "components/common/tabbar/tabbaritem.vue";
import Tabbar from "components/common/tabbar//tabbar.vue";

export default {
  name: "maintabbr",
  components: {Tabbaritem, Tabbar}

}
</script>

<style scoped>

</style>
