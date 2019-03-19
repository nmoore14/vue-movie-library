<template>
  <v-navigation-drawer v-model='drawer' absolute temporary></v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MyNavDrawer',
  data () {
    return {}
  },
  computed: {
    ...mapState({
      drawer: state => state.navDrawer
    })
  },
  methods: {
    ...mapMutations([ 'RESET_NAV' ]),
    navReset() {
      this.RESET_NAV();
    }
  },
  updated() {
    this.$on('input', function() {
      this.navReset();
    })
  }
}
</script>
