<template>
  <div class="customer-header">
      <img @click="this.$router.push('/')" alt="Vue logo" :src="logo">


      <div class="login-container" @mouseover="showDropdown" @mouseleave="hideDropdown">
          <div class="user-icon">
              <img :src="usericon" alt="User icon" />
          </div>

          <!-- <div class="login">
              <div class="logged" v-if="loggedInUser?.id">
                  <i class="fa-regular fa-user"></i>
                  Olá, <span>{{ getFirstName(loggedInUser?.name) }}</span>
              </div>
              <div class="not-logged" v-else>
                  Olá, faça seu <br><span @click="this.$router.push('/login')">login</span>
              </div>
          </div>
        -->

          <div class="options" v-if="isDropDownVisible">
              <div class="option" @click="navigateToProfile()">
                  <i class="fa fa-user-circle"></i>
                  Minha conta
              </div>
              <div class="option" @click="logout()">
                  <i class="fa fa-sign-out-alt"></i>
                  Sair
              </div>
          </div>
      </div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import { logout } from '@/controllers/UserController'
import logo from '@/assets/images/logo.png'
import usericon from '@/assets/images/user.svg'

export default {
  name: 'CustomerHeader',
  emits: ['input'],
  components: {
  },
  data() {
      return {
          logo,
          usericon,
          searchText: '',
          isDropDownVisible: false
      }
  },
  methods: {
      search() {
          // this.$router.push({ name: 'search', query: { searchText: this.searchText } })
      },
      showDropdown() {
          // if (this.loggedInUser?.id)
              this.isDropDownVisible = true
      },
      hideDropdown() {
          this.isDropDownVisible = false
      },
      async logout() {
          this.$router.push('/')
          // await logout()
          // window.location.reload()
      },
      getFirstName(name) {
          return name.split(' ')[0]
      },
      navigateToProfile() {
          // console.log(this.loggedInUser)
          // if (this.loggedInUser?.role === 'customer')
              this.$router.push('/profile')
      },
      async logout () {
        // todo: implement logout
        this.$router.push('/login')
      }
  },
  computed: {
      // ...mapGetters(['getCartTotalQuantity', 'getCartProducts', 'loggedInUser'])
  },
  mounted() {
  }
}
</script>
<style lang="less">
.customer-header {
  background: #F4F4F4;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 40px;
  position: fixed;
  z-index: 8;
  top: 0;
  left: 0;
  right: 0;

  img {
      margin-right: 20px;
      cursor: pointer;
  }

  .login-container {
      align-self: center;

      .user-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          overflow: hidden;
          cursor: pointer;

          img {
              width: 100%;
              height: 100%;
          }
      }

      // .login {
      //     margin: 10px 70px;
      //     color: var(--secondaryColor);
      //     font-size: 18px;
      //     font-weight: 500;

      //     i {
      //         margin-right: 10px;
      //     }
      //     span {
      //         color: var(--primaryColor);
      //         cursor: pointer;
      //     }
      // }

      .options {
          position: absolute;
          background: #FFF;
          border-radius: 5px;
          box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
          z-index: 9;
          right: 0;
          margin-right: 20px;
          cursor: pointer;

          .option {
              padding: 10px 15px;
              display: flex;
              align-items: center;

              &:hover {
                  background: #F4F4F4;
              }

              i {
                  margin-right: 10px;
                  color: var(--secondaryColor);
              }
          }
      }
  }
}
</style>