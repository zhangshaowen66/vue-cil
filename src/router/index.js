import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import caver from '@/components/caver'
import scroll from '@/components/scroll'
import upImg from '@/components/upImg'
import myMixins from '@/components/myMixins'
import wss from '@/components/wss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/scroll',
      name: 'scroll',
      component: scroll
    },
    {
      path: '/upImg',
      name: 'upImg',
      component: upImg
    },
    {
      path: '/myMixins',
      name: 'myMixins',
      component: myMixins
    },
    {
      path: '/wss',
      name: 'wss',
      component: wss
    }
  ]
})
