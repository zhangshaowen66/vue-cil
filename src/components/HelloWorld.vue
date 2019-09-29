<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <van-button type="default">默认按钮</van-button>
    <scroll  :scrolls="scrolls()"></scroll>
    <div class="h-5">

    </div>
  </div>
</template>

<script>
  import test from '../../src/api/test'
  import getTest from '../../src/api/getTest'
  import otherTest from '../../src/api/otherTest'
  import scroll from '../components/scroll.vue'
export default {
  name: 'HelloWorld',
  mounted () {
    let anys = []
    let  a  = ['1', '2' , '3']
    anys.push(...a)
    console.log(anys, 'push');
    console.log([...'123.321'], 'string');
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    scrolls () {
      console.log('这是上啦刷新的方法')
    },
    testFunc(x, y, z) {
      console.log(x, y, z);
    },
    getTests () {
      // get 方式请求直接拼接
      getTest.call(this, '?id=1&order=10086')
        .then(
          res => {
            if (res.code === 1) {
              console.log('请求成功')
            } else {
              console.log('请求失败')
            }
          }
        )
    },
    postTests() {
      // post 请求
      test.call(this, {
        id: 1,
        order: 10086
      })
        .then(
          res => {
            if (res.code === 1) {
              console.log('请求成功')
            } else {
              console.log('请求失败')
            }
          }
        )
    },
    other () {
      // 其他的端口号，在js文件里面配置好了后调用方式和get post方式没有去任何区别
      otherTest.call(this, {
        id: 1,
        order: 10086
      })
        .then(
          res => {
            if (res.code === 1) {
              console.log('请求成功')
            } else {
              console.log('请求失败')
            }
          }
        )
    }
  },
  components:{
    scroll
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .h-5{
    height: 800px;
  }
</style>
