<template>
  <div class="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <LogoSmall class="logo" />
        <a
          @click="isOpen = !isOpen"
          v-bind:class="{ 'is-active': isOpen }"
          role="button"
          class="navbar-burger"
          aria-label="main-menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    </nav>
    <div v-bind:class="{ 'is-active': isOpen }" class="main-menu">
      <a @click="isOpen = !isOpen" href="/">Home</a>
      <a @click="isOpen = !isOpen" href="/about">About</a>
      <a @click="isOpen = !isOpen" href="/contact">Contact</a>
      <a @click="isOpen = !isOpen" href="/terms">Terms</a>
    </div>
    <nuxt />
  </div>
</template>

<script>
import LogoSmall from '~/components/LogoSmall'
export default {
  components: {
    LogoSmall
  },

  data() {
    return {
      isOpen: false,
      items: [
        {
          title: 'Privacy Policy',
          to: { name: 'privacy-policy' }
        },
        {
          title: 'Terms & Conditions',
          to: { name: 'terms' }
        }
      ],
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
.navbar {
  background-color: #000000;
  background-repeat: no-repeat;
  // background-image: url('~assets/Stitching.png');
  background-position: left;

  .navbar-brand {
    width: 100%;

    .logo {
      width: 60px !important;
      padding: 10px;
      margin-left: 48%;
    }
  }

  .navbar-burger {
    color: #ffffff;
  }
}

.navbar-burger {
  display: block;
}

.main-content {
  min-height: inherit;
}

.main-menu {
  background-color: #000000;
  position: absolute;
  top: 52px;
  width: 100%;
  text-align: center;
  font-family: 'Rajdhani-Regular';
  font-size: 20px;
  height: 95vh;
  padding-top: 50px;
  display: none;
  z-index: 9999;

  a {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
  }
}

.main-menu.is-active {
  display: block;
}

@media only screen and (min-width: 560px) {
  .navbar-brand {
    .logo {
      margin-left: 47%;
    }
  }
}
</style>
