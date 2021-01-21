<template>
  <div
    class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header"
  >
    <TheHeader :user-info="userInfo"></TheHeader>
    <div class="app-main">
      <TheSidenav :user-info="userInfo"></TheSidenav>
      <div class="app-main__outer">
        <div class="app-main__inner">
          <Nuxt />
        </div>
        <TheFooter></TheFooter>
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav'
import TheFooter from '@/components/Navigation/TheFooter'

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheFooter,
  },
  data() {
    return {
      userInfo: {
        userName: 'Ankita',
        fullName: 'Ankita Jadhav',
        userId: '123457890',
        isAdmin: true,
        role: 'Owner',
        gender: 'F',
      },
    }
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

body {
  background: #f1f4f6;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: 'Source Sans Pro', sans-serif;
}
</style>
