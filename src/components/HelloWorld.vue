<template>
  <div class="hello">
    {{arr}}
    <button @click="but()">改变</button>
    <p>{{signedIn}} 123</p>
    <h1>{{ msg }}</h1>
    <h2>Essential Links 111233</h2>
    <el-button @click="testDis()">默认按钮</el-button>
    <scroll  :scrolls="scrolls()"></scroll>
    <div class="h-5">
    </div>
    <childrens :digui="digui"></childrens>
    <h1>{{mun}}</h1>
    <VueAudio :theUrl="require('../../static/falling-star.mp3')" :theControlList="'onlyOnePlaying'"></VueAudio>
    <div class="scrollTitle">{{listData[mun].title}}</div>
    <div class="scroll" id="scroll">
      <ul v-for="(item,index) in listData" :key="index" ref="scrollUl"> </ul>
    </div>

    <video id="videoElement" style="width: 500px; height:350px; " controls ></video>
    <p @click="play()">播放</p>
    <p>暂停</p>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import test from '../../src/api/test'
  import getTest from '../../src/api/getTest'
  import otherTest from '../../src/api/otherTest'
  import scroll from '../components/scroll.vue'
  import VueAudio from '../components/VueAudio.vue'
  import util from '../config/util'
  import {funs} from '../config/exportTest'
  import flvjs from 'flv.js/dist/flv.min.js'
  import childrens from "./childrens.vue"
export default {
  name: 'HelloWorld',
  mounted () {
    this.$nextTick(()=>{
      if (flvjs.isSupported()) {
        console.log('123')
        var videoElement = document.getElementById('videoElement')
        this.flvPlayer = flvjs.createPlayer({
          type:  'flv',
          url: `http://120.77.209.131:9090/live/282C0280297E.flv`
        })
        this.flvPlayer.attachMediaElement(videoElement)
        this.flvPlayer.load()
        this.flvPlayer.play()
      }
    })




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
  computed: {
    ...mapState({
      signedIn: (state) =>　state.account.tilte
    }),

  },
  data () {
    return {
      flvPlayer:null,
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
      digui: [
        {
          name: '张三',
          text: 123,
          children: [
            {
              name: '张三1',
              text: 222,
              children: [
                {
                  name: '张三2',
                  text: 333,
                  children: [
                    {
                      name: '张三3',
                      text: 444,
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      arr: [1,2,3],
    }
  },
  methods: {
    but () {
      this.arr[0] = 222
    },
    play(){
      this.flvPlayer.play();
    },
    pause(){
      this.flvPlayer.pause();
    },
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
    VueAudio,
    childrens
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
