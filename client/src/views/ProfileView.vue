<template>
  <div class="profile-view">
    <header>
      <img class="logo" alt="LibreX logo" :src="icon" @click="this.$router.push('/')">
    </header>
    
    <div class="user-info">
      <img class="user-image" :src="userImage" alt="User image" />
      
    </div>

    <div class="profile-options">
      <h1 :class="{ 'is-bold': selectedOption === 'books' }" @click="selectOption('books')">Meus livros</h1>
      <h1 :class="{ 'is-bold': selectedOption === 'orders' }" @click="selectOption('orders')">Meus pedidos</h1>
      <h1 :class="{ 'is-bold': selectedOption === 'settings' }" @click="selectOption('settings')">Configurações</h1>
    </div>

    <div class="separator"></div>
  </div>
</template>

<script>
import icon from '@/assets/images/icon.png'
import userImage from '@/assets/images/user.svg'

export default {
  name: 'ProfileView',
  components: {
  },
  data() {
    return {
      icon,
      userImage,
      selectedOption: 'books'
    }
  },
  methods: {
    selectOption(option) {
      this.selectedOption = option
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang="less">
.profile-view {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f5f5f5;
  
  header {
    display: flex;
    justify-content: flex-start;
    align-items: center;  

    .logo {
      width: 100px;
      height: 50px;
      object-fit: contain;
      margin-top: 20px;
    }
  }

  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .user-image {
      width: 100px;
      height: 70px;
      object-fit: contain;
      margin-bottom: 5px;
    }

    h1 {
      font-size: 22px;
      font-weight: 500;
      color: #333;
    }
  }

  .profile-options {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 20px 0 10px 40px;
    gap: 30px;

    h1 {
      font-size: 20px;
      font-weight: 300;
      color: #333;
      margin-bottom: 10px;
      cursor: pointer;  
    }

    .is-bold {
      font-weight: 500;
    }
  }

  .separator {
    width: 96%;
    height: 1px;
    background-color: #ccc;
    margin-left: 40px;
  }
}
</style>