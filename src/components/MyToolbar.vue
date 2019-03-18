<template>
	<v-toolbar dense>
		<v-toolbar-side-icon @click.stop="setNav()"></v-toolbar-side-icon>
		<v-toolbar-title>Vue Movie Library</v-toolbar-title>
		<v-spacer></v-spacer>
		<v-btn flat icon color="primary">
			<v-icon>search</v-icon>
		</v-btn>
		<v-btn flat icon color="primary">
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
		...mapState({ 
			drawer: state => state.navDrawer 
		})
	},
	methods: {
		...mapMutations([ 'SET_NAVDRAWER' ]),
		setNav () {
			this.SET_NAVDRAWER(this.drawer)
		}
	}
}
</script>
