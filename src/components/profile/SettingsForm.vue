<template>
  <div>
    <form>
      <!-- email -->
      <div class="form-group email">
        <label class="form__label" for="email">Email</label>
        <input type="text" name="email" class="form__input" v-model="email" />
        <div class="error" v-if="$v.email.$dirty && !$v.email.required">Обязательное поле</div>
        <div class="error" v-if="!$v.email.email">Введите действующий email</div>
      </div>
      <!-- pass -->
      <div class="form-group pass">
        <label for="old-pass">Старый пароль</label>
        <input type="password" name="old-pass" v-model="pass.old" />
        <label for="new-pass">Новый пароль</label>
        <input type="password" name="new-pass" v-model="pass.new" />
        <label for="new-pass-dupl">Повторите новый пароль</label>
        <input type="password" name="new-pass-dupl" v-model="pass.newDuplicate" />
      </div>
      <!-- name -->
      <div class="form-group name">
        <label for="name">Имя</label>
        <input type="text" name="name" v-model="name" />
      </div>
      <!-- phone -->
      <div class="form-group phone">
        <label for="phone">Телефон</label>
        <input type="tel" name="phone" v-model.trim.number="phone" mask="+7 (###) ###-##-##" />
      </div>
      <!-- address -->
      <div class="form-group address">
        <label for="address">Адрес доставки</label>
        <textarea name="address" style="resize: none;" cols="30" rows="5" v-model="address"></textarea>
      </div>
    </form>
  </div>
</template>

<script>
import {
  email,
  required,
  minLength,
  maxLength,
  numeric
} from "vuelidate/lib/validators";
export default {
  props: ["profile"],
  data() {
    return {
      name: "",
      email: "",
      pass: {
        new: "",
        newDuplicate: "",
        old: ""
      },
      phone: "",
      address: ""
    };
  },
  validations: {
    email: {
      required,
      email
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
    "password address";
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

input {
  border: none;
  border-bottom: 1px solid #4F4F4F;
}

input, textarea {
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
    border: 1px solid #BDBDBD;
    border-radius: 5px;
  }
}
</style>