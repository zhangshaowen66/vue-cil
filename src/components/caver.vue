<template>
  <div>
    <!-- 此处是要截取的图片 -->
    <div id="imgDownload" ref="QRcodeSrcImg" >
      <div class="box">
        <img src="../assets/logo.png">
        <p>这个是一个标签</p>
        <p>这个也是一个标签</p>
        <img src="../assets/index_qrCode2.png">
      </div>
    </div>
    <!-- 此处是储存截取后的图片 -->
    <div class="photoShow" v-if="photoShow">
      <div id="photo">
        <p>长按图片保存</p>
        <img :src="photoUrl" id="img" alt="" width="100%">
        <!-- <span>长按图片保存和分享</span> -->
      </div>
    </div>
    <!-- 此处是保存到本地的方法 -->
    <div class="bottom" @click="imgDownload()">
      <div style="text-align: center;">
        <p style="font-size:1.4rem;margin-top:10px;color:#a5a4a4;;">保存到本地</p>
      </div>
    </div>

  </div>
</template>
<script>
  import html2canvas from "html2canvas"
  export default {
    data(){
      return{
        photoUrl:"",
        photoShow:false
      }
    },
    methods: {
      // 图片保存方法
      imgDownload() {
        let _this = this;
        _this.photoShow = true;
        // 声明一个画布元素,存储需下载图片范围
        let canvas = document.createElement("canvas");
        // 获取需下载范围元素
        let img = this.$refs["QRcodeSrcImg"];
        // 图片高度
        var w = parseInt(window.getComputedStyle(img).width);
        // 图片宽度
        var h = parseInt(window.getComputedStyle(img).height);
        // 声明画布宽高
        canvas.width = w * 2;
        canvas.height = h * 2;
        canvas.style.width = w + "px";
        canvas.style.height = h + "px";
        // console.log(w, h);
        // let context = canvas.getContext("2d");
        // context.scale(2, 2);
        // 利用 html2canvas 下载 canvas
        html2canvas(img, { canvas: canvas }).then(function(canvas) {
          _this.photoUrl = canvas.toDataURL()
        });
      }
    }
  }
</script>
