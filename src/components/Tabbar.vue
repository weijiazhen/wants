<template>
  <div class="tabbar">
    <!-- 头部搜索框 -->
    <div class="search">
      <van-search
        placeholder=" 潮流新品特卖 "
        v-model="value"
        right-icon="contact"
        background="#fff034"
        shape="round"
        input-align="center"
      />
    </div>
    <!-- 第一层路由 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <!-- 底部导航 -->
    <van-tabbar v-model="active" active-color="#fff034">
      <van-tabbar-item icon="wap-home" @click="navTo('home')">首页</van-tabbar-item>
      <van-tabbar-item icon="cart-o" @click="navTo('car')">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" @click="navTo('mine')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      value: "",
      logo: "../assets/images/logo.png"
    };
  },
  methods: {
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  }
};
</script>

<style scoped>
</style>



