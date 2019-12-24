<template>
  <div class="app">
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <Logo />
        </a>

        <div class="navbar-burger">
          <span />
          <span />
          <span />
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
        <ul class="column is-8 section links">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </section>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  },

  data() {
    return {
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

.main-content {
  min-height: inherit;
}

.links {
  text-align: right;

  li {
    display: inline-flex;
    margin-right: 1rem;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
