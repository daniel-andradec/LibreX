<template>
  <div class="home-view">
    <header>
      <MainHeader />
    </header>

    <div class="d-flex justify-space-between 1">
      Hello from HomeView
      <v-icon icon="mdi-account" />
      <i class="fa fa-user"></i>
      <div>
        Go to <router-link to="/login">Login</router-link>
      </div>
      <div>
        Go to <router-link to="/book">Book</router-link>
      </div>
      <div>
        Other way to go to Login: <button @click="$router.push('/login')">Login</button>
      </div>
      <div>
        Other way to go to Book: <button @click="$router.push('/book')">Book</button>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/components/headers/MainHeader.vue'

export default {
  name: 'HomeView',
  components: {
    MainHeader
  }, 
  data() {
    return {
      //
    }
  },
  methods: {
    //
  },
  mounted() {
    console.log('HomeView mounted')
  }
}
</script>

<style lang="less">
.home-view {
  header {
    margin-bottom: 110px;
  }
}
</style>