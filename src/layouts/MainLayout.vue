<template>
    <div>

        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <!--<router-link to="/login">login</router-link>-->
            <a class="nav-link" @click="loginModal = true">login</a>
            |
            <!--<router-link to="/recovery-password">recovery-password</router-link>-->
            <a class="nav-link" @click="recoveryPasswordModal = true">recovery-password</a>
            |
            <router-link to="/profile">profile</router-link>
            |
            <router-link to="/admin">admin</router-link>
            |
            <router-link to="/order">order</router-link>
            |
            <!--<router-link to="/registration">registration</router-link>-->
            <a class="nav-link" @click="registerModal = true">registration</a>
        </div>
        <nav class="nav-menu">
            <div class="logo">
                <router-link class="router-link" to="/"><h4>logo</h4></router-link>
            </div>
            <div class="rout-buttons">
                <div class="rout-buttons__dilivery">Доставка</div>
                <div class="rout-buttons__how-work">Как это работает</div>
                <div class="rout-buttons__faq">FAQ</div>
                <div class="rout-buttons__tel">49218419481</div>
                <div class="rout-buttons__auth" v-if="true">
                    <button class="rout-buttons__auth-button">
                        <a  @click="loginModal = true">Войти</a>
                    </button>
                </div>
                <div class="rout-buttons__profile" v-if="false">
                    <button>
                        <router-link class="router-link" to="/profile">profile</router-link>
                    </button>
                </div>

            </div>
        </nav>

        <template>
            <vue-modaltor
                    :visible="loginModal"
                    :resize-width='{1920:"440px",940:"90%"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="loginModal = false">
                <LoginForm :onSuccess="toggleLoginModal"/>
            </vue-modaltor>

            <vue-modaltor
                    :visible="registerModal"
                    :resize-width='{1920:"440px",940:"90%"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="registerModal = false">
                <RegistrationForm :onSuccess="toggleRegisterModal"/>
            </vue-modaltor>

            <vue-modaltor
                    :visible="recoveryPasswordModal"
                    
                    :resize-width='{1920:"440px",940:"90%"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="recoveryPasswordModal = false">
                <RecoveryPasswordForm :onSuccess="toggleRecoveryPasswordModal"/>
            </vue-modaltor>
        </template>

        <main>
            <router-view/>
        </main>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import Toastify from 'toastify-js'
  import LoginForm from '../components/LoginForm'
  import RegistrationForm from '../components/RegistrationForm'
  import RecoveryPasswordForm from '../components/RecoveryPasswordForm'

  export default {
    name: 'MainLayout',
    components: { RecoveryPasswordForm, RegistrationForm, LoginForm },
    data: () => ({
      loginModal: false,
      registerModal: false,
      recoveryPasswordModal: false,
    }),
    computed: {
      ...mapGetters([
        'snackbarType',
        'snackbarMsg',
        'snackbarObj',
      ]),
    },
    methods:{
      toggleLoginModal(){
        this.loginModal = !this.loginModal
      },
      toggleRegisterModal(){
        this.registerModal = !this.registerModal
      },
      toggleRecoveryPasswordModal(){
        this.recoveryPasswordModal = !this.recoveryPasswordModal
      },
    },
    watch: {
      snackbarObj: (newMsg, oldMsg) => {
        if (newMsg) {
          const { msg, type } = newMsg
          const backgroundColor = {
            success: '#2289b5',
            info: '#ffcc01',
            error: '#ff4d00',
            null: '#464451',
          }

          Toastify({
            text: msg,
            duration: 7000,
            close: true,
            className: 'demo',
            gravity: 'bottom',
            position: 'right',
            //backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
            backgroundColor: backgroundColor[type],
            stopOnFocus: true,
            onClick: function () {
            }
          }).showToast()

        }
      }
    },
  }
</script>

<style lang="scss">
    .modal-vue-wrapper-show.modal-fade, .modal-vue-wrapper-show.modal-scale{
    
        z-index: 9999;
 border-radius: 20px;
}
.modal-vue-panel.modal-fade{
  border-radius: 20px;
}
    .modal-vue-panel{
        border-radius: 20px;
      
    }
    .nav-link{
       text-decoration: none;
        font-family: Montserrat, serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
        cursor: pointer;
    }
    .router-link {
        text-decoration: none;
        font-family: Montserrat, serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;

    }
    .nav-menu {
        width: 100%;
        height: 65px;
        background: #464451;
        display: grid;
        grid-template-columns: repeat(2, max-content);
        justify-content: space-between;

        .logo {
            display: grid;
            margin: 0;
            color: #fff;
            padding-left: 240px;
            align-items: center;

        }

        .rout-buttons {
            color: #fff;
            display: grid;
            grid-template-columns: repeat(5, max-content);
            grid-column-gap: 30px;
            align-items: center;
            padding-right: 240px;
            font-family: Montserrat;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 25px;
            text-align: center;

            &__auth-button {
                width: 100px;
                height: 35px;
                background: #464451;
                border: 1px solid #2289B5;
                box-sizing: border-box;
                border-radius: 5px;
            }
        }

    }
</style>
