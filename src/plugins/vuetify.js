import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import zhHant from 'vuetify/es5/locale/zh-Hant';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#e91e63',
        secondary: '#ffffff',
        accent: '#9c27b0',
        error: '#f44336',
        warning: '#ffc107',
        info: '#4caf50',
        success: '#8bc34a'
      },
    },
  },
    lang: {
      locales: { zhHant },
      current: 'zh-Hant',
    },
  icons: {
    iconfont: 'fa',
  },
});
