<template>
  <header>
    <v-app-bar app dark>
      <v-app-bar-nav-icon
        clippedLeft
        dark
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>Portfolio Site</v-toolbar-title>
      <v-tabs>
        <v-tab>
          <router-link class="nav-link" to="/"
            ><i class="bi bi-person"></i> About</router-link
          >
        </v-tab>
        <!-- <v-tab>
          <router-link class="nav-link" to="/skills"
            ><i class="bi bi-code-slash"></i> Skills</router-link
          >
        </v-tab> -->
        <v-tab>
          <a
            class="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/ShinyaYaginuma"
            ><i class="bi bi-github"></i> GitHub<svg
              style="width: 18px; height: 18px; padding: 3px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
              /></svg
          ></a>
        </v-tab>
        <v-tab>
          <a
            class="nav-link"
            target="_blank"
            rel="noopener noreferrer"
            href="http://s-yaginu.hatenablog.com/"
            ><i class="bi bi-journals"></i> hatena<svg
              style="width: 18px; height: 18px; padding: 3px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
              /></svg
          ></a>
        </v-tab>
        <v-tab>
          <a
            class="nav-link"
            href="https://twitter.com/Shinya_is_Now"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-twitter"></i> Contact
            <svg
              style="width: 18px; height: 18px; padding: 3px"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
              /></svg
          ></a>
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" dark absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item>
            <router-link class="nav-link" to="/"
              ><i class="bi bi-person"></i> About</router-link
            >
          </v-list-item>
          <!-- <v-list-item>
            <router-link class="nav-link" to="/skills"
              ><i class="bi bi-code-slash"></i> Skills</router-link
            >
          </v-list-item> -->
          <v-list-item>
            <a
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ShinyaYaginuma"
              ><i class="bi bi-github"></i> GitHub<svg
                style="width: 18px; height: 18px; padding: 3px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                /></svg
            ></a>
          </v-list-item>
          <v-list-item>
            <a
              class="nav-link"
              target="_blank"
              rel="noopener noreferrer"
              href="http://s-yaginu.hatenablog.com/"
              ><i class="bi bi-journals"></i> hatena<svg
                style="width: 18px; height: 18px; padding: 3px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                /></svg
            ></a>
          </v-list-item>
          <v-list-item>
            <a
              class="nav-link"
              href="https://twitter.com/Shinya_is_Now"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bi bi-twitter"></i> Contact
              <svg
                style="width: 18px; height: 18px; padding: 3px"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
                /></svg
            ></a>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>
 
<script>
export default {
  name: "AppHeader",
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
 
<style lang="scss" scoped>
.v-toolbar__title {
  overflow: visible !important;
  margin-right: 50px !important;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  display: none;

  @include display_pc {
    display: block !important;
  }
}

.nav-link {
  text-transform: none;
}

.nav-link:focus,
.nav-link:hover {
  color: #1de9b6;
}
</style>