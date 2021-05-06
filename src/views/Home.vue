<template>
  <div id="home">
    <div class="d-flex justify-content-center align-items-center py-4 mt-4">
      <div class="col-2" />
      <div class="col-4" style="text-align: right">
        <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
        <AboutMe msg="Welcome to My Page" />
      </div>
      <div class="row col-4" style="text-align: center">
        <div class="col-12">
          <img
            class="rounded-circle"
            alt="My Icon"
            src="../assets/TwitterIcon.png"
            width="300px"
            height="auto"
          />
        </div>
        <div class="col-12 mt-4" style="text-align: center">
          <h5><em>Shinya Yaginuma</em></h5>
        </div>
      </div>
      <div class="col-2" />
    </div>
    <div class="d-flex justify-content-center align-items-center py-4 mt-4">
      <div class="col-2" />
      <div class="col-8" style="text-align: center">
        <h3>Ordinary office worker</h3>
      </div>
      <div class="col-2" />
    </div>
  </div>
</template>

<script>
// @ を指定することで `/src` の代替となる
// import HelloWorld from "@/components/HelloWorld.vue";
import AboutMe from "@/components/AboutMe.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
    AboutMe,
  },
};
</script>

<style scoped>
#home {
  text-align: center;
  margin-top: 80px;
}
</style>