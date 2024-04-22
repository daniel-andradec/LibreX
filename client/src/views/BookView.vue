<template>
  <div class="book-view">
    <header>
      <MainHeader />
    </header>
     

      <div class="book">

        
        <i class="fa-solid fa-arrow-left" @click="this.$router.push('/')">  </i>

        <div class ="book-info">
            <h1>{{ book.titulo }}</h1>
        
            <h2>{{ book.autores }}</h2>

            <div class="book-details">
                <div class="detail">
                    <p class="label">Curso </p><p>{{ book.curso }}</p>
                </div>
                <div class="detail">
                    <p class="label">Disciplina</p><p> {{ book.disciplina }}</p>
                </div>
            </div>

            <div class="book-details">
                <div class="detail">
                    <p class="label">Estado de conservação</p>
                    <p>{{ book.estadoConservacao === 1 ? 'Excelente' : book.estadoConservacao === 2 ? 'Bom' : book.estadoConservacao === 3 ? 'Razoável' : '' }}</p>
                </div>
            </div>

            <div class="book-details">
                <div class="detail">
                    <p class="label">Disponível para</p>
                    <p>{{ book.preco === 0 ? 'Doação' : 'Venda' }}</p>
                </div>
                <div class="detail">
                    <p class="label">Preço</p><p> R$ {{ book.preco }}</p>
                </div>
            </div>
        </div>



        <div class="book-image">

            <!-- <img :src="book.imageUrl" alt="Imagem do livro" /> -->
            <img :src="book.image" alt="Imagem do livro" /> 

            <div class="livro-anunciante">
                <p class="livro">Livro anunciado por</p>

                <div class="anunciante">
                    <img class="dono" :src="vendor.image" alt="Imagem do anunciante" />
                    <p class="anunciante-nome">{{ vendor.nome }}</p>
                </div>
                
            </div>


        </div>

         
      </div>
    </div>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import livroExemplo from '@/assets/images/livro-exemplo.png';
import MainHeader from '@/components/headers/MainHeader.vue';
import userImage from '@/assets/images/user.svg';
import { getBook } from '@/controllers/BookController';
import { getUser} from '@/controllers/UserController';
import { getVendor} from '@/controllers/BookController';

export default {
  name: 'BookView',
  components: {
    MainHeader
  },
  data() {
    return {
    //   book: {
    //     title: 'Matemática Compreensão e práticaaaaaaaaaaa',
    //     authors: ['Énio Silveira', 'Cláudio Marques'],
    //     course: 'Matemática',
    //     subject: 'Introdução à Matemática',
    //     condition: 'Bom',
    //     availableFor: 'Venda',
    //     price: 70.00,
    //     imageUrl: 'link-para-imagem-do-livro.jpg',
    //   },
    //   donodolivro: {
    //     nome: "Balchandra"

    //   },
    //   livroExemplo,
    //   userImage
    book: {},
    vendor: {},

    };
  },

async mounted() {
    // this.getBook();
    console.log(this.$route.params.bookId);

    const bookId = this.$route.params.bookId;

    await getBook(bookId).then((response) => {
      const book = response.data;

       const photoLink = book.foto.replace(/\\/g, '/').replace('uploads', 'uploads/')
        book.image = 'http://localhost:3000/' + photoLink
        
        this.book = book;
      console.log(book)
      
    }).catch((error) => {
      console.log(error)
    })

    console.log("oi", this.book.idVendedor);

    await getVendor(this.book.idVendedor).then((response) => {
      const vendor = response.data;

      const photoLink = vendor.foto.replace(/\\/g, '/').replace('uploads', 'uploads/')
        vendor.image = 'http://localhost:3000/' + photoLink
      this.vendor = vendor;
      console.log(vendor)
    }).catch((error) => {
      console.log(error)
    })



  },
  
};
</script>

<style lang="less">
.book-view {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;

  header {
			margin-bottom: 90px;
  }

  .book {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      width: 100%;
      justify-content: center;
      

  

      i {
            color: var(--primaryColor);
            font-size: 35px;
            margin-top: 32px; 
            margin-left: 15px;
            margin-right: 25px;
            align-self: flex-start;

        }
        .book-info{
            display: flex;
            flex-direction: column;
            width: 100%;
            padding: 20px;
            margin-left: 40px;
            
           

            h1 {
              font-family: "Arial";
              font-size: 40px;
              font-weight: 400;
              color: #000000; 
              text-align: left; 
              margin-bottom: 17px;
            }
     
            h2 {
                    font-size: 30px;
                    font-weight: 400;
                    margin-bottom: 50px;
                    color: var(--primaryColor);
                    text-align: left;
            }

            .book-details{
                display: flex;
                flex-direction: row;
                align-items: left;
                width: 100%;
                justify-content: left;
                gap: 150px;
                margin-bottom: 50px;

                .detail{
                    display: flex;
                    flex-direction: column;
                }

                .label{
                    color : var(--primaryColor);
                    text-align: left;
                    font-size: 24px;
                    margin-bottom: 12px;
                    

                }

                p{
                    color: #000000;
                    text-align: left;
                    font-size: 22px;
                    font-weight: medium;
                }

            }
        }

        .book-image{

            display: flex;
            flex-direction: column;
            align-items: center;

            margin-right: 40px;
            
            width: 1100px;
            height: 600px;
            justify-content: center;
            
            border-radius: 50px;
            background-color: var(--primaryColor);

            gap:50px;
         

            img {
                margin-top: 0px;
                width: 300px;
                height: 400px;
                object-fit: contain;
            }

            .livro-anunciante{
                display: flex;
                flex-direction: column;
                align-items: strech;
               
                width:400px;
                gap:15px;

                
                .livro{
                    color: #ffffff;
                    text-align: left;
                    font-size:20px;

                }
                .anunciante{

                    display: flex;
                    flex-direction: row;
                    align-items: strech;
                    gap: 20px;

                    .dono{ 
                    width: 50px;
                    height: 50px;

                    }
                
                
                
                    .anunciante-nome{
                        color: #ffffff;
                        font-weight: bold;
                        margin-top: 7px;
                        text-align: left;
                        font-size:20px;

                    }
                }

            }
        }
    }
}    

</style>