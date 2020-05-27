<template>
  <div>
    <form>
      <!-- email -->
      <div class="form-group email">
        <label class="form__label" for="email">Email</label>
        <input type="text" autocomplete="email" name="email" class="form__input" v-model="email" />
        <div class="error" v-if="!$v.email.required">Обязательное поле</div>
        <div class="error" v-if="$v.email.$dirty && !$v.email.email">Введите действующий email</div>
      </div>
      <!-- pass -->
      <div class="form-group pass">
        <label for="old-pass">Старый пароль</label>
        <input
          disabled="true"
          type="password"
          autocomplete="current-password"
          name="old-pass"
          v-model="oldPass"
        />
        <label for="new-pass">Новый пароль</label>
        <input
          type="password"
          name="new-pass"
          autocomplete="new-password"
          v-model="pass"
        />
        <label for="new-pass-dupl">Повторите новый пароль</label>
        <input
          type="password"
          name="new-pass-dupl"
          autocomplete="new-password"
          v-model="passRepeat"
        />
        <div class="error" v-if="$v.passRepeat.$dirty && !$v.passRepeat.sameAsPassword">Новый пароль не совпадает</div>
      </div>
      <!-- name -->
      <div class="form-group name">
        <label for="name">Имя</label>
        <input type="text" name="name" autocomplete="name" v-model="name" />
      </div>
      <!-- phone -->
      <div class="form-group phone">
        <label for="phone">Телефон</label>
        <the-mask
          type="tel"
          placeholder="+7 (000) 000-00-00"
          v-model.trim.number="phone"
          mask="+7 (###) ###-##-##"
          class="input__control"
        />
        <div class="error" v-if="$v.phone.$dirty && !$v.phone.required">Введите телефон</div>
        <div
          class="error"
          v-if="$v.phone.$dirty && !$v.phone.minLength"
        >Введите корректный номер телефона</div>
      </div>
      <!-- address -->
      <div class="form-group address">
        <label for="address">Адрес доставки</label>
        <textarea
          name="address"
          autocomplete="street-address"
          style="resize: none;"
          cols="30"
          rows="5"
          v-model="address"
        ></textarea>
      </div>
      <button @click="update" class="form-button__save">Cохранить</button>
      <button @click="back" class="form-button__back">Отмена</button>
    </form>
  </div>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
  numeric,
  sameAs
} from "vuelidate/lib/validators";
export default {
  props: ["profile", "editStatus"],
  data() {
    return {
      editedInfo: {},
      pass: "",
      passRepeat: "",
      oldPass: "",
    };
  },
  validations: {
    email: {
      required,
      email
    },
    phone: {
      required,
      minLength: minLength(10),
      maxLength: maxLength(10)
    },
    address: {
      required
    },
    name: {
      required
    },
    passRepeat: {
      sameAsPassword: sameAs('pass')
    }
  },
  computed: {
    email: {
      get() {
        if (this.editedInfo.email) {
          return this.editedInfo.email;
        }
        return this.profile.email;
      },
      set(val) {
        this.editedInfo.email = val;
      }
    },
    name: {
      get() {
        if (this.editedInfo.name) {
          return this.editedInfo.name;
        }
        return this.profile.name;
      },
      set(val) {
        this.editedInfo.name = val;
      }
    },
    phone: {
      get() {
        if (this.editedInfo.phone) {
          return this.editedInfo.phone;
        }
        const phone = this.profile.phone;
        return `+7 (${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]}-${phone[6]}${phone[7]}-${phone[8]}${phone[9]}`;
      },
      set(val) {
        this.editedInfo.phone = val;
      }
    },
    address: {
      get() {
        if (this.editedInfo.address) {
          return this.editedInfo.address;
        }
        return this.profile.address;
      },
      set(val) {
        this.editedInfo.address = val;
      }
    }
  },
  methods: {
    update(event) {
      if (event) {
        event.preventDefault();
      }
      // this.$store.dispatch('user/userUpdate', this.editedInfo).then(status => console.log(status))
      console.log(this.$v.email)
      this.$v.$touch()
      // this.$emit("update:editStatus", false);
    },
    back(event) {
      if (event) {
        event.preventDefault();
      }
      this.$emit("update:editStatus", false);
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  display: grid;
  grid-template-areas:
    "email name"
    "password phone"
    "password address"
    "btn_save btn_back";
  grid-gap: 40px 125px;
  grid-template-columns:
    minmax(251px, 1fr)
    minmax(251px, 1fr);
  grid-template-rows:
    minmax(50px, 0.33fr)
    minmax(50px, 0.33fr)
    minmax(120px, 1.67fr);
  div {
    display: flex;
    flex-flow: column nowrap;
    text-align: left;
    label {
      margin-bottom: 5px;
    }
  }
}

input,
the-mask {
  border: none;
  border-bottom: 1px solid #4f4f4f;
}

input,
the-mask,
textarea,
button {
  padding: 5px;
  outline: none;
  font-family: Montserrat, serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}

.email {
  grid-area: email;
}

.pass {
  grid-area: password;
  input {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}

.name {
  grid-area: name;
}

.phone {
  grid-area: phone;
}

.address {
  grid-area: address;
  textarea {
    border: 1px solid #bdbdbd;
    border-radius: 5px;
  }
}

.form-button__save,
.form-button__back {
  outline: none;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  font-size: 21px;
  line-height: 26px;
  padding: 15px 45px;
  margin-top: 40px;
  &:hover {
    cursor: pointer;
  }
}

.form-button__save {
  grid-area: btn_save;
  background: #ffcc01;
  border: none;
}

.form-button__back {
  grid-area: btn_back;
  border: 1px solid #464451;
}
.error {
  color: red;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 0.3px;
}
</style>