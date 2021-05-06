<template>
  <div id="scafold">
    <!-- <top></top> -->
    <Sidebar class="sidebar-area" />
    <div class="scafold-wrapper text-center">
      <router-view />
    </div>
    <!-- <bottom class="footer-area"></bottom> -->
  </div>
</template>

<script>
// import Top from "./top.vue"; // ヘッダー
// import Bottom from "./bottom.vue"; // フッター
// import Welcome from "../welcome.vue"; // トップページのコンテンツ
// import Sidebar from "./sidebar.vue"; // サイドバー

export default {
  components: {
    // Top,
    // Bottom,
    // Welcome,
    Sidebar,
  },
};
</script>

<style scoped>
.sidebar-area {
  /* 左側に固定 */
  float: left;
}

.footer-area {
  margin-top: 40px;
}

.scafold-wrapper {
  /* display: flex; 要素を横並びにする */
  flex-direction: column; /* 要素の並び順の主軸を指定 上 => 下 */
  min-height: 100vh; /* 要素の高さの最小値を指定 vhはviewport(表示領域) heightの略 */

  /* サイドバーのwidth分だけ範囲を削除 */
  width: calc(100% - 200px);

  /* サイドバーで隠れるので右に寄せる */
  margin: 0 0 0 180px;
}
</style>
