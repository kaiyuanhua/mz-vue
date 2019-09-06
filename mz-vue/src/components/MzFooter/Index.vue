<template>
  <footer class="footer">
    <router-link to="shouye" active-class="a">
      <i class="iconfont icondianying"></i>电影
    </router-link>
    <router-link to="yingyuan" active-class="a">
      <i class="iconfont iconyingyuan"></i>影院
    </router-link>
    <router-link to="zixun" active-class="a">
      <i class="iconfont iconzixun"></i>资讯
    </router-link>
    <router-link to="wode" active-class="a">
      <i class="iconfont iconwode1"></i>我的
    </router-link>
  </footer>
</template>

<style lang="less">
  .footer{
    height: 48px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    a{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: #797d82;
      i{
        font-size: 21px;
      }
      &.a{
        color: #ff5f16;
      }
    }
  }
</style>
