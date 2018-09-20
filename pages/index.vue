<template>
  <div class="main">
    <section class="container">
      <!-- 轮播 -->
      <div class="banner-list">
        <no-ssr>
          <el-carousel trigger="click" height="450px">
            <el-carousel-item  v-for="index in 5" :key="index">
              <img :src="'http://via.placeholder.com/200x100?text=' + index" style="width: 100%;height: 100%;"/>
            </el-carousel-item>
          </el-carousel>
        </no-ssr>
      </div>

      <el-button class="mt-20-i" type="primary" @click="$router.push('/list')">跳转至列表页</el-button>
    </section>

  </div>
  
</template>

<script>

export default {
  components: {
  }
}
</script>


