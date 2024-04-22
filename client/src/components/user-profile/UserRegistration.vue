<template>
  <div class="user-reg">
    <div v-for="(fields, section) in sections" :key="section" class="section">
          <h2>{{ section }}</h2>
          <div class="section-container">
              <div 
                  v-for="field in fields" 
                  :key="field.label" 
                  class="section-field"
              >
                  <div class="field-label">
                      <label :for="field.ref" :class="{ required: field.required }">
                          {{ field.label }}
                      </label>
                      <p v-if="field.changeButton" class="change-password" @click="passwordModalOpen = true">Alterar</p>
                  </div>
                  <input 
                      :id="field.ref" 
                      :type="field.type" 
                      :placeholder="field.ref === 'name' ? loggedInUser.name : field.ref === 'email' ? loggedInUser.email : field.ref == 'cellphone' ? loggedInUser.cellphone : field.placeholder"
                      :disabled="field.disable"
                      @input="field.input && this[field.input]($event); formatValue($event, field.format)" />
              </div>
          </div>
      </div>

      <div class="submit-button">
            <button @click="submitForm">Salvar</button>
        </div>

        <ModalComponent :modalOpen="passwordModalOpen" @closeModal="passwordModalOpen = false">
            <div class="update-password-modal">
                <h2>Alterar senha</h2>
                <div class="change-password-container">
                    <div class="password-fields">
                        <label for="password">Senha Atual</label>
                        <input  id="password" type="password" placeholder="Nova senha" v-model="passwordData.password">
                        
                        <label for="newPassword">Nova Senha</label>
                        <input  id="newPassword" type="password" placeholder="Nova senha" v-model="passwordData.newPassword">

                        <label for="confirmPassword">Confirmar Senha</label>
                        <input  id="confirmPassword" type="password" placeholder="Confirmar senha" v-model="passwordData.confirmPassword">
                    </div>
                </div>
                <div class="submit-button-pss">
                    <button @click="updatePassword()">Alterar</button>
                </div>
            </div>
        </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from '@/components/modals/ModalComponent.vue';
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'UserRegistration',
  components: {
    ModalComponent
  },
  data() {
    return {
      sections: {
        'Dados Pessoais': [
            {
                ref: 'name',
                label: 'Nome Completo',
                type: 'text',
                placeholder: 'Nome Completo',
                required: true,
                minSize: 3
            },
            {
                ref: 'cellphone',
                label: 'Celular', 
                type: 'tel',
                placeholder: 'Celular',
                required: true,
                format: 'cellphone',
                minSize: 8
            }
        ],
        'Dados de Acesso': [
            {
                ref: 'email',
                label: 'E-mail', 
                type: 'email',
                placeholder: 'E-mail',
                required: true
            },
            {
                ref: 'password',
                label: 'Senha', 
                type: 'password',
                placeholder: 'Confirme sua senha antes de alterar',
                required: true,
                changeButton: true,
                disable: true
            }
          ]
        },
        passwordData: {
            password: '',
            newPassword: '',
            confirmPassword: ''
        },
        passwordModalOpen: false
    }
  },
  methods: {
    async updatePassword() {
        if (!this.passwordData.password || !this.passwordData.newPassword || !this.passwordData.confirmPassword) {
            this.$toast.open({
                message: 'Preencha todos os campos obrigatórios',
                type: 'warning',
                duration: 5000,
                position: 'top-right'
            });
            return;
        }

        if (this.passwordData.newPassword.length < 6) {
            this.$toast.open({
                message: 'A senha deve ter no mínimo 6 caracteres',
                type: 'warning',
                duration: 5000,
                position: 'top-right'
            });
            return;
        }

        if (this.passwordData.newPassword !== this.passwordData.confirmPassword) {
            this.$toast.open({
                message: 'As senhas não coincidem',
                type: 'warning',
                duration: 5000,
                position: 'top-right'
            });
            return;
        }

        // await updatePassword(this.passwordData.password, this.passwordData.newPassword).then(() => {
        //     this.$toast.open({
        //         message: 'Senha alterada com sucesso',
        //         type: 'success',
        //         duration: 5000,
        //         position: 'top-right'
        //     });
        //     this.passwordModalOpen = false;
        // }).catch(err => {
        //     console.log(err);
        //     this.$toast.open({
        //         message: 'Senha incorreta.',
        //         type: 'error',
        //         duration: 5000,
        //         position: 'top-right'
        //     });
        // });
    }
  },
  computed: {
      ...mapGetters(['loggedInUser']),
  },
  mounted() {
     console.log(this.loggedInUser)
  }
}

</script>
<style lang="less">
.user-reg {
  margin: 40px 0 0 40px;
  width: 96%;

  h2 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  .section {
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
            align-self: flex-start;
        }
    }

    .section-container {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        margin-bottom: 20px;
        align-items: center;

        .section-field {
            padding-bottom: 20px;

            .field-label {
                display: flex;
                justify-content: space-between;
                align-items: center;
                p {
                    color: var(--primaryColor);
                    font-size: 16px;
                    cursor: pointer;
                    margin-right: 20px;
                }
            }

            label {
                margin-bottom: 5px;
                font-weight: 500;
                text-align: left;
                &.required:after {
                    content: '*';
                    color: var(--primaryColor);
                    margin-left: 5px;
                }
            }

           

            .change-password {
                color: var(--primaryColor);
                font-size: 16px;
                cursor: pointer;
                margin: 0px;
            }
    
            input {
                padding: 10px 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                margin: 10px 20px 10px 0px;
                width: 100%;
    
                &:focus {
                    outline: none;
                    border-color: var(--primaryColor);
                }
            }
        }
    }

    .submit-button {
        margin-bottom: 50px;

        button {
            width: 250px;
            height: 50px;
            border-radius: 5px;
            border: none;
            background-color: var(--primaryColor);
            color: #FFFFFF;
            font-size: 20px;
            font-weight: 500;
            cursor: pointer;
            margin: 20px 0px;
        }
    }

    .update-password-modal {
        .password-fields {
            display: flex;
            flex-direction: column;
            justify-content: center;

            label {
                margin-bottom: 5px;
                font-weight: 500;
                text-align: left;
                &:after {
                    content: '*';
                    color: var(--primaryColor);
                    margin-left: 5px;
                }
            }
    
            input {
                padding: 10px 15px;
                border: 1px solid #ccc;
                border-radius: 4px;
                font-size: 16px;
                margin: 10px 0px 10px 0px;
                width: 300px;
    
                &:focus {
                    outline: none;
                    border-color: var(--primaryColor);
                }
            }
        }

        .submit-button-pss {
            button {
                width: 200px;
                height: 50px;
                border-radius: 5px;
                border: none;
                background-color: var(--primaryColor);
                color: #FFFFFF;
                font-size: 20px;
                font-weight: 500;
                cursor: pointer;
                margin: 20px 0px;
            }
        }
    }
}
</style>