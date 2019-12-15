<template>
    <v-app>
        <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            <v-row>
                <v-flex xs12>
                    <v-img
                    :src="require('../assets/festisite_google.png')"
                    class="my-3"
                    contain
                    height="110"
                    ></v-img>
                </v-flex>
            </v-row>
            <v-row>
                <v-col cols="12" xs="0" sm="2" md="2" lg="3" xl="4">
                </v-col>
                <v-col cols="12" xs="12" sm="8" md="8" lg="6" xl="4">
                    <v-text-field
                    label="Movie!"
                    v-model="keyword"
                    prepend-inner-icon="search"
                    append-icon="keyboard"
                    outlined
                    rounded
                    @keydown.enter="search()"
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="12" xs="0" sm="2" md="2" lg="3" xl="4">
                </v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
</template>

<script>
export default {
  name: 'search',
  data () {
      return {
          keyword: ""
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
  },
  created () {
      this.$store.commit('invisible')
  }
}
</script>
