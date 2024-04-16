<template>
  <div class="book-view">
    <header>
      <MainHeader />
    </header>
     

      <div class="book">

        
        <i class="fa-solid fa-arrow-left" @click="this.$router.push('/')">  </i>

        <div class ="book-info">
            <h1><strong>{{ book.title }}</strong> </h1>
        
            <h2>{{ book.authors.join(', ') }}</h2>

            <div class="book-details">
                <div class="detail">
                    <p class="label">Curso </p><p>{{ book.course }}</p>
                </div>
                <div class="detail">
                    <p class="label">Disciplina</p><p> {{ book.subject }}</p>
                </div>
            </div>

            <div class="book-details">
                <div class="detail">
                    <p class="label">Estado de conservação</p><p> {{ book.condition }}</p>
                </div>
            </div>

            <div class="book-details">
                <div class="detail">
                    <p class="label">Disponível para</p><p> {{ book.availableFor }}</p>
                </div>
                <div class="detail">
                    <p class="label">Preço</p><p> R$ {{ book.price }}</p>
                </div>
            </div>
        </div>



        <div class="book-image">

            <!-- <img :src="book.imageUrl" alt="Imagem do livro" /> -->
            <img :src="livroExemplo" alt="Imagem do livro" /> 

            <div class="livro-anunciante">
                <p class="livro">Livro anunciado por</p>

                <div class="anunciante">
                    <img class="dono" :src="userImage" alt="Imagem do anunciante" />
                    <p class="anunciante-nome">{{ donodolivro.nome }}</p>
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

export default {
  name: 'BookView',
  components: {
    MainHeader
  },
  data() {
    return {
      book: {
        title: 'Matemática Compreensão e práticaaaaaaaaaaa',
        authors: ['Énio Silveira', 'Cláudio Marques'],
        course: 'Matemática',
        subject: 'Introdução à Matemática',
        condition: 'Bom',
        availableFor: 'Venda',
        price: 70.00,
        imageUrl: 'link-para-imagem-do-livro.jpg',
      },
      donodolivro: {
        nome: "Balchandra"

      },
      livroExemplo,
      userImage
    };
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
    //   border: 3px solid #000000;
  

      i {
            color: var(--primaryColor);
            font-size: 40px;
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
            
            

            h1 {
              font-size: 40px;
              font-weight: 400;
              color: #000000; 
              text-align: left; 
              margin-bottom: 25px;
            }
     
            h2 {
                    font-size: 32px;
                    font-weight: 400;
                    margin-bottom: 80px;
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
                font-size: 22px;
                margin-bottom: 50px;

                .detail{
                    display: flex;
                    flex-direction: column;
                }

                .label{
                    color : var(--primaryColor);
                    text-align: left;

                }

                p{
                    color: #000000;
                    text-align: left;
                }

            }
        }

        .book-image{

            display: flex;
            flex-direction: column;
            align-items: center;
            
            width: 1300px;
            height: 750px;
            justify-content: center;
            
            border-radius: 50px;
            background-color: var(--primaryColor);

            gap:50px;
         

            img {
                margin-top: 0px;
                width: 400px;
                height: 500px;
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
                        text-align: left;
                        font-size:20px;

                    }
                }

            }
        }
    }
}    

</style>