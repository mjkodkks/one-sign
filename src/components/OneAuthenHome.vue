<template>
  <div class="container">
    <div class="row justify-content-center">
      <b-alert class="alert-login" :show="dismissCountDown" dismissible fade variant="danger" @dismissed="dismissCountDown=0" @dismiss-count-down="countDownChanged">
        <img src="../assets/icon/sharp-error-24px.svg" style="margin-top: -5px;" /> Invalid Username or Password, Please try again
      </b-alert>
      <b-form @submit="onSubmit">
        <div v-bind:class="[dismissCountDown ? animate_alert:'']">
          <div class="card-box">
            <b-form-group id="InputGroup1" label="OneID :" label-for="Input1" class="label-head">
              <b-form-input id="Input1" type="text" v-model="form.user_name" required placeholder="Enter your OneID">
              </b-form-input>
            </b-form-group>
            <b-form-group id="InputGroup1" label="Password :" label-for="Input2" class="label-head">
              <b-form-input id="Input2" type="password" v-model="form.user_password" required placeholder="Enter your password">
              </b-form-input>
            </b-form-group>
            <b-button type="submit" class="submit-btn">
              <div v-if="load" class="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div v-else>Login</div>
            </b-button>
          </div>
        </div>
      </b-form>
    </div>
    <div class="row justify-content-center" style=" font-size: 11px;
        margin-top: 25px;">
      คุณยังไม่มีบัญชี One Platform ใช่หรือไม่?
    </div>
    <div class="row justify-content-center">
      <b-button class="register-btn" href="https://one.th/register" alt="something wrong">Register</b-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'OneAuthenHome',
  props: {
    msg: String,
    info: Object
  },
  data () {
    return {
      form: {
        user_name: '',
        user_password: ''
      },
      access_token_in: String,
      user_data: Object,
      load: '',
      dismissSecs: 5,
      dismissCountDown: 0,
      showDismissibleAlert: false,
      animate_alert: 'animated bounce'
    }
  },
  mounted () {
    console.log(this.$store.state.isLogin)
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.load = true

      axios
        .post('https://testoneid.inet.co.th/api/oauth/getpwd', {
          grant_type: 'password',
          client_id: '49',
          client_secret: 'a4sUAx8EH0xpqXlgc2dWVFePDiO2t7MGXkfez4vC',
          username: this.form.user_name,
          password: this.form.user_password
        })
        .then(response => {
          this.access_token_in = response.data.access_token
          const expires_in = new Date().getTime() + response.data.expires_in * 1000
          console.log(response.data)
          console.log(this.access_token_in)

          axios
            .get('https://testoneid.inet.co.th/api/account', {
              headers: {
                Authorization: 'Bearer ' + this.access_token_in,
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            })
            .then(res => {
              const user = []
              this.user_data = res.data
              this.user_data.user_id = this.form.user_name
              this.user_data.expires_in = expires_in
              localStorage.setItem('user', JSON.stringify(this.user_data))
              this.$store.state.isLogin = true
              this.$store.state.user = user
              this.load = false
              this.$router.push('/upload')
              console.log(this.user_data)
            })
            .catch(error => {
              this.load = false
              console.log(error)
            })
        })
        .catch(error => {
          console.log(error)
          this.load = false
          this.showAlert()
        })
    },
    countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.label-head {
  font-size: 24px;
  margin-top: 10px;
}

h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.custom-select {
  color: #5bbb47;
}

.form-control:focus {
  color: #5bbb47;
}

form {
  margin-top: 30px;
}

.card-box {
  background: #fff;
  width: 300px;
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-top: 30px;
  margin-top: 30px;
  box-shadow: 0 4px 30px 0 rgba(223, 225, 230, 0.5);
  border-radius: 30px 30px 30px 30px;
  -moz-border-radius: 30px 30px 30px 30px;
  -webkit-border-radius: 30px 30px 30px 30px;
  border: 0px solid #000000;
  transition: all 1s;
}

.card-box:hover {
  transition: all 1s;
  -webkit-box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
}

.form-control {
  border: none;
  border-bottom: 2px solid #5bbb47;
  border-radius: 0;
  color: #bdc3ca;
}

.form-control:focus {
  border-color: #198f00;
  box-shadow: 0 0 0 0.2rem rgb(231, 239, 229);
}

label {
  color: #000;
  font-size: 1.3rem;
}

.register-btn {
  width: 240px;
  margin-top: 8px;
  background-color: #1adf4b;
  border-color: #f7f9fe;
  color: #fff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px 15px 15px 15px;
  -moz-border-radius: 15px 15px 15px 15px;
  -webkit-border-radius: 15px 15px 15px 15px;
}

.register-btn:hover {
  background-color: #08be35;
  border-color: #08be35;
}

.submit-btn {
  width: 240px;
  margin-top: 20px;
  background-color: #18222c;
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 15px 15px 15px 15px;
  -moz-border-radius: 15px 15px 15px 15px;
  -webkit-border-radius: 15px 15px 15px 15px;
}

.submit-btn:active {
  box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
}

.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 64px;
  height: 10px;
}

.lds-ellipsis div {
  position: absolute;
  top: 0px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: #fff;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
}

.lds-ellipsis div:nth-child(1) {
  left: 6px;
  animation: lds-ellipsis1 0.6s infinite;
}

.lds-ellipsis div:nth-child(2) {
  left: 6px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(3) {
  left: 26px;
  animation: lds-ellipsis2 0.6s infinite;
}

.lds-ellipsis div:nth-child(4) {
  left: 45px;
  animation: lds-ellipsis3 0.6s infinite;
}

@keyframes lds-ellipsis1 {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes lds-ellipsis3 {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}

@keyframes lds-ellipsis2 {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(19px, 0);
  }
}

.alert-login {
  display: block;
  position: absolute;
  z-index: 99;
  border-color: #f7f9fe;
  background: #fff;
  color: #d60103;
  top: 20%;
  transition: all 1s;
  -webkit-box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 10px 21px -1px rgba(0, 0, 0, 0.3);
  text-align: center;
}

@media screen and (min-width: 1024px) {
  .card-box {
    width: 400px;
  }
}
</style>
