<template>
  <div class="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <LogoSmall />
        <a
          @click="isOpen = !isOpen"
          v-bind:class="{ 'is-active': isOpen }"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div v-bind:class="{ 'is-active': isOpen }" class="navbar-menu">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item is-tab active"
            >Home</router-link
          >
          <router-link to="/privacy-policy" class="navbar-item is-tab"
            >Privacy Policy</router-link
          >
          <router-link to="/terms" class="navbar-item is-tab"
            >Terms</router-link
          >
        </div>
      </div>
    </nav>
    <section class="main-content columns">
      <div class="container column is-12">
        <nuxt />
      </div>
    </section>

    <footer>
      <section class="main-content columns">
        <aside class="column is-4 section">
          Sapien Interactive &copy; {{ year }}
        </aside>
        <aside class="column is-8 section links right">
          <a href="#" target="_blank"><img src="~assets/facebook.png"/></a>
          <a href="#" target="_blank"><img src="~assets/twitter.png"/></a>
        </aside>
      </section>
    </footer>
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
.app {
  min-height: 100vh;
}

.navbar {
  background-color: #000000;
  background-repeat: no-repeat;
  background-image: url('~assets/Stitching.png');
  background-position: left;

  .navbar-brand {
    .logo {
      width: 60px !important;
      padding: 10px;
    }
  }

  .navbar-burger {
    color: #ffffff;
  }

  .navbar-menu {
    background-color: #000000;
  }

  .navbar-menu a {
    color: #fff;
  }

  .navbar-menu a.active {
    border-bottom: solid 1px #f80290;
  }
}

.main-content {
  min-height: inherit;
}

footer {
  border-top: solid 1px #292929;
  font-size: 14px;

  .section {
    padding: 2rem 1.5rem 1rem 1.5rem;
  }

  .right {
    text-align: right;
  }
}
</style>
