<template>
    <div>

        <!-- <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/login">login</router-link>
            <a class="nav-link" @click="loginModal = true">login</a>
            |
            <router-link to="/recovery-password">recovery-password</router-link>
            <a class="nav-link" @click="recoveryPasswordModal = true">recovery-password</a>
            |
            <router-link to="/profile">profile</router-link>
            |
            <router-link to="/admin">admin</router-link>
            |
            <router-link to="/order">order</router-link>
            |
            <router-link to="/registration">registration</router-link>
            <a class="nav-link" @click="registerModal = true">registration</a>
            |
            <a class="nav-link" @click="registrationSuccessModal = true">RegistrationSuccess</a>
            |
            <a class="nav-link" @click="changePasswordModal = true">ChangePassword</a>
        </div> -->
        <nav class="nav-menu">
            <div class="menu-open__container">
              <div class="nav-button" :class="{'nav-button-active': activeMenu}" @click="toggleMenuOpen">
                <i></i>
                <i></i>
                <i></i>
              </div>
              <div class="menu-open__menu-collapsed" v-show="activeMenu">
                <div class="rout-buttons__dilivery rout-buttons__dilivery_collapsed">Доставка</div>
                <div class="rout-buttons__how-work rout-buttons__how-work_collapsed"><router-link class="router-link" to="/#how-work">Как это работает</router-link></div>
                <div class="rout-buttons__faq rout-buttons__faq_collapsed"><router-link class="router-link" to="/#faq">FAQ</router-link></div>
                <div class="rout-buttons__tel rout-buttons__tel_collapsed"><router-link class="router-link" to="/#contacts">+7 (925) 112-08-12</router-link></div>
              </div>
            </div>
            <div class="logo">
                <router-link class="router-link" to="/"></router-link>
            </div>
            <div class="rout-buttons">
                <div class="rout-buttons__dilivery">Доставка</div>
                <div class="rout-buttons__how-work"><router-link class="router-link" to="/#how-work">Как это работает</router-link></div>
                <div class="rout-buttons__faq"><router-link class="router-link" to="/#faq">FAQ</router-link></div>
                <div class="rout-buttons__tel"><router-link class="router-link" to="/#contacts">Контакты</router-link></div>
                <div class="rout-buttons__auth" v-if="true">
                    <button class="rout-buttons__auth-button">
                        <a  @click="loginModal = true">Войти</a>
                    </button>
                </div>
                <div class="rout-buttons__profile" v-if="false">
                    <button class="rout-buttons__profile-button " type="button">
                        <router-link class="router-link" to="/profile"><img src="../assets/profile-icon.svg" alt=""></router-link>
                    </button>
                </div>

            </div>
        </nav>

        <template>
            <vue-modaltor
                    :visible="loginModal"
                    :resize-width='{1920:"440px",1440:"440px", 414:"390px", 375:"355px", 360:"340px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="loginModal = false">
                <LoginForm
                        :onSuccess="toggleLoginModal"
                        :toggleLoginModal="toggleLoginModal"
                        :toggleRegisterModal="toggleRegisterModal"
                        :toggleRegistrationSuccessModal="toggleRegistrationSuccessModal"
                        :toggleRecoveryPasswordModal="toggleRecoveryPasswordModal"
                />
                 <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
            </vue-modaltor>

            <vue-modaltor
                    :visible="registerModal"
                    :resize-width='{1920:"440px",1440:"440px", 414:"390px", 375:"355px", 360:"340px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="registerModal = false">
                <RegistrationForm
                        :onSuccess="toggleRegisterModal"
                        :toggleLoginModal="toggleLoginModal"
                        :toggleRegisterModal="toggleRegisterModal"
                        :toggleRegistrationSuccessModal="toggleRegistrationSuccessModal"
                        :toggleRecoveryPasswordModal="toggleRecoveryPasswordModal"
                />
                 <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
            </vue-modaltor>

            <vue-modaltor
                    :visible="recoveryPasswordModal"

                    :resize-width='{1920:"440px",1440:"440px", 414:"390px", 375:"355px", 360:"340px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="recoveryPasswordModal = false">
                <RecoveryPasswordForm
                        :onSuccess="toggleRecoveryPasswordModal"
                        :toggleLoginModal="toggleLoginModal"
                        :toggleRegisterModal="toggleRegisterModal"
                        :toggleRegistrationSuccessModal="toggleRegistrationSuccessModal"
                        :toggleRecoveryPasswordModal="toggleRecoveryPasswordModal"
                        :toggleChangePasswordModal="toggleChangePasswordModal"

                />
                 <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
            </vue-modaltor>
            <vue-modaltor
                    :visible="registrationSuccessModal"
                    :resize-width='{1920:"440px", 1440:"440px", 414:"390px", 375:"355px", 360:"340px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="registrationSuccessModal = false">
                <RegistrationSuccess
                        :onSuccess="toggleRegistrationSuccessModal"
                        :toggleLoginModal="toggleLoginModal"
                        :toggleRegisterModal="toggleRegisterModal"
                        :toggleRegistrationSuccessModal="toggleRegistrationSuccessModal"
                        :toggleRecoveryPasswordModal="toggleRecoveryPasswordModal"
                />
                <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
            </vue-modaltor>
            <vue-modaltor
                    :visible="changePasswordModal"
                    :resize-width='{1920:"440px", 1440:"440px", 414:"390px", 375:"355px", 360:"340px"}'
                    :bg-overlay="' rgba(41, 41, 41, 0.4)'"
                    :bg-panel="'#fff'"
                    @hide="changePasswordModal = false">
                <ChangePassword
                        :onSuccess="toggleChangePasswordModal"
                        :toggleLoginModal="toggleLoginModal"
                        :toggleRegisterModal="toggleRegisterModal"
                        :toggleRegistrationSuccessModal="toggleRegistrationSuccessModal"
                        :toggleRecoveryPasswordModal="toggleRecoveryPasswordModal"
                        :toggleChangePasswordModal="toggleChangePasswordModal"
                />
                <template slot="close-icon">
                       <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9 7.18173L15.8051 0.376577C16.3073 -0.125526 17.1213 -0.125526 17.6234 0.376577C18.1255 0.87868 18.1255 1.69275 17.6234 2.19485L10.8183 9L17.6234 15.8051C18.1255 16.3073 18.1255 17.1213 17.6234 17.6234C17.1213 18.1255 16.3073 18.1255 15.8051 17.6234L9 10.8183L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z" fill="#949595"/>
</svg>
            </template>
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
  import RegistrationSuccess from '../components/RegistrationSuccess'
  import ChangePassword from '../components/ChangePassword'

  export default {
    name: 'MainLayout',
    components: { RecoveryPasswordForm, RegistrationForm, LoginForm, RegistrationSuccess, ChangePassword },
    data: () => ({
      loginModal: false,
      registerModal: false,
      recoveryPasswordModal: false,
      registrationSuccessModal: false,
      changePasswordModal:false,
      activeMenu: false,
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
      toggleRegistrationSuccessModal(){
        this.registrationSuccessModal = !this.registrationSuccessModal
      },
      toggleRecoveryPasswordModal(){
        this.recoveryPasswordModal = !this.recoveryPasswordModal
      },
      toggleChangePasswordModal(){
        this.changePasswordModal = !this.changePasswordModal
      },
      toggleMenuOpen() {
        this.activeMenu = !this.activeMenu;
      }
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
  .menu-open {
    &__container {
      display: none;
    }
  }
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
    grid-template-columns: 1fr;
    justify-content: space-around;
    justify-items: center;
  }
  .logo {
      width: 105px;
      height: 30px;
      align-self: center;
      display: grid;
      margin: 0;
      color: #fff;
      align-items: center;
      background: url('../assets/logo-zoobro.svg');
      background-size: contain;

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
    &__how-work {
      display: block;
      text-decoration: none;
      color: #fff;
    }
    &__profile-button{
      background: #464451;
      border: none;
    }
  }

  @media screen and (max-width: 1200px) {
    .rout-buttons {
      padding-right: 100px;
    }
  }

  @media screen and (max-width: 900px) {
    .logo {
      width: 93px;
      height: 27px;
      background: url('../assets/logo-zoobro.svg');
      background-size: contain;
    }
    .rout-buttons {
      padding: 12px;
      grid-template-columns: max-content;
      &__dilivery {
        &_collapsed {
          display: block;
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 25px;
          text-align: left;
          color: #fff;
        }
        display:none;
      }
      &__how-work {
        &_collapsed {
          text-decoration: none;
          color: #fff;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 25px;
          text-align: left;
          display: block;
          display: block;
        }
        display:none;
      }
      &__faq {
        &_collapsed {
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 25px;
          text-align: left;
          color: #fff;
          display: block;
          text-decoration: none;
        }
        display:none;
      }
      &__tel {
        &_collapsed {
          background: #464451;
          border: none;
          display: block;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 25px;
          text-align: left;
          color: #fff;
          text-decoration: none;
          margin-top: 30px;
        }
        display:none;
      }
      &__auth-button {
        width: 60px;
      }
    }
    .menu-open {
      &__container {
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-items: left;
      }

      &__menu-collapsed {
        text-align: left;
        position: absolute;
        top: 64px;
        display: grid;
        width: 222px;
        height: 220px;
        grid-template-rows: repeat(4, max-content);
        row-gap: 10px;
        background-color: #464451;
        z-index: 1000;
        box-shadow: 0 10px 10px rgba(0,0,0,0.5);
        padding: 30px 20px;
      }
    }
    .nav-menu {
      grid-template-columns:repeat(3, max-content);
      justify-content: space-between;
    }
    .nav-button{
      width:44px;
      height:44px;
      display:block;
      position:relative;
      z-index:3;
      cursor:pointer;
      transition: background 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      background:#464451;

      i{
        width:20px;
        height:2px;
        display:block;
        position:absolute;
        top:50%;
        left:50%;
        margin-left:-10px;
        margin-top:-1px;
        transition:transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1),
        background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), visibility 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        background:#FFF;

        &:first-child{
          margin-top:-7px;
          transform-origin:0 50%;
        }
        &:last-child{
          margin-top:5px;
          transform-origin:100% 50%;
        }
      }
    }
    .nav-button-active {
        transition-duration:0.5s;
        i{
          transform:rotate(-45deg);
          background: #fff;

          &:first-child{
            visibility:hidden;
            transform:translate3d(3px, -1px, 0) rotate(45deg);
          }
          &:last-child{
            transform:translate3d(-3px, 1px, 0) rotate(45deg);
          }
        }
      }
  }

</style>
