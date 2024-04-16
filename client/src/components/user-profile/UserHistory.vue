<template>
  <div class="user-history">
    <div class="list-header-vendor">
        <div class="header-item" v-for="(field, fkey) in listFields" :key="fkey">
            <h2>{{ field.display }}</h2>
        </div>
    </div>

    <div class="history-item" v-for="(item, ikey) in mockData" :key="ikey">
        <div class="image">
          <img :src="item.image" alt="book" />
        </div>
        <p>{{ item.title }}</p>
        <p>{{ item.author }}</p>

        <div class="type">
          <div v-if="item.type === 'sale'" class="sale">Venda</div>
          <div v-else-if="item.type === 'purchase'" class="purchase">Compra</div>            
        </div>
        <p>{{ formatValue(item.price) }}</p>
        <p>{{ item.date }}</p>
    </div>     
    
    <div class="book-list">
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserHistory',
  components: {
  },
  data() {
    return {
      mockData: [
        {
          title: 'Introduction to Algorithms',
          author: 'Thomas H. Cormen',
          price: 235,
          image: 'https://m.media-amazon.com/images/I/61Pgdn8Ys-L._AC_UF1000,1000_QL80_.jpg',
          type: 'sale',
          date: '15/04/2024'
        },
        {
          title: 'Calculo: Volume 2',
          author: 'James Stewart',
          price: 150,
          image: 'https://m.media-amazon.com/images/I/61oaBUaZwiL._AC_UF1000,1000_QL80_.jpg',
          type: 'purchase',
          date: '15/03/2024'
        }
      ],
      listFields: [
          {
              display: 'Imagem'
          },
          {
              display: 'Nome',
              name: 'name'
          },
          {
              display: 'Autor',
              name: 'author'
          },
          {
              display: 'Tipo',
              name: 'type'
          },
          {
              display: 'Preço',
              name: 'price'
          },
          {
              display: 'Data',
              name: 'date'
          }
      ]
    }
  },
  methods: {
    formatValue(value) {
        return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
    }
  },
  computed: {
  },
  mounted() {
  }
}
</script>

<style lang="less">
.user-history {
  .list-header-vendor {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 10px;
      align-items: center;
      margin-top: 20px;
      padding: 10px;
      
      h2 {
          font-size: 16px;
          font-weight: 500;
      }

      .header-item {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 10px;

          i {
              color: #232323;
          }
      }
  }

  .history-item {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    align-items: center;
    margin-top: 20px;
    padding: 10px;
    
    .image {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 70px;
        height: 70px;
        display: flex;
        object-fit: contain;
      }
    }
  
    p {
        font-size: 16px;
        font-weight: 00;
    }

    .type {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

      .sale {
        background-color: rgb(187, 92, 92);
        padding: 5px;
        border-radius: 5px;
      }

      .purchase {
        background-color: rgb(102, 175, 102);
        padding: 5px;
        border-radius: 5px;
      }
    }
  }
}
</style>