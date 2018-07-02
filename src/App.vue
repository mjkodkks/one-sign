<template>
  <div id="app">
    <img class="logo" src="./assets/logo_OneAuthen_500px.png" width="200px">
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Footer from './components/Footer.vue'
import OneAuthenHome from './components/OneAuthenHome.vue'
import Upload from './components/Upload.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'app',
  components: {
    OneAuthenHome,
    Upload,
    Footer
  },
  data () {
    return {
      access_token: Object
    }
  },
  mounted () {
    const user = JSON.parse(localStorage.user)
    console.log(user)
    if (new Date() < new Date(user.expires_in)) {
      this.$store.state.isLogin = true
      this.$store.state.user = user
      this.$router.push('/upload')
    } else {
      this.$store.state.isLogin = false
      this.$store.state.user = null
      this.$router.push('/login')
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Kanit");
body {
  background: #f7f9fe;
}

#app {
  font-family: "Kanit", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
}
</style>
