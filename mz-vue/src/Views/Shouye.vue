<template>
  <div>
    <MzBanner></MzBanner>
    <mz-tabs></mz-tabs>
    <button @click="goxq">城市选择</button>
    <ul>
      <router-link tag="li" to="/Xiangqing/100">速度与激情</router-link>
      <router-link tag="li" to="/Xiangqing/200">昆虫总动员2</router-link>
      <router-link tag="li" to="/Xiangqing/300">阿拉丁</router-link>
    </ul>
  </div>
</template>

<script>
  import MzBanner from '../components/MzBanner/Index'
  import MzTabs from '../components/MzTabs/Index'
  export default {
    components: {
      MzBanner,
      MzTabs
    },
    methods: {
      goxq () {
        this.$router.push('/city')
      }
    }
  }
</script>
