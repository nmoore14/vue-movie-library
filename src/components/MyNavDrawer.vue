<template>
  <v-navigation-drawer 
    v-model='drawer' 
    absolute 
    temporary
    class="grey"
    >
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MyNavDrawer',
  data () {
    return {
      drawer: null
    }
  },
  computed: {
    ...mapState([ 'navCount' ])
  },
  watch: {
    navCount: function () {
      this.drawer = !this.drawer
    }
  }
}
</script>
