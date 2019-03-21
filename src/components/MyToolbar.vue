<template>
  <v-toolbar dense class='grey darken-4 grey--text text--lighten-3'>
    <v-toolbar-side-icon
      @click.stop='setNav()'
      class='cyan'
      >
    </v-toolbar-side-icon>
    <v-toolbar-title class='text-xs-subheading display-1 font-weight-light'>Vue Movie Library</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn flat icon color='cyan'>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn flat icon color='cyan'>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MyToolbar',
  data () {
    return {}
  },
  computed: {
    ...mapState(['navCount'])
  },
  methods: {
    ...mapMutations(['SET_NAVDRAWER']),
    setNav () {
      this.SET_NAVDRAWER()
    }
  }
}
</script>
