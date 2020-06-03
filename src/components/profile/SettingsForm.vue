<template>
  <div>
    <form>
      <!-- email -->
      <div class="form-group email">
        <label class="form__label" for="email">Email</label>
        <input type="text" autocomplete="email" name="email" class="form__input" v-model="email" />
        <div class="error" v-if="$v.email.$dirty && !$v.email.required">Обязательное поле</div>
        <div class="error" v-if="$v.email.$dirty && !$v.email.email">Введите действующий email</div>
      </div>
      <!-- pass -->
      <div class="form-group pass">
        <!-- old pass -->
        <label for="old-pass">Старый пароль</label>
        <input type="password" autocomplete="current-password" name="old-pass" v-model="oldPass" />
        <!-- new pass -->
        <label for="new-pass">Новый пароль</label>
        <input type="password" name="new-pass" autocomplete="new-password" v-model="pass" />
        <div class="error" v-if="$v.pass.$dirty && !$v.pass.minLength">Минимум шесть символов</div>
        <!-- repeat new pass -->
        <label for="new-pass-dupl">Повторите новый пароль</label>
        <input
          type="password"
          name="new-pass-dupl"
          autocomplete="new-password"
          v-model="passRepeat"
        />
        <div
          class="error"
          v-if="$v.passRepeat.$dirty && !$v.passRepeat.sameAsPassword"
        >Новый пароль не совпадает</div>
      </div>
      <!-- name -->
      <div class="form-group name">
        <label for="name">Имя</label>
        <input type="text" name="name" autocomplete="name" v-model="name" />
        <div class="error" v-if="$v.name.$dirty && !$v.name.required">Обязательное поле</div>
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
        <div class="error" v-if="$v.address.dirty && !$v.address.required">Обязательное поле</div>
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
      email: "",
      name: "",
      phone: "",
      address: "",
      pass: "",
      passRepeat: "",
      oldPass: ""
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
    pass: {
      minLength: minLength(6)
    },
    passRepeat: {
      sameAsPassword: sameAs("pass")
    }
  },
  mounted() {
    if (!this.profile) {
      this.profile = this.$store.getters["user/userInfo"];
    }
    const { email, name, phone, address } = this.profile;
    this.email = email;
    this.address = address;
    this.name = name;
    this.phone = phone;
  },
  computed: {
    oldPasswordAppearance() {
      if (this.pass != "" && this.oldPass) {
        return true;
      }

      if (this.pass != "" && this.oldPass == "") {
        return false;
      }

      if (this.pass == "") {
        return true;
      }
    }
  },
  methods: {
    update(event) {
      if (event) {
        event.preventDefault();
      }
      this.$v.$touch();
      if (!this.$v.$anyError && this.oldPasswordAppearance) {
        const { email, name, phone, address } = this;
        const password = this.pass != "" ? this.pass : null;
        const updatedData = { email, name, phone, address };
        password ? (updatedData.password = password) : "";
        password ? (updatedData.old_password = this.oldPass) : "";
        this.$store.dispatch("user/userUpdate", updatedData).then(status => {
          if (status) {
            this.$store.dispatch("user/fetchUserInfo");
            this.$emit("update:editStatus", false);
          }
        });
      } else {
        this.$store.commit("clearSnackbar");
        this.$store.commit(
          "setSnackbarMsg",
          "Некоторые поля заполнены неверно"
        );
        this.$store.commit("setSnackbarType", "error");
      }
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