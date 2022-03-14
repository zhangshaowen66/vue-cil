<template>

</template>

<script>
    export default {
        name: "wss",
      mounted() {
          let websocket = new WebSocket('wss://webws.gateio.live/v3/?v=419933')
        websocket.onopen = () => {
          console.log('ws连接成功')
        }
        websocket.onerror = (err) => {
          console.log(err, 'websocket error')
        };
        websocket.onmessage = res => {
          console.log(res)
        }
      }
    }
</script>

<style scoped>

</style>
