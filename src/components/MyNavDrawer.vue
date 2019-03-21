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
        <v-list
          dense
          v-for="(item, index) in top.items"
          :key="index"
          class="pl-4"
        >
          <v-list-tile-content>
            <v-list-tile-title class="title grey--text text--darken-4 font-weight-regular">{{ item.title }}</v-list-tile-title>
            <p class="subheading grey--text text--darken-4 font-weight-light">Released: {{ item.releaseDate }}</p>
          </v-list-tile-content>
        </v-list>
      </v-expansion-panel-content>
    </v-expansion-panel>
    <v-divider></v-divider>
    <v-list>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>videocam</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="title grey--text text--darken-4 font-weight-light">Genres</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>group</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title class="title grey--text text--darken-4 font-weight-light">Actors/Actresses</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
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
          icon: 'event',
          items: [
            {
              title: 'Holes',
              releaseDate: '4-11-2013'
            },
            {
              title: 'Titan A.E.',
              releaseDate: '6-16-2000'
            }
          ]
        },
        {
          title: 'Favorites',
          icon: 'stars',
          items: [
            {
              title: 'Holes',
              releaseDate: '4-11-2013'
            },
            {
              title: 'Titan A.E.',
              releaseDate: '6-16-2000'
            }
          ]
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
