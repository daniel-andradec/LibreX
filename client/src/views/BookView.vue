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

            <div class="buy">
              Deseja obter este livro?
              <span @click="confirmationModalOpen = true">
                Entre em contato com o anunciante!
              </span>
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

      <ModalComponent :modalOpen="confirmationModalOpen" @closeModal="confirmationModalOpen = false">
          <div class="buy-book-modal">
              <i class="fa-solid fa-exclamation-circle"></i>
              <h2>Confirma a aquisição deste livro?</h2>
              <div class="buy-buttons">
                  <button class="btn btn-primary" @click="confirmationModalOpen = false">Cancelar</button>
                  <button class="btn btn-confirm" @click="buyBook">
                      Confirmar
                  </button>
              </div>
          </div>
      </ModalComponent>

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
import userDefault from '@/assets/images/user-default-image.png';
import ModalComponent from '@/components/modals/ModalComponent.vue';
import { performSale } from '@/controllers/SaleController';
import { mapGetters } from 'vuex';

export default {
  name: 'BookView',
  components: {
    MainHeader,
    ModalComponent
  },
  data() {
    return {
      book: {},
      vendor: {},
      userDefault,
      confirmationModalOpen: false
    };
  },
  methods: {
    async buyBook () {
      const bookId = this.book.id;
      const buyerId = this.loggedInUser.id;
      const vendorId = this.book.idVendedor;

      await performSale(bookId, buyerId, vendorId).then((res) => {
        if (res.status === 200) {
          this.$toast.open({
              message: 'Compra realizada com sucesso!',
              type: 'success',
              duration: 4000,
              position: 'top-right'
          });
          this.$router.push('/');
          this.confirmationModalOpen = false;
        }
      }).catch((error) => {
        console.log(error)
        this.$toast.open({
            message: 'Erro ao realizar a compra. Tente novamente.',
            type: 'error',
            duration: 5000,
            position: 'top-right'
        });
      });
    }
  },
  async mounted() {
    const bookId = this.$route.params.bookId;

    await getBook(bookId).then((response) => {
      const book = response.data;

       const photoLink = book.foto.replace(/\\/g, '/').replace('uploads', 'uploads/')
        book.image = 'http://localhost:3000/' + photoLink
        
        this.book = book;
      
    }).catch((error) => {
      console.log(error)
    })

    await getVendor(this.book.idVendedor).then((response) => {
      const vendor = response.data;

      if (!vendor.foto) {
        vendor.image = userDefault
      }
      else {
        const photoLink = vendor.foto.replace(/\\/g, '/').replace('uploads', 'uploads/')
        vendor.image = 'http://localhost:3000/' + photoLink
      }
      this.vendor = vendor;
    }).catch((error) => {
      console.log(error)
    })
  },
  computed: {
    ...mapGetters(['loggedInUser'])
  }
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

            .buy {
                margin-top: 50px;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                span {
                    color: var(--primaryColor);
                    font-weight: 600;
                    margin-left: 10px;
                    cursor: pointer;
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

                    img {
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        object-fit: cover;
                    }

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

    .buy-book-modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;

        h2 {
            font-size: 22px;
            font-weight: 500;
            text-align: center;
            max-width: 450px;
            word-break: break-word;
        }

        i {
            color: #3b3b3b;
        }

        button {
            width: 100px;
            height: 40px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }

        .btn-primary {
            background-color: #fff;
            border: 1px solid #ccc;
            color: #232323;
        }

        .btn-confirm {
            background-color: var(--primaryColor);
            color: white;
        }

        .buy-buttons {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 20px;
        }
    }
}    

</style>