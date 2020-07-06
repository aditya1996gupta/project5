<template>
  <div class="about">
  <h1>Password valid</h1>
  <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
    <label class="form__label">Password </label>
    <input class="form__input" v-model.trim="$v.password.$model"/>
  </div>
  <div class="error" v-if="!$v.password.required">Password is required.</div>
  <div class="error" v-if="!$v.password.minLength">Password must have at least {{ $v.password.$params.minLength.min }} letters.</div>
  <div class="form-group" :class="{ 'form-group--error': $v.repeatPassword.$error }">
    <label class="form__label">Repeat password </label>
    <input class="form__input" v-model.trim="$v.repeatPassword.$model"/>
  </div>
  <div class="error" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical.</div>
  <tree-view :data="$v" :options="{rootObjectKey: '$v', maxDepth: 2}"></tree-view>
  </div>
</template>

<script>
import { required, sameAs, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      password: '',
      repeatPassword: ''
    }
  },
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    repeatPassword: {
      sameAsPassword: sameAs('password')
    }
  }
}
</script>
