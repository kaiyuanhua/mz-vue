<template>
  <div>
    <div class="wode">
      <router-link tag="div" to="/login" class="img1"><img class="img2" src="../../public/m.png"/></router-link>
      <router-link to="/login" tag="div">立即登录</router-link>
    </div>
    <div class="dindan">
      <ul>
        <router-link tag="li" to="/login"><img src="../../public/din.png"/>
          <div>电影订单</div>
        </router-link>
        <router-link tag="li" to="/login"><img src="../../public/dan.png"/>
          <div>商品订单</div>
        </router-link>
      </ul>
    </div>
    <ul class="en">
      <router-link tag="li" to="/maizuo"><img src="../../public/mai.png"><span>卖座劵</span></router-link>
      <router-link tag="li" to="/yu"><img src="../../public/yu.png"><span>余额</span></router-link>
      <router-link tag="li" to="/syste"><img src="../../public/syste.png"><span>设置</span></router-link>
    </ul>
  </div>
</template>

<style lang="less">
  .en{
    display: flex;
    flex-direction:column;
    li{
      background: url("../../public/xia.png") 380px no-repeat;
      height: 49px;
      display: flex;
      align-items:center;
      border-bottom: #FCFCFC solid;
        img{
          padding: 10px;
          width: 20px;
          height: 20px;
        }
    }
  }
  .dindan{
    display: flex;
    ul{
      color: #797d82;
      width: 100%;
      margin: 0 auto;
      display:flex;
      justify-content:space-around;
      align-items:center;
      text-align: center;
      font-size: 13px;
      padding: 0;
      height: 79px;
      background: #fff;
      margin-bottom: 10px;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
    }
    li{
      display:flex;
      flex-direction:column;
      align-items:center;
      position: relative;
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
      list-style: none;
    }
  }
  .wode{
    text-align: center;
    margin-top: -44px;
    height: 200px;
    padding-left: 22px;
    padding-top: 64px;
    background: url(https://assets.maizuo.com/h5/v5/public/app/img/bg.6837f67.png);
    background-size: cover;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: #fff;
      .img1{
        background-color: #CDCDCD;
        width: 63px;
        height: 63px;
        border-radius: 35px;
        margin-right: 20px;
        border: 2px solid #fff;
          .img2{
            padding-top: 10.5px;
          }
      }
  }
</style>
