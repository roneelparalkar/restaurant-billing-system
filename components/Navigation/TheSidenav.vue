<template>
  <div class="app-sidebar sidebar-shadow">
    <div class="app-header__logo">
      <div class="logo-src"></div>
      <div class="header__pane ml-auto">
        <div>
          <button
            type="button"
            class="hamburger close-sidebar-btn hamburger--elastic"
            data-class="closed-sidebar"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    <div class="app-header__mobile-menu">
      <div>
        <button
          type="button"
          class="hamburger hamburger--elastic mobile-toggle-nav"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
    <div class="app-header__menu">
      <span>
        <button
          type="button"
          class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
        >
          <span class="btn-icon-wrapper">
            <i class="fa fa-ellipsis-v fa-w-6"></i>
          </span>
        </button>
      </span>
    </div>
    <div class="scrollbar-sidebar">
      <div class="app-sidebar__inner">
        <ul class="vertical-nav-menu">
          <li
            v-for="menu in menuOptions"
            :key="menu.id"
            :class="menu.type === 'master' ? 'app-sidebar__heading' : ''"
          >
            <nuxt-link v-if="menu.type === 'sub-menu'" :to="menu.route">
              <i class="metismenu-icon" :class="menu.icon"></i>
              {{ menu.menuName }}
            </nuxt-link>
            <div v-else>{{ menu.menuName }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import * as menuConfig from '~/config/menuConfig'
export default {
  props: {
    userInfo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      menuOptions: menuConfig.menuOptions,
    }
  },
}
</script>
