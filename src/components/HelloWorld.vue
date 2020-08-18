<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <el-button @click="testDis()">默认按钮</el-button>
    <scroll  :scrolls="scrolls()"></scroll>
    <div class="h-5">
    </div>
    <h1>{{mun}}</h1>
    <VueAudio :theUrl="require('../../static/falling-star.mp3')" :theControlList="'onlyOnePlaying'"></VueAudio>
    <div class="scrollTitle">{{listData[mun].title}}</div>
    <div class="scroll" id="scroll">
      <ul v-for="(item,index) in listData" :key="index" ref="scrollUl">
        <li class="title" v-if="index !== 0">{{item.title}}</li>
        <li v-for="(cont,dex) in item.xq" class="content">
          <span>{{cont.title}}</span>
          <span>{{cont.content}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import test from '../../src/api/test'
  import getTest from '../../src/api/getTest'
  import otherTest from '../../src/api/otherTest'
  import scroll from '../components/scroll.vue'
  import VueAudio from '../components/VueAudio.vue'
  import util from '../config/util'
  import {funs} from '../config/exportTest'
export default {
  name: 'HelloWorld',
  mounted () {
    let scroll = document.getElementById('scroll')
    scroll.onscroll = ()=>{
      let addHeight = 0
      var scrollTop = scroll.scrollTop;
      for (var i = 0; i < this.$refs.scrollUl.length; i++) {
       // console.log(this.$refs['scrollUl'][i].clientHeight, i, '总高度');
        addHeight+=this.$refs['scrollUl'][i].clientHeight
       // console.log(addHeight, i, '叠加总高度')
        if (scrollTop >= addHeight) {
          this.mun = i + 1
        }
      }
      if (scrollTop <= this.$refs['scrollUl'][0].clientHeight) {
        this.mun = 0
      }
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mun: 0,
      listData: [
        {
          title: 2020,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2020年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2020年3月2日 10:30:50'
            },{
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2020年3月2日 10:30:50'
            }
          ]
        },
        {
          title: 2019,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2019年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2019年3月2日 10:30:50'
            }
          ]
        },
        {
          title: 2018,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2018年3月2日 10:30:50'
            },
          ]
        },
        {
          title: 2017,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
          ]
        },
        {
          title: 2016,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
          ]
        },
        {
          title: 2015,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
          ]
        },
        {
          title: 2014,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
          ]
        },
        {
          title: 2013,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
          ]
        },
        {
          title: 2012,
          xq: [
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
            {
              title: '急救中心',
              content: '嗷嗷嗷啊',
              time: '2017年3月2日 10:30:50'
            },
          ]
        }
      ],
      test: 1
    }
  },
  methods: {
    scrolls () {
      // console.log('这是上啦刷新的方法')
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
    },
    testDis () {
      this.$store.dispatch('testDis', {
        code: 1,
        title: '张三'
      },
      callback => {
        console.log('成功调用')
      },
        fallback => {
        console.log('失败调用')
        }
      )
    }
  },
  components:{
    scroll,
    VueAudio
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
  margin: 0;
}
li {

}
a {
  color: #42b983;
}
 .scroll{
   height: 500px;
   width: 600px;
   overflow: auto;
 }
 .scroll ul li{
   padding: 10px;
 }
  .content{
    border-bottom: 1px solid #000;
  }
  .title{
    background: #ccc;
  }
  .scrollTitle{
    background: #ccc;
    width: 600px;
    padding: 10px;
  }
</style>
