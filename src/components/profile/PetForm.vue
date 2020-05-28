<template>
  <div class="pet-form">
    <div class="pet-form__container">
      <label class="pet-form__avatar">
        <img v-if="avatarFile && $v.avatarFile.$dirty && !$v.avatarFile.$invalid" :src="avatarDataURL" alt="avatar" />
        <img v-else src="@/assets/profile-pic/default-avatar.png" alt="avatar" />
        <input 
          class="pet-form__avatar-control"
          type="file"
          accept="image/jpg,image/jpeg,image/png"
          @change="onSelectAvatar"
          >
        <div class="pet-form__avatar-overlay">
          <svg style="fill:currentColor;width:1em;height:1em" width="50" height="40" viewBox="0 0 50 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M48.3365 6.23188C47.3384 5.16908 45.9601 4.54106 44.3916 4.54106H36.5019V4.44444C36.5019 3.23671 36.0266 2.07729 35.2186 1.30435C34.4106 0.483092 33.3175 0 32.1293 0H17.8707C16.635 0 15.5418 0.483092 14.7338 1.30435C13.9259 2.1256 13.4506 3.23671 13.4506 4.44444V4.54106H5.60837C4.03992 4.54106 2.6616 5.16908 1.6635 6.23188C0.665399 7.24638 0 8.69565 0 10.2415V34.2995C0 35.8937 0.617871 37.2947 1.6635 38.3092C2.6616 39.3237 4.08745 40 5.60837 40H44.3916C45.9601 40 47.3384 39.372 48.3365 38.3092C49.3346 37.2947 50 35.8454 50 34.2995V10.2415C50 8.64734 49.3821 7.24638 48.3365 6.23188ZM47.5285 34.2995H47.481C47.481 35.1691 47.1483 35.942 46.5779 36.5217C46.0076 37.1015 45.2472 37.4396 44.3916 37.4396H5.60837C4.75285 37.4396 3.9924 37.1015 3.42205 36.5217C2.85171 35.942 2.51901 35.1691 2.51901 34.2995V10.2415C2.51901 9.37198 2.85171 8.59903 3.42205 8.01932C3.9924 7.43961 4.75285 7.10145 5.60837 7.10145H14.7814C15.4943 7.10145 16.0646 6.52174 16.0646 5.7971V4.39613C16.0646 3.86473 16.2548 3.38164 16.5875 3.04348C16.9202 2.70531 17.3954 2.51208 17.9183 2.51208H32.1293C32.6521 2.51208 33.1274 2.70531 33.4601 3.04348C33.7928 3.38164 33.9829 3.86473 33.9829 4.39613V5.7971C33.9829 6.52174 34.5532 7.10145 35.2662 7.10145H44.4392C45.2947 7.10145 46.0551 7.43961 46.6255 8.01932C47.1958 8.59903 47.5285 9.37198 47.5285 10.2415V34.2995Z"/>
            <path d="M24.9996 10.3867C21.7677 10.3867 18.8209 11.7394 16.7297 13.865C14.5909 16.0389 13.3076 18.9858 13.3076 22.2708C13.3076 25.5558 14.6384 28.551 16.7297 30.6766C18.8685 32.8505 21.7677 34.1548 24.9996 34.1548C28.2316 34.1548 31.1783 32.8022 33.2696 30.6766C35.4084 28.5027 36.6917 25.5558 36.6917 22.2708C36.6917 18.9858 35.3609 15.9906 33.2696 13.865C31.1783 11.7394 28.2316 10.3867 24.9996 10.3867ZM31.4635 28.8891C29.8 30.5317 27.5186 31.5945 24.9996 31.5945C22.4806 31.5945 20.1993 30.5317 18.5358 28.8891C16.8723 27.1983 15.8742 24.8795 15.8742 22.3191C15.8742 19.7587 16.9198 17.4399 18.5358 15.749C20.1993 14.0582 22.4806 13.0437 24.9996 13.0437C27.5186 13.0437 29.8 14.1065 31.4635 15.749C33.127 17.4399 34.1251 19.7587 34.1251 22.3191C34.1726 24.8795 33.127 27.1983 31.4635 28.8891Z"/>
            <path d="M41.9207 15.0732C43.2069 15.0732 44.2496 14.0134 44.2496 12.706C44.2496 11.3987 43.2069 10.3389 41.9207 10.3389C40.6345 10.3389 39.5918 11.3987 39.5918 12.706C39.5918 14.0134 40.6345 15.0732 41.9207 15.0732Z"/>
          </svg>
        </div>
      </label>
      <Step2 ref="orderForm" class="pet-form__order-form" :order.sync="tempPet" />
    </div>
    <div class="pet-form__buttons">
      <button class="pet-form__button"
        @click="onSave">
          Сохранить
      </button>
      <button class="pet-form__button pet-form__button_secondary"
        @click="$emit('close')"
        >
          Отменить
      </button>
    </div>
  </div>
</template>

<script>
import { helpers, withParams } from 'vuelidate/lib/validators'
import Step2 from '@/components/onboarding/orderSteps/Step2'

const validateFileType = types => helpers.withParams(
  {
    types,
  },
  file => !helpers.req(file) || types.indexOf(file.type) !== -1
)

const validateFileSize = (limit, type, mul) => helpers.withParams(
  {
    limit,
    type,
  },
  file => !helpers.req(file) || (file.size < limit*mul)
)

export default {
  name: "PetForm",
  props: ["pet"],
  components: {
    Step2
  },
  data() {
    return {
      tempPet: this.pet ? {
        ...this.pet, 
        pet_id: this.pet.id,
        pet_name: this.pet.name,
      } : {},
      avatarFile: null,
      avatarDataURL: null,
    }
  },
  validations() {
    return {
      avatarFile: {
        type: validateFileType(['image/jpg','image/jpeg','image/png']),
        size: validateFileSize(10, 'Kb', 1000)
      },
    }
  },
  methods: {
    onSave () {
      this.$v.$touch()
      this.$refs.orderForm.$v.$touch()
      let invalid = this.$v.$invalid && this.$refs.orderForm.$v.$invalid
      if (!invalid) {
        let {pet_id, pet_name, breed, birthday_date, birthday_years, gender, size, food_exceptions} = this.tempPet
        this.$emit('save', {
          ...pet_id && { id: pet_id } ,
          name: pet_name,
          breed, birthday_date, birthday_years, gender, size, food_exceptions
        })
      }
    },
    async onSelectAvatar (e) {
      let { target } = e
      if (target.files.length) {
        this.avatarFile = target.files[0]
        this.$v.avatarFile.$touch()
        if (!this.$v.avatarFile.$invalid) {
          let reader = new FileReader();
          reader.onload = e => {
            this.avatarDataURL = e.target.result
          }
          reader.readAsDataURL(this.avatarFile);
        } else {
          if (!this.$v.avatarFile.type) {
            this.$store.dispatch('clearSnackbar')
            this.$store.dispatch('setSnackbarType', 'error')
            await this.$store.dispatch('setSnackbarMsg', `Не поддерживаемый формат файла ${ this.avatarFile.type }`)
          }
          if (!this.$v.avatarFile.size) {
            this.$store.dispatch('clearSnackbar')
            this.$store.dispatch('setSnackbarType', 'error')
            await this.$store.dispatch('setSnackbarMsg', `Размер файла не должен превышать ${ this.$v.avatarFile.$params.size.limit } ${ this.$v.avatarFile.$params.size.type }`)
          }
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.pet-form {
  &__container {
    display: flex;
    margin: 0 auto;
    max-width: 1000px;
  }

  &__avatar {
    display: block;
    height: 150px;
    width: 150px;
    background: #c4c4c4;
    border-radius: 50%;
    padding: 10px;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    margin-right: 100px;

    img {
      display: block;
      height: 100%;
      width: 100%;
    }

    &-overlay {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      background: rgba(70, 68, 81, 0.8);
      color: #fff;
      font-size: 40px;
      align-items: center;
      justify-content: center;
    }

    &:hover &-overlay {
      display: flex;
      cursor: pointer;
    }

    &:active &-overlay {
      background: rgba(70, 68, 81, 0.9);
    }

    &-control {
      display: none;
    } 
  }

  &__buttons {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    max-width: 690px;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  &__button {
    font-family: Montserrat, sans-serif;
    position: relative;
    min-width: 230px;
    padding: 15px 55px;
    background-color: #FFCC01;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);

    font-weight: 600;
    font-size: 21px;
    line-height: 26px;
    text-align: center;
    letter-spacing: 0.2px;
    color: #464451;

    &_secondary {
      color: #464451;
      background-color: #fff;
      border: 1px solid #464451;
      box-sizing: border-box;
      border-radius: 10px;
      box-shadow: none;

      &:active {
        background-color: #464451;
        color: #fff;
        box-shadow: none;
      }
    }

    &__inner {
      position: relative;
      display: inline-block;
    }

    &__icon {
      position: absolute;
      left: 100%;
      fill: #fff;
      stroke: #C8A20F;
      stroke-width: 1px;
      height: 100%;
      margin-left: 10px;
    }

    &:hover {
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    &:active {
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
    }

    &:active &__icon {
      fill: #2289B5;
    }
  }

  &__order-form {
    flex: 1;
  }
}

.error {
  color: red;
  padding: 10px;
}

@media (max-width: 1440px) {
  .pet-form {
    &__avatar {
      height: 90px;
      width: 90px;
      margin-right: 60px;
    }
  }
}

</style>
