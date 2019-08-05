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
<<<<<<< HEAD
          style="position:absolute;left:10px;top:25px;"
        />
      </div>
      <div slot="action" @click="onSearch">
        <img
          src="http://w.wantscart.com/static/images/2.png"
          width="22"
          style="margin-top:10px"
        />
      </div>
    </van-search>
    <!-- 图片列表 -->
    <div v-for="(item,index) in recommendArr" :key="index">
      <!-- 第1行 -->
      <div class="wants-clearfix wants-12">
        <div class="wants-clearfix" v-for="(i,j) in item.block_items" :key="j">
          <!-- 第一个 -->
          <div class="wants-left" style="width: 33.33%;">
            <a href="./good_detail.html?id=144074" class="wants-left" target="_blank">
              <img :src="i.item_image" alt width="123px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
=======
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
>>>>>>> eba21027b1598542b8a77d3065d9fd14ad7704e8

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
<<<<<<< HEAD
      value: "", //1.搜索框
      recommendArr: [] //2.推荐
    };
  },
  methods: {
    onSearch() {}
  },
  async created() {
    let result = await this.$axios(
      "http://api.wantscart.com/app/layout/tab/12?ua=%7B%22version%22%3A%222.7.1%22%2C%22app_id%22%3A%22h6ybil3f9xuqws98h4%22%2C%22app_name%22%3A%22WANTS%E5%A5%BD%E7%89%A9%22%2C%22gender%22%3A%221%22%2C%22os%22%3A%221%22%7D"
    );
    this.recommendArr = result.data.blocks.slice(0, 6);
    console.log(this.recommendArr);
=======
      active: 0,
      value: "",
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
<<<<<<< HEAD
    Tuijian,
    PubFooter
=======
    Tuijian
>>>>>>> eba21027b1598542b8a77d3065d9fd14ad7704e8
>>>>>>> 7d447698c0b22014d10ab324c8f88200aedd2774
  }
};
</script>






