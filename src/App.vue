<template>
  <div id="app" style="background: Silver">
    <!-- <div class="nav-justified"> -->
    <div style="background: Black">
      <!-- <ul class="nav nav-pills nav-fill"> -->
      <ul class="nav justify-content-center py-1">
        <!-- `router.js` で定義したルーティングルールとの紐付けを行っている -->
        <!-- アイコンは→で選定。 https://icons.getbootstrap.jp/#%E4%BD%BF%E3%81%84%E6%96%B9 -->
        <li class="nav-item">
          <router-link class="nav-link" to="/"
            ><i class="bi bi-person"></i> Who am I</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/skills"
            ><i class="bi bi-code-slash"></i> Skills</router-link
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ShinyaYaginuma"
            ><i class="bi bi-github"></i> GitHub</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://s-yaginu.hatenablog.com/"
            ><i class="bi bi-journals"></i> hatena</a
          >
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            href="https://twitter.com/Shinya_is_Now"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-twitter"></i> Contact
          </a>
        </li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<!--  <script> // ルーティングによって必要がなくなるらしい。
// import HelloWorld from "./components/HelloWorld.vue";
// import Carrer from "./components/carrer.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//     Carrer,
//   },
// };
//
//</script>
-->

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
/* li {
  display: inline-block;
  margin: 0 10px;
} */
a {
  color: #42b983;
}
</style>
