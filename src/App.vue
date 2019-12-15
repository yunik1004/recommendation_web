<template>
  <div id="app">
    <v-app-bar
      app
      color="black"
      dark
    >
      <v-toolbar-title id="homebutton">
        <router-link :to="{name: 'home'}">
          <v-btn icon><v-icon>emoji_objects</v-icon></v-btn>More About You
        </router-link>
      </v-toolbar-title>
      <v-text-field
        v-if="qboxVisible"
        v-model="keyword"
        flat
        rounded
        hide-details
        solo-inverted
        label="Movie!"
        append-icon="mdi-magnify"
        class="hidden-sm-and-down"
        id="qbox"
        @keydown.enter="search()"
      >
      </v-text-field>
      <v-spacer/>
    </v-app-bar>
    
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      keyword: this.$store.getters.getKeyword
    }
  },
  computed: {
    qboxVisible: function () {
      return this.$store.getters.getqboxVisible
    }
  },
  watch: {
    qboxVisible: {
      deep: true,
      handler: function () {
        this.keyword = this.$store.getters.getKeyword
      }
    }
  },
  methods: {
      search () {
          this.$router.push({
              name: 'result',
              query: {
                  keyword: this.keyword.toLowerCase()
              },
              props: true
          })
      }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

a { 
  text-decoration: none;
  &:link {
    color: white;
  }
  &:visited {
    color: white;
  }
}

#homebutton {
  margin-right: 30px
}
</style>
