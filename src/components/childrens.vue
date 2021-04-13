<template>
  <div>
    <div v-for="(item) in digui">
      <p>{{item.name}}</p>
      <p>{{item.text}}</p>
      <childrens :digui="item.children"></childrens>
    </div>
  </div>
</template>

<script>
    export default {
        name: "childrens",
      props: ['digui'],
      components: {
      }
    }
</script>

<style scoped>

</style>
