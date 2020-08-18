<template>
    <div>
    </div>
</template>

<script>
    export default {
      // scrolls 父级页面传回来的方法  // total 总的数量条数  // list 列表 // currentPage回调给父级页面的页码
        props: ['scrolls','total','list'],
        mounted() {
      //    this.scrolls
          let currentPage = 1
          window.onscroll = function(){
            //变量scrollTop是滚动条滚动时，距离顶部的距离
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            //变量windowHeight是可视区的高度
            var windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
            //变量scrollHeight是滚动条的总高度
            var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            //滚动条到底部的条件
            if(scrollTop+windowHeight ===scrollHeight){
              /*if (_this.total !== _this.list.length) {
                  currentPage =  currentPage + 1
                  this.$emit('currentPage',currentPage)
                _this.getList()
              } else {
                _this.isBottom = false
              }*/
            }
          }
        }
    }
</script>

<style scoped>
  .h-5{
    height: 500px;
  }
</style>
