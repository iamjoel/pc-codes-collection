<template>
  <div class="container" :style="{
    'display': isLoaded ? 'block' : 'none'
  }">
    <div class="list">
      <div class="item" v-for="(item,i) in list" :key="i">{{item.name}}</div>
    </div>

    <div class="mt-20 ly ly-r">
      <el-pagination
        prev-text="上一页"
        next-text="下一页"
        background
        layout="prev, pager, next, slot"
        :current-page="pager.current"
        :page-size="5"
        :total="pager.total"
        @current-change="jumpTo"
        >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { fetchList} from '~/service/api'

export default {
  data() {
    return {
      isLoaded: false,
      list: [],
      pager: {
        current: 1,
        total: 1,
      },
    }
  },
  // 正常应该这么写，但mock 服务器端，比较麻烦
  // async asyncData ({route}) {
  //   var pageAt = 1
  //   if(route.query && route.query.pageAt) {
  //     pageAt = parseInt(route.query.pageAt)
  //   }

  //   var list = await fetchList('singer', {
  //     cityId: route.params.id
  //   }, {
  //     current: pageAt,
  //     item: 5
  //   })

  //   return {
  //     isLoaded: true,
  //     list: list.data.data,
  //     pager: {
  //       current: pageAt,
  //       total: list.data.pager ? list.data.pager.total : 10,
  //     }
  //   }
  // },
  methods: {
    jumpTo(pager) {
      this.$router.push({
        path: '/list', 
        query: {pageAt: pager}
      })
      location.reload() // 路由变，并没有刷新。。。
    },
  },
  async mounted() {
    const loading = this.$loading({
      lock: true,
      text: 'Loading',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })

    var route = this.$route
    var pageAt = 1
    if(route.query && route.query.pageAt) {
      pageAt = parseInt(route.query.pageAt)
    }

    var list = await fetchList('singer', {
      cityId: route.params.id
    }, {
      current: pageAt,
      item: 5
    })
    this.list = list.data.data
    this.pager = {
      current: pageAt,
      total: list.data.pager ? list.data.pager.total : 10,
    }
    this.isLoaded = true
    loading.close();

  }
}
</script>

<style scoped>
  .item {
    line-height: 2;
    border-bottom: 1px solid #ddd;
  }
</style>