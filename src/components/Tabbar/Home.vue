<template>
  <div class="home">
    <!-- 1.搜索 -->
    <van-search
      style="padding-left:45px;"
      background="#fff034"
      class="fixedSearch"
      v-model="value"
      placeholder=" 潮流新品特卖 "
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">
        <img
          src="http://w.wantscart.com/static/images/3.png"
          width="22"
          style="position:absolute;left:10px;top:20px;"
        />
      </div>
      <div slot="action" @click="onSearch">
        <img src="http://w.wantscart.com/static/images/2.png" width="22" style="margin-top:10px" />
      </div>
    </van-search>
    <!-- 2.标签栏 -->
    <van-tabs animated line-width="75px"  line-height="1px" :swipe-threshold="navNum">
      <!-- 推荐 -->
      <van-tab :title="navArr[0]">
        <Tuijian/>
      </van-tab>
      <!-- 居家 -->
      <van-tab :title="navArr[1]">
        <!-- <Tuijian/> -->居家
      </van-tab>
      <!-- 服装 -->
      <van-tab :title="navArr[2]">
        <!-- <Tuijian/> -->服装
      </van-tab>
      <!-- 鞋靴 -->
      <van-tab :title="navArr[3]">
        <!-- <Tuijian/> -->鞋靴
      </van-tab>
      <!-- 包类 -->
      <van-tab :title="navArr[4]">
        <!-- <Tuijian/> -->包类
      </van-tab>
    </van-tabs>
    <!-- 尾部 -->
    <PubFooter/>
  </div> 
</template>
<script>
import Tuijian from "../Home/Tuijian";
import PubFooter from "../Home/PubFooter";
export default {
  data() {
    return {
      value: "", //1.搜索框
      navArr: ["推荐", "居家", "服装", "鞋靴", "包类"],
      navNum: 5
    };
  },
  methods: {
    onSearch() {},
    navTo(name) {
      // 编程式导航
      this.$router.push({
        name
      });
    }
  },
  components: {
    Tuijian,
    PubFooter
  }
};
</script>






