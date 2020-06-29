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
      <section class="main-content is-mobile columns">
        <aside class="column is-8 section">
          <p class="footerText">Sapien Interactive &copy; {{ year }}</p>
        </aside>
        <aside class="column is-4 section links right">
          <a href="https://www.facebook.com/bootbag" target="_blank">
            <img src="~assets/facebook.png" />
          </a>
          <a href="https://twitter.com/bootbag" target="_blank">
            <img src="~assets/twitter.png" />
          </a>
          <a href="https://www.instagram.com/bootbag/" target="_blank">
            <img src="~assets/twitter.png" />
          </a>
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

  .navbar-brand {
    .logo {
      width: 60px !important;
      padding: 10px;
      margin: 0px 43%;
    }
  }

  .navbar-burger {
    color: #ffffff;
  }

  .navbar-menu {
  }

  .navbar-menu a {
    color: #fff;
  }

  .navbar-menu a.active {
    border-bottom: solid 5px #f80290;
  }
}

.mainSection {
  background-repeat: no-repeat;
  background-image: url('~assets/Master-stitching-faded.png');
  background-position: right;
}

.main-content {
  min-height: inherit;
}

@media (min-width: 768px) {
  .navbar {
    background-repeat: no-repeat;
    background-image: url('~assets/Master-stitching-faded.png');
    background-position: left;

    .navbar-brand {
      .logo {
        margin: 0;
      }
    }
  }

  .mainSection {
    background: none;
  }
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

  p {
    padding-top: 10px;
  }
}
</style>
