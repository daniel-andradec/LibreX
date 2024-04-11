<template>
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
</template>

<script>

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
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
</style>