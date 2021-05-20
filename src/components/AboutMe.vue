<template>
  <v-container>
    <v-container id="home">
      <v-row justify="center" align-content="center">
        <v-col cols="12" lg="12" md="12" sm="12" align="center">
          <img
            class="rounded-circle"
            alt="My Icon"
            src="../assets/TwitterIcon.png"
            width="300px"
            height="auto"
          />
          <h5><em>I'm Shinya Yaginuma</em></h5>
        </v-col>
        <v-col cols="12" lg="12" md="12" sm="12" align="center">
          <h2>
            {{ msg }}
          </h2>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "AboutMe",
  props: {
    msg: String,
  },
};
</script>