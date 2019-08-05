<template>
  <div class="news">
    <div class="head">
      <!-- 返回按钮 -->
      <van-icon name="arrow-left" size="30px" @click="goBack" />
    </div>
    <p>消息</p>
    <div class="show">
      <van-icon name="orders-o" size="30px" />
      <p>暂无消息</p>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    //返回逻辑
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.head {
  margin: 10px 0 10px 10px;
}
.show,
.news p {
  text-align: center;
}
.show {
  margin-top: 300px;
}
</style>


