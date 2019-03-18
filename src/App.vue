<template>
  <v-app>
    <my-toolbar></my-toolbar>
    <my-nav-drawer></my-nav-drawer>
  </v-app>
</template>

<script>
import MyToolbar from './components/MyToolbar'
import MyNavDrawer from './components/MyNavDrawer'

export default {
  name: 'App',
  components: {
    MyToolbar,
    MyNavDrawer
  },
  data () {
    return {
      //
    }
  }
}
</script>
