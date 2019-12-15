<template>
    <v-app>
        <v-container bg fill-height grid-list-md text-xs-center>
        <v-layout row wrap align-center>
          <v-flex>
            <v-row>
                <v-col cols="12" sm="4">
                </v-col>
                <v-col cols="12" sm="4">
                    Test
                </v-col>
                <v-col cols="12" sm="4">
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" sm="4">
                </v-col>
                <v-col cols="12" sm="4">
                    <v-text-field
                    prepend-inner-icon="search"
                    append-icon="keyboard"
                    outlined
                    rounded
                    >
                    </v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
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
  components: {
    
  }
}
</script>
