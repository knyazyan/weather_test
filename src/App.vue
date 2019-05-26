<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  },
  mounted() {
    if (navigator.geolocation) {
      console.log(navigator.geolocation)
    }
    else {
      console.log('no')
    }
  }
}
</script>

<style>

</style>
