<template>
  <div>
    <header @click="getshouye">当前城市-{{searchValue}}</header>
    <div class="se"><mt-search
      v-model="searchValue"
      cancel-text="取消" placeholder="搜索"
      @keyup.enter.native="search"
    ></mt-search></div>
    <!--<p>GPS定位你所在城市</p>-->
    <!--<div class="b"><span>定位失败</span></div>-->
    <!--<p>热门城市</p>-->
    <!--<div class="b"><span>上海</span></div>-->
  </div>
</template>

<script>
  export default {
    methods: {
      getshouye () {
        this.$router.push('/*')
      },
      search () {

      }
    },
    data () {
      return {
        searchValue: '',
        cityData: []
      }
    }
  }
</script>

<style lang="less">
  .se{
    height: 50px;
    margin-bottom: 5px;
  }
  p{
    color: #797d82;
    text-indent: 10px;
    font-size: 13px;
  }
  header{
    height: 44px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: url('../../../public/cuo.png')15px no-repeat;
  }
  .b{
    text-indent: 25px;
    width: 112px;
    margin: 10px 15px;
    height: 30px;
    background-color: #f4f4f4;
    line-height: 30px;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 14px;
    color: #191a1b;
  }
</style>
