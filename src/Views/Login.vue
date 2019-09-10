<template>
  <div>
    <div class="ss"><img src="../../public/xiong.png" style="width: 60px;height: 60px"/></div>
    <div class="mt">
      <mt-field placeholder="手机号"><mt-button type="default" size="small">获取验证码</mt-button></mt-field>
      <mt-field placeholder="验证码"></mt-field>
    </div>
    <div class="ms">
      <mt-button type="danger" size="large">登录</mt-button>
    </div>
  </div>
</template>
<style>
  .ss{
    height: 225px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mt{
    margin-left: 20px;
  }
  .ms{
    margin-top: 40px;
  }
</style>
