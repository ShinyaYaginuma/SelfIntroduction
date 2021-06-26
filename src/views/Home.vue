<template>
  <v-container id="home">
    <AboutMe />
    <Skills />
  </v-container>
</template>

<script>
// @ を指定することで `/src` の代替となる
import AboutMe from "@/components/AboutMe.vue";
import Skills from "@/components/Skills.vue";

export default {
  name: "Home",
  components: {
    AboutMe,
    Skills,
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