<template>
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
        <AboutMe msg="Welcome to My Page" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ を指定することで `/src` の代替となる
import AboutMe from "@/components/AboutMe.vue";

export default {
  name: "Home",
  components: {
    AboutMe,
  },
};
</script>

<style scoped>
#home {
  height: auto;
  text-align: center;
}

h5 {
  margin-top: 10px;
}
</style>