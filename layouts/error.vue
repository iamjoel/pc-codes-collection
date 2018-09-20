<template>
  <div class="container">
    <!-- 自定义错误页面 -->
    <div v-if="error.statusCode === 404" class="ta-c">
      <img src="./images/404.png" alt="">
      <div class="error-text ff-yahei">找不到该页面!</div>
      <div class="home-btn ly ly-c">
        <el-button class="mt-20-i" type="primary" @click="$router.push('/')">返回首页</el-button>
      </div>
    </div>
    <h1 v-else>应用发生错误异常</h1>
    <!-- <nuxt-link to="/">首 页</nuxt-link> -->
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style scoped>
  .error-text {
    margin-top: 10px;
    font-size: 30px;
    color: #666;
  }

</style>