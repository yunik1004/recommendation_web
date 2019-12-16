<template>
  <v-app>
    <v-container bg fill-height grid-list-md text-xs-center id="content">
      <v-layout row align-content-start>
        <v-col>
          <v-row>
            <h1>Related Movies</h1>
          </v-row>
          <v-row>
            <v-list color="#FAFAFA">
              <v-list-item
                v-for="item in movies"
                :key="item">
                <v-list-item-content style="text-align:left;">
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
          <v-divider></v-divider>
          <v-row>
            <h1>Recommended Musics</h1>
          </v-row>
          <v-row>
            <v-list color="#FAFAFA">
              <v-list-item three-line
                v-for="(item, index) in musics"
                :key="item.title">
                <v-list-item-icon>
                  <v-img :src="require('../assets/default-cover.png')"
                      width=140 height=120 contain></v-img>
                </v-list-item-icon>
                <v-list-item-content style="text-align:left;">
                  <v-list-item-title style="font-size:17pt;">{{index+1}}. {{item.title}}</v-list-item-title>
                  <v-list-item-subtitle style="font-size:13pt;">- {{item.lower_title}}</v-list-item-subtitle>
                  <v-list-item-subtitle>
                    <v-chip
                      v-for="(tag, index) in item.categories.slice(1)"
                      :key="index"
                      class="ma-2" color="pink" label text-color="white" small>
                      <v-icon left>mdi-label</v-icon>
                      {{tag}}
                    </v-chip>
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
        </v-col>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
const axios = require('axios');

export default {
  name: 'result',
  data () {
    return {
      keyword: this.$route.query.keyword.toLowerCase(),
      movies: [],
      musics: [],
      musics_cover_url: [],
    }
  },
  created () {
    this.$store.commit('setKeyword', this.keyword)
    this.$store.commit('visible')

    let that = this;

    axios.get('http://twice.dmlab.kaist.ac.kr:32787/api/', {
      params: {
        keyword: this.keyword
      }
    }).then(function (response) {
          that.movies = response.data['found']
          that.musics = response.data['result']
          /*
          that.musics.forEach(function (item) {
            that.getURL(item.title)
          });*/
        }).catch(function (error) {
          alert(error);
        })
  },
  methods: {
    getURL (title) {
      let that = this;
      axios.get('https://musicbrainz.org/ws/2/release/?query=' + title)
        .then(function (response) {
          let mid = response['data']['releases'][0]['id']
          that.musics_cover_url.push('http://coverartarchive.org/release/' + mid + '/front');
      })
    }
  }
}
</script>

<style>
#content {
  margin-top: 64px !important;
}
</style>
