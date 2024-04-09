<template>
  <router-view :key="$route.params"/>
</template>

<script>
  //
</script>

<style lang="less">
@import '@fortawesome/fontawesome-free/css/all.css';
@import '@/assets/fonts/Gellix/stylesheet.less';

@primaryColor: #654DB5;
@secondaryColor: #858586;

#app {
  font-family: 'Gellix', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: normal;
}

:root {
  --primaryColor: #654DB5;
  --secondaryColor: #858586;
}

</style>