<template>
  <div>
    <router-link tag="div" to="/city" class="city-fixed">
      <span>北京</span><i class="iconfont iconxiala" style="font-size: 10px;"></i>
    </router-link>
    <MzBanner></MzBanner>
    <mz-tabs></mz-tabs>
    <ul>
      <router-link tag="li" to="/Xiangqing/100">速度与激情</router-link>
      <router-link tag="li" to="/Xiangqing/200">昆虫总动员2</router-link>
      <router-link tag="li" to="/Xiangqing/300">阿拉丁</router-link>
    </ul>
  </div>
</template>

<style>
  .city-fixed{
    position: absolute;
    top: 18px;
    left: 7px;
    color: #fff;
    z-index: 10;
    font-size: 13px;
    background: rgba(0,0,0,.2);
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    padding: 0 5px;
  }
</style>

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
