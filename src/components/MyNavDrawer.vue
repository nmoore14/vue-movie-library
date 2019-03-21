<template>
  <v-navigation-drawer v-model='drawer' absolute temporary></v-navigation-drawer>
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
  methods: {
    ...mapMutations([ 'RESET_NAV' ]),
    navReset () {
      this.RESET_NAV()
    }
  },
  watch: {
    navCount: function () {
      this.drawer = !this.drawer
    }
  }
}
</script>
