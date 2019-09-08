<template>
  <div>
    <mz-header></mz-header>
    <div class="p"><span class="sp">A</span></div>
  </div>
</template>

<script>
  import MzHeader from '../components/MzHeader/Index'
  export default {
    components: {
      MzHeader
    }
  }
</script>

<style lang="less">
  .p{
    height: 30px;
    display: flex;
    background-color: #F4F4F4;
       .sp{
         text-indent: 10px;
         display: flex;
         align-items: center;
       }
  }
</style>
