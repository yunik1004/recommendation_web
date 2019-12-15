<template>
  <div class="movie">
      <v-row>
        <h1>Movie Chart</h1>
      </v-row>
      <v-row>
        <v-card>
            <v-list two-line subheader>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                >
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title"></v-list-item-title>
                        <v-list-item-subtitle v-text="item.lower_title"></v-list-item-subtitle>
                    </v-list-item-content>
                    <v-divider inset></v-divider>
                </v-list-item>
            </v-list>
        </v-card>
      </v-row>
  </div>
</template>

<script>
export default {
  name: 'movie',
  components: {
    
  },
  data: () => ({
      items: [
          { img: 'img', title: 'ttt', lower_title: 'lll'},
          { img: 'img', title: 'tss', lower_title: 'lll'},
      ]
  })
}
</script>
