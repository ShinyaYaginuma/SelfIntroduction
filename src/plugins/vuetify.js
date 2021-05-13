import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import ja from 'vuetify/lib/locale/ja';

// AppHeader.Vueのv-app-bar-nav-iconを正しく表示するために必要
// Vuetifyのコンストラクタにiconsのパラメータを追記する
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        primary: '#FFFFFF',
        secondary: '#1DE9B6',
        accent: '#37474F',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      },
    },
  },
  lang: {
    locales: { ja },
    current: 'ja',
  },
  icons: {
    iconfont: 'mdi',
  },
});
