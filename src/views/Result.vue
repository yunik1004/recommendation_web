<template>
  <v-app>
    <v-container bg fill-height grid-list-md text-xs-center id="content">
      <v-layout row align-content-start>
        <v-col>
          <v-row>
            <h1>Movie</h1>
            {{keyword}}
          </v-row>
          <v-row>
            <h1>Recommendation</h1>
          </v-row>
        </v-col>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'result',
  data () {
    return {
      keyword: this.$route.query.keyword.toLowerCase()
    }
  },
  created () {
    this.$store.commit('setKeyword', this.keyword)
    this.$store.commit('visible')

    const axios = require('axios');
    axios.get('http://twice.dmlab.kaist.ac.kr:32787/api/?keyword=' + this.keyword)
        .then(function (response) {
          alert(response);
        }).catch(function (error) {
          alert(error);
        })
  }
}
</script>

<style>
#content {
  margin-top: 64px !important;
}
</style>
