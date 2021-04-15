import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import Amplify from 'aws-amplify'
import '@aws-amplify/ui-vue'

const AWS_REGION = 'us-east-1'
const COGNITO_USER_POOL_ID = 'us-east-1_w7a4BGpsr'
const WEB_USER_POOL_CLIENT_ID = '21sd13a0e717rajjij42njt463'
const AWS_APPSYNC_ENDPOINT = 'https://vgxzeue7ujagbd7tl4uir7inae.appsync-api.us-east-1.amazonaws.com/graphql'


Amplify.configure({
  Auth: {
    region: AWS_REGION,
    userPoolId: COGNITO_USER_POOL_ID,
    userPoolWebClientId: WEB_USER_POOL_CLIENT_ID,
    mandatorySignIn: true
  }
})

const myAppConfig = {
  'aws_appsync_graphqlEndpoint': AWS_APPSYNC_ENDPOINT,
  'aws_appsync_region': AWS_REGION,
  'aws_appsync_authenticationType': 'AMAZON_COGNITO_USER_POOLS'
}

Amplify.configure(myAppConfig)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
