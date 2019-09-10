<template>
  <div>
    <MzHeader></MzHeader>
    <mt-index-list>
      <mt-index-section :index="item.py" v-for="item in fitData" :key="item.cityId">
        <mt-cell :title="i.name" v-for="i in item.list" :key="i.cityId"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
  import MzHeader from '../components/MzHeader/Index'
  import axios from 'axios'
  export default {
    components: {
      MzHeader
    },
    data () {
      return {
        cityData: []
      }
    },
    computed: {
      fitData () {
        let hash = {}
        let i = 0
        let res = []
        this.cityData.forEach(item => {
          let firsle = item.pinyin.substr(0, 1).toUpperCase()
          if (hash[firsle]) {
            let index = hash[firsle] - 1
            res[index].list.push(item)
          } else {
            hash[firsle] = ++i
            let obj = {}
            obj.py = firsle
            obj.list = [item]
            res.push(obj)
          }
        })
        let tem = res.sort((a, b) => {
          return a.py.charCodeAt() - b.py.charCodeAt()
        })
        return tem
      }
    },
    methods: {
      getCity () {
        axios.get('./json/city.json').then(response => {
          let res = response.data
          if (res.status === 0) {
            console.log(res.data.cities)
            this.cityData = res.data.cities
          } else {
            alert(res.msg)
          }
        })
      }
    },
    created () {
      this.getCity()
    }
  }
</script>

<style lang="less">
  @import url('./index.less');
</style>
