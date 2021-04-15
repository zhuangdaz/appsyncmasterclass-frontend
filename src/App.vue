<template>
  <div id="app">
    <amplify-authenticator usernameAlias="email">
      <amplify-sign-up
        slot="sign-up"
        :form-fields.prop="signUpFields"
      ></amplify-sign-up>
      <div v-if="authState === 'signedin' && user && user.attributes">
        <div>Hello, {{user.attributes.name}}</div>
      </div>
      <amplify-sign-out></amplify-sign-out>
    </amplify-authenticator>
  </div>
</template>

<script>
import { onAuthUIStateChange } from '@aws-amplify/ui-components'

export default {
  name: 'AuthStateApp',
  created() {
    this.unsubscribeAuth = onAuthUIStateChange((authState, authData) => {
      this.authState = authState;
      this.user = authData;
    })
  },
  data() {
    return {
      user: {},
      signUpFields: [
        { type: 'username', label: 'Username (Email) *', required: true },
        { type: 'password', label: 'Password *', required: true },
        { type: 'name', label: 'Name *', required: true },
        { type: 'phone_number', label: 'Phone Number *', required: true }
      ],
      authState: undefined,
      unsubscribeAuth: undefined
    }
  },
  beforeDestroy() {
    this.unsubscribeAuth();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
