<template>
  <div class="user-books">
    <div class="list-header">
        <div class="user-books-options">
            <div class="left">
                  <div class="search">
                      <input type="text" placeholder="Buscar Livro" v-model="searchText" @input="searchProduct()"/>
                      <i class="fa fa-search icon" @click="searchProduct()"></i>
                  </div>
                
            </div>
            <div class="right" @click="bookModalOpen = true">
              <h2> Cadastrar Livro </h2>
            </div>
        </div>
    </div>
    
    <div class="book-list-profile" v-if="books.length > 0">
        <div class="book" v-for="book in books" :key="book.id">
            <img :src="book.image" />
            <div class="name">{{ fixLength(book.titulo) }}</div>
           
            <div v-if="book.preco == 0" class="price">
                <i class="fa-solid fa-hand-holding-heart"></i>
                </div>
            <div v-else class="price"> {{ formatValue(book.preco) }}</div>
        </div>
    </div>

    <div v-else class="not-found">
        <h3> Você ainda não cadastrou nenhum livro </h3>
    </div>

    <BookRegistrationModal :modalOpen="bookModalOpen" @closeModal="closeBookModal()" />
  </div>
</template>

<script>
import BookRegistrationModal from '@/components/modals/BookRegistrationModal.vue'
import { getUserBooks } from '@/controllers/ProfileController'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserBooks',
  components: {
    BookRegistrationModal
  },
  data() {
    return {
      searchText: '',
      bookModalOpen: false,
      books: [],
      booksCopy: []
    }
  },
  methods: {
    formatValue(value) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    },
    fixLength: function (text) {
        return text.length > 25 ? text.substr(0, 25) + '...' : text
    },
    searchProduct() {
        // verificar logica para nao resetar a lista de livros em cada busca
        // this.books = this.books.filter(book => book.title.toLowerCase().includes(this.searchText.toLowerCase()))
    },
    async closeBookModal() {
      this.bookModalOpen = false
      await getUserBooks(this.loggedInUser?.id).then((response) => {
        // filtra para setar imagem corretamente
        const books = response.data

        books.forEach(book => {
          const photoLink = book.foto.replace(/\\/g, '/').replace('uploads', 'uploads/')
          book.image = 'http://localhost:3000/' + photoLink
        })

        this.books = books
        // this.booksCopy = response.data
        console.log(response)
      })
    }
  },
  computed: {
    ...mapGetters(['loggedInUser']),
  },
  async mounted() {
    const id = this.loggedInUser?.id
    if (id) {
      await getUserBooks(id).then((response) => {
        // filtra para setar imagem corretamente
        const books = response.data

        books.forEach(book => {
          const photoLink = book.foto.replace(/\\/g, '/').replace('uploads', 'uploads/')
          book.image = 'http://localhost:3000/' + photoLink
        })

        this.books = books
        // this.booksCopy = response.data
        console.log(response)
      })
    }
  }
}
</script>

<style lang="less">
.user-books {
  margin-top: 20px;

  .user-books-options {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 2%;

    .left {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        i {
            font-size: 25px;
            color: var(--secondaryColor);
            cursor: pointer;
        }

        .search {
            display: flex;
            align-items: center;
            background-color: #fff;
            border-radius: 5px;
            box-sizing: border-box;
            border: 1px solid var(--secondaryColor);
            padding: 10px 10px;
            position: relative;
            margin: 0 50px 0 40px;

            //sizing
            width: 400px;
            height: 40px;
            
            input {
                border: none;
                outline: none;
                background-color: transparent;
                font-size: 18px;
                font-family: Gellix;
                width: 100%;
                padding-right: 25px;
            }

            i {
                position: absolute;
                right: 10px;
                color: gray;
            }
        }            
    }

    .right {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        h2 {
            font-weight: 500;
            font-size: 22px;
            color: var(--primaryColor);
            cursor: pointer;
        }
    }
  }

  .not-found {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    margin-top: 40px;

    h3 {
        font-weight: 500;
    }
  }

  .book-list-profile {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin: 20px 2% 40px 2%;
    
    .book {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-evenly;
        align-items: center;
        min-height: 90px;
        text-align: center;
        border-radius: 5px;
        border: 1px solid rgba(0, 0, 0, 0.18);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        transition: all linear .2s;
        margin: 10px;
        height: min(500px, 100%);
        padding: 10px;
        width: min;
        cursor: pointer;

        img {
            width: 100%;
            height: 200px;
            border-radius: 5px;
            object-fit: contain;
            margin-top: 10px;
        }

        .name {
            font-size: 18px;
            margin: 10px;
        }

        .price {
            color: var(--primaryColor);
            font-size: 22px;
            padding: 10px 0px;
            font-weight: 600;
        }

        &:active{
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.25);
        }
    }
  }
}
</style>