<template>
  <div class="home">
    <!-- 1.搜索 -->
    <van-search
      background="#fff034"
      class="fixedSearch"
      v-model="value"
      placeholder="请输入搜索内容"
      show-action
      @search="onSearch"
    >
      <div slot="action" @click="onSearch">
        <img
          src="http://w.wantscart.com/static/images/3.png"
          width="22"
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

<script>
export default {
  data() {
    return {
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
  }
};
</script>
<style scoped>
.wants-left {
  float: left;
}
</style>



