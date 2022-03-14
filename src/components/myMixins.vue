<template>
  <div>
    <p>{{mins}}</p>
  </div>
</template>

<script>
  import {myMixins} from './mixins.js'
    export default {
        name: "mixins",
      data () {
          return {
           // mins: 1
          }
      },
      mixins: [myMixins],
      mounted () {
          this.mins++
      }
    }
</script>

<style scoped>

</style>
