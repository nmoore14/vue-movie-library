<template>
  <v-navigation-drawer
    v-model='drawer'
    absolute
    temporary
    class="grey"
    >
    <v-list class='grey lighten-3 pl-2'>
      <v-list-tile-title class="title grey--text text--darken-4 font-weight-light">{{ username }}'s Library</v-list-tile-title>
    </v-list>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="title grey--text text--darken-4 font-weight-light">Home</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-expansion-panel
      expand
      focusable
    >
      <v-expansion-panel-content
        v-for="(top, index) in userTop"
        :key="index"
      >
        <div slot="header" class="title grey--text text--darken-4 font-weight-light">{{ top.title }}</div>
      </v-expansion-panel-content>
    </v-expansion-panel>

  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'MyNavDrawer',
  data () {
    return {
      drawer: null,
      username: 'Nick',
      userTop: [
        {
          title: 'Recent',
          icon: 'event'
        },
        {
          title: 'Favorites',
          icon: 'stars'
        }
      ]
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
