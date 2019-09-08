<template>
  <div>
    <header>当前城市-</header>
    <p>GPS定位你所在城市</p>
    <div class="b"><span>定位失败</span></div>
    <p>热门城市</p>
    <div class="b"><span>上海</span></div>
  </div>
</template>

<style lang="less">
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
