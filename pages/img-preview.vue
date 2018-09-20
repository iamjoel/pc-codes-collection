<template>
  <div class="main">
    <img class="img" src="http://via.placeholder.com/200x100" alt="" ref="img" @click="preview('img')"/>
  </div>
</template>

<script>
var SmartPhoto
export default {
  data() {
    return {

    }  
  },
  methods: {
    preview(ref) {
      if(SmartPhoto) {
        new SmartPhoto(".img")
      } else {
        import('smartphoto').then(module => {
          var SmartPhoto = module
          new SmartPhoto(".img")
        })
      }
      
    }
  }
}
</script>
<!-- 加css 有问题 -->
<!-- <style src="@/assets/vendor/smartphoto.min.css"></style> -->
<style scoped></style>