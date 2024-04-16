<template>
  <div class="vendor-product-modal">
      <ModalComponent :modalOpen="modalOpen" @closeModal="$emit('closeModal')">
          <h2>Cadastrar Livro</h2>
          
          <div class="top-fields">
              <div class="text-inputs">
                  <h3><span>*</span> Campos obrigatórios</h3>
                  <label for="name">Nome <span>*</span></label>
                  <input type="text" placeholder="Nome" required ref="name" data-testid="product-name-input" >

                  <label for="description">Autor(es) <span>*</span></label>
                  <input type="text" placeholder="Autor(es)" required ref="description" data-testid="product-description-input">
              </div>
              <div class="image-input">
                  <label for="inputfile" class="add-image-label" v-if="!imagePreviewUrl">
                      Adicionar imagem
                  </label>
                  <input type="file" id="inputfile" @change="handleFileUpload" class="file-input" ref="inputfile" data-testid="product-image-input" >
                  <div class="image-preview" v-if="imagePreviewUrl" @click="triggerFileInput">
                      <img :src="imagePreviewUrl" alt="Preview da imagem">
                      <h2>Alterar imagem</h2>
                  </div>
              </div>
          </div>

          <div class="middle-fields">
              <div>
                  <label for="price">Preço <span>*</span></label>
                  <input type="text" placeholder="Preço" required ref="price" @keypress="formatInput" data-testid="product-price-input" />
              </div>

              <div>
                  <label for="quantity">Estado de Conservação <span>*</span></label>
                  <select name="condition" id="condition" required ref="condition" data-testid="product-condition-input">
                      <option value="bom">Bom</option>
                      <option value="médio">Médio</option>
                      <option value="ruim">Ruim</option>
                  </select>
              </div>
          </div>

          <div class="buttons">
              <button class="cancel" @click="this.$emit('closeModal')">Cancelar</button>
              <button 
                  class="save" 
                  @click="handleSave" 
                  v-if="!loading" 
                  data-testid="product-save-button">
                      Salvar
              </button>
              <div class="loading" v-else>
                  <i class="fa fa-spinner fa-spin"></i>
                  <h2>Salvando...</h2>
              </div>
          </div>
      </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from '@/components/modals/ModalComponent.vue'

export default {
  name: 'VendorProductModal',
  components: {
    ModalComponent
  },
  props: ['modalOpen', 'product'],
  data() {
    return {
      imagePreviewUrl: null,
      imgFile: null,
      fileChanged: false,
      loading: false
    }
  },
  methods: {
    handleFileUpload(event) {
        const file = event.target.files[0];

        // verificar se imagem é jpg ou png
        if (file?.type !== 'image/jpeg' && file?.type !== 'image/png') {
            this.$toast.open({
                message: 'Formato de imagem inválido. A imagem deve ser JPG ou PNG.',
                type: 'warning',
                position: 'top-right',
                duration: 5000
            })
            return
        }

        if (file) {
            this.fileChanged = true
            const formData = new FormData()
            formData.append('photo', file)
            this.imagePreviewUrl = URL.createObjectURL(file);
            this.imgFile = file
        }
    },
    triggerFileInput() {
        this.$refs.inputfile.click()
    }
  },
  computed: {

  },
  mounted() {
  }
}
</script>

<style lang="less">
.vendor-product-modal {
    * {
        box-sizing: border-box;
    } 

    h2 {
        font-size: 20px;
        font-weight: 500;
    }
    h3 {
        font-size: 12px;
        font-weight: 500;
        text-align: left;
        span {
            color: var(--primaryColor);
        }
    }

    label {
        font-size: 12px;
        font-weight: 500;
        text-align: left;
        margin-bottom: 10px;
        span {
            color: var(--primaryColor);
        }
    }

    input, select {
        width: 180px;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #ccc;
        padding: 0 10px;
        font-size: 14px;
        font-weight: 500;
        color: #232323;
        margin-bottom: 20px;
    }

    .top-fields {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        gap: 60px;
        margin-top: 20px;

        .text-inputs {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        .image-input {
            .file-input {
                display: none;
            }

            .add-image-label {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 150px;
                height: 150px;
                border: 2px dashed #828282;
                border-radius: 5px;
                cursor: pointer;
                color: #828282;
                font-size: 16px;
                font-weight: bold;
                text-align: center;
            }

            .image-preview {
                width: 180px;
                height: 170px;
                border-radius: 5px;
                padding: 5px;
                font-size: 14px;
                font-weight: 500;
                color: #232323;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                img {
                    width: 100%;
                    height: 100%;
                    max-width: 150px;
                    max-height: 130px;
                    object-fit: contain;
                    cursor: pointer;
                }

                h2 {
                    font-size: 12px;
                    font-weight: 500;
                    color: var(--primaryColor);
                    cursor: pointer;
                }
            }
        }
    }

    .middle-fields {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;

        div {
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
        }

        select {
            width: 180px;
            color: #737373;
        }
    }

    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        button {
            width: 100px;
            height: 40px;
            border-radius: 5px;
            border: none;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }

        .cancel {
            background-color: #fff;
            border: 1px solid #ccc;
            color: #232323;
        }

        .save {
            background-color: var(--primaryColor);
            color: #fff;
        }

        .loading {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;
            color: var(--primaryColor);

            h2 {
                font-size: 16px;
                font-weight: 500;
            }
        }
    }
}
</style>