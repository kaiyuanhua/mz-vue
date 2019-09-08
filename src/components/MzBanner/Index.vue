<template>
  <div class="swiper-container MzBanner">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in bannerList" :key="item.id">
        <img :src="item.imgUrl" :alt="item.name"/>
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data () {
      return {
        bannerList: [],
        myswi: null
      }
    },
    created () {
      var thar = this
      axios.get('http://localhost:3000/banner/search').then(function (res) {
        let data = res.data
        thar.bannerList = data.data.data
        console.log(thar.bannerList)
        setTimeout(() => {
          /* eslint-disable */
          this.myswi = new Swiper ('.swiper-container', {
            autoplay: {
              delay: 2000,
              disableOnInteraction: true,
            },
            loop: true, // 循环模式选项
            /// 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
          /* eslint-enable */
        }, 0)
      })
    },
    mounted () {
    }
  }
</script>

<style lang="less">
  .MzBanner {
    width: 100%;
    height: 232px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
