<template>
  <div id="app">
    <router-view/>
    <maintabbr/>
  </div>
</template>

<script>
import maintabbr from "components/content/Maintabbr/maintabbr.vue"

export default {
  name: 'App',
  components: {
    maintabbr
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
