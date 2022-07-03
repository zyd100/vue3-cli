/**
 * @description 主题全局配置状态
 * @author hu-snail 1217437592@qq.com
 */

import { themeConfig } from '@/config/theme';
import { getSettings } from '@/utils/cookies';

const { mode, theme, fixedHead, fullScreen, refresh, collapse, notice, isBreadcrumb, isLogo, tag } =
  themeConfig;

const state = {
  routerView: true, // 是否显示路由
  isDrawerSetting: false, // 是否打开主题设置
  isMobile: false, // 是否为移动端
  isDrawer: false, // 是否展开移动端菜单
  collapse,
  fullScreen,
  refresh,
  mode: getSettings() ? getSettings().mode : mode,
  theme,
  fixedHead,
  notice,
  isBreadcrumb,
  isLogo,
  tag,
};

const getters = {
  routerView: (state) => state.routerView,
  isMobile: (state) => state.isMobile,
  isDrawer: (state) => state.isDrawer,
  theme: (state) => state.theme,
  isDrawerSetting: (state) => state.isDrawerSetting,
  fullScreen: (state) => state.fullScreen,
  refresh: (state) => state.refresh,
  fixedHead: (state) => state.fixedHead,
  notice: (state) => state.notice,
  isBreadcrumb: (state) => state.isBreadcrumb,
  isLogo: (state) => state.isLogo,
  tag: (state) => state.tag,
  mode: (state) => state.mode,
  settings: (state) => state,
};

const mutations = {
  CHANGE_COLLAPSE: (state) => {
    state.collapse = !state.collapse;
  },
  SET_ROUTER_VIEW: (state) => {
    state.routerView = !state.routerView;
  },
  CHANGE_IS_MOBILE: (state, flag) => {
    state.isMobile = flag;
  },
  CHANGE_IS_DRAWER: (state, flag) => {
    state.isDrawer = flag;
  },
};

const actions = {
  /**
   * @description 切换展开收起
   */
  changeCollapse: ({ commit }) => {
    commit('CHANGE_COLLAPSE');
  },
  /**
   * @description 是否刷新路由
   *  @param {boolean} flag true|false
   */
  setRouterView: ({ commit }, flag) => {
    commit('SET_ROUTER_VIEW', flag);
  },
  /**
   * @description 是否为移动端
   *  @param {boolean} flag true|false
   */
  changeMobile: ({ commit }, flag) => {
    commit('CHANGE_IS_MOBILE', flag);
  },
  /**
   * @description 是否展开移动端菜单
   *  @param {boolean} flag true|false
   */
  changeDrawer: ({ commit }, flag) => {
    commit('CHANGE_IS_DRAWER', flag);
  },
  /**
   * @description 设置主题
   * @param {strinng} theme 系统默认：blue|green|red|default
   */
  setTheme: ({ commit }, theme) => {
    commit('SET_THEME', theme);
  },
};

export default {
  getters,
  state,
  mutations,
  actions,
};
