<template>
  <div>
    <form>
      <!-- email -->
      <div class="form-group email">
        <label class="form__label">Email</label>
        <input type="text" class="form__input" v-model="email" />
        <div class="error" v-if="$v.email.$dirty && !$v.email.required">Обязательное поле</div>
        <div class="error" v-if="!$v.email.email">Введите действующий email</div>
      </div>
      <!-- pass -->
      <div class="form-group pass"></div>
      <!-- name -->
      <div class="form-group name"></div>
      <!-- phone -->
      <div class="form-group phone"></div>
      <!-- address -->
      <div class="form-group address"></div>
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
</style>