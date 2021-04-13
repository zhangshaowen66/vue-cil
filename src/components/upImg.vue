<template>
  <div>
    <button class="btn" @click="toggleShow">设置头像</button>
         <my-upload
           @crop-success="cropSuccess"
           @src-file-set="srcFileSet"
          @crop-upload-success="cropUploadSuccess"
          @crop-upload-fail="cropUploadFail"
          v-model="show"
         :width="200"
         :height="200"
         img-format="png"
         :size="size"
         langType='zh'
         :noRotate='false'
         field="Avatar1"
         url="https://httpbin.org/post"></my-upload>
         <img :src="imgDataUrl">
  </div>
</template>

<script>
  import 'babel-polyfill'; // es6 shim
  import myUpload from 'vue-image-crop-upload';
  export default {
    data() {
      return {
        imgDataUrl: "",
        show: false,
        size:2.1,
        imgDataName: ''
      }
    },
    components: {
      "my-upload": myUpload
    },
    methods: {
      toggleShow() {
        this.show = !this.show;
        console.log('调用')
      },
      dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
      },
      srcFileSet (fileName, fileType, fileSize) {
        this.imgDataName = fileName
        console.log('-------- srcFileSet success --------',fileName, fileType, fileSize);
      },
      //上传成功回调
      cropUploadSuccess(jsonData, field){
        console.log('-------- upload success --------');
        this.imgDataUrl = jsonData.files.Avatar1;
        console.log(jsonData);
        console.log(this.dataURLtoFile(this.imgDataUrl, this.imgDataName), '1111');
        console.log('field: ' + field);
      },
      //上传失败回调
      cropUploadFail(status, field){
        console.log('-------- upload fail --------');
        console.log('上传失败状态'+ status);
        console.log('field: ' + field);
      }
    }

  }
</script>

<style scoped>

</style>
