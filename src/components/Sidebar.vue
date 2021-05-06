<template>
  <div class="sidebar">
    <div class="sidebar-wrapper">
      <div class="sidebar-link-area">
        <!-- サイドバーメニュー -->
        <ul class="tab-menu-base">
          <!-- `router.js` で定義したルーティングルールとの紐付けを行っている -->
          <li>
            <router-link to="/">About Me</router-link>
          </li>
          <li>
            <router-link to="/skills">Skills</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>


<style>
.sidebar {
  background-color: #191970;
  height: 100%; /* サイドバーの高さ */
  width: 200px; /* サイドバーのwidthを指定 */
  max-width: 200px; /* widthの最大値 */
  opacity: 0.9.5; /* 透過する 0に近くほど透過する */
  position: fixed; /* 左上に要素を固定する(スクロールしても位置は固定される) */
  overflow-x: hidden; /* 横軸ではみ出た要素を非表示にする */
  box-sizing: border-box; /* paddingとborderを、widthとheightに含める */
  padding-left: 40px; /* サイドバー内のリンクの位置を右にずらす */
}

.sidebar-link-area {
  padding-top: 20px; /* サイドバーリンクの上部に空白を作る */
}

.sidebar-link {
  color: #ffffff; /* リンクの文字色を白に */
}

.sidebar-link:hover {
  color: #ffffff; /* マウスがリンクに乗った時も文字色を白に */
}
</style>
