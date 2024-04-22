<template>
  <div class="list-view">
    <header>
      <MainHeader />
    </header>
           
 <div class="book-list" v-if="books.length > 0">
    <div class="list-item" v-for="book in filteredBooks" :key="book.id" @click="goToBook(book.id)">
    <div class="book-container">
      <img :src="book.image" class="book-image" alt="Cover image" />

      <div class="books-info">
        <h2 class="title">{{ book.titulo }}</h2>
         <div class="authors">{{ book.autores }}</div>
         <div class="school-info">
        <div class="major">{{ book.curso }}</div>
        <div class="subject">{{ book.disciplina}}</div>
       
         </div>
          <div v-if="book.price === 0" class="price">
            <i class="fa-solid fa-hand-holding-heart"></i>
            </div>
            <div v-else class="price">R$ {{ book.preco.toFixed(2) }}</div>

      </div>
    </div>
  </div>
</div>

<div class="not-found" v-else>
  <h2>Nenhum livro encontrado :(</h2>
  <span @click="this.$router.push('/')">Voltar à página inicial</span>
</div>
  </div>
</template>

<script>
import livroExemplo from '@/assets/images/livro-exemplo.png';
import { mapGetters, mapActions } from 'vuex'
import MainHeader from '@/components/headers/MainHeader.vue';
import userImage from '@/assets/images/user.svg';
import { getAllBooks } from '@/controllers/AllBooksController'


export default {
  name: 'ListView',
  components: {
    MainHeader
  }, 
  data() {
    return {
    //    books: [
    //   {
    //     id: 1,
    //     title: 'Matemática Compreensão e Prática',
    //     authors: 'Énio Silveira, Cláudio Marques',
    //     major: 'Matemática',
    //     subject: 'Introdução a Matemática',
    //     price: 70.00,
    //     cover: livroExemplo 
    //   },
    //   {
    //     id: 2,
    //     title: 'Matemática Compreensão e Prática',
    //     authors: 'Énio Silveira, Cláudio Marques',
    //     major: 'Matemática',
    //     subject: 'Introdução a Matemática',
    //     price: 0,
    //     cover: livroExemplo 
       
    //   }
      
    // ]
    books:[]
    }
  },
  computed: {
      ...mapGetters(['loggedInUser']),

    filteredBooks() {
    return this.books.filter(book => book.idVendedor !== this.loggedInUser.id);
  }
  },
  methods: {
    goToBook(id) {
      this.$router.push(`/book/${id}`)
    }
   
  },
  
  async mounted() {
    console.log(this.loggedInUser?.id)

    await getAllBooks().then((response) => {
        
        const books = response.data

        books.forEach(book => {
          const photoLink = book.foto.replace(/\\/g, '/').replace('uploads', 'uploads/')
          book.image = 'http://localhost:3000/' + photoLink
        })

        this.books = response.data 
    }).catch((error) => {
      console.log(error)
    })

    console.log(this.books)
  }
}
</script>

<style lang="less">
.home-view {
  header {
    margin-bottom: 110px;
  }
}

  .book-list {
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  padding: 60px;
  padding-right: 400px;
  gap: 30px;
}

.book-image{
    padding: 20px;
    width: 200px;
    height: 270px;
    // border: 1px solid rgba(0, 0, 0, 0.18);
    
}
.list-item {
  display: flex;
  align-items: center;
  height: 270px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}

.book-container {
  display: flex;
  flex-direction: row;
  grid-template-columns: 200px 1fr;
  height: 270px;
  gap: 20px;
  align-items: center;
//   border: 1px solid rgba(0, 0, 0, 0.18);

}

.books-info {
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
//   border: 1px solid rgba(0, 0, 0, 0.18);
  margin-top:  15px;
  margin-bottom: 15px;
  padding-bottom: 10px;

}

.title {
  font-size: 27px;
  font-weight: bold;
  font-family: "Arial";
}

.authors{
    font-size: 22px;
    color: var(--primaryColor);
    margin-bottom: 30px;
}

.school-info {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 37px;
}


.major,.subject{

    border-radius: 15px;
    padding: 3px;
    padding-right: 20px;
    padding-left: 20px;
    font-weight: 200px;
    background-color: #F4F4F4;
    font-size: 19px;
}

.price {
  font-size: 25px;
  color: var(--primaryColor);
  margin-top: 10px;
}

i{
    color: var(--primaryColor);
    font-size: 35px;
}
</style>