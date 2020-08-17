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
          <router-link to="/" class="navbar-item is-tab">Home</router-link>
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
      <nuxt />
    </section>

    <footer>
      <section class="main-content columns">
        <aside class="column is-4 logoWrapper">
          <LogoSmall class="logo" />
          <p class="strapline">football's premier scouting game</p>
        </aside>
        <aside class="column is-8">
          <div class="columns footerNav">
            <div class="column is-4">
              <p><strong>About</strong></p>
              <ul>
                <li><a href="#">Product</a></li>
                <li><a href="#">Company</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div class="column is-4">
              <p><strong>Legal</strong></p>
              <ul>
                <li><a href="#">Imprint</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privcay Policy</a></li>
              </ul>
            </div>
            <div class="column is-4">
              <p><strong>Download</strong></p>
              <ul>
                <li><a href="#">App Store</a></li>
                <li><a href="#">Google Play</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </section>
      <section class="main-content columns social">
        <aside class="column is-3 section">
          <p>Follow Us</p>
          <a href="https://www.facebook.com/bootbag" target="_blank">
            <img src="~/assets/facebook.png"
          /></a>

          <a href="https://twitter.com/bootbag2" target="_blank"
            ><img src="~/assets/twitter.png"
          /></a>
          <a href="https://twitter.com/bootbag2" target="_blank"
            ><img src="~/assets/twitter.png"
          /></a>
          <a href="https://twitter.com/bootbag2" target="_blank"
            ><img src="~/assets/twitter.png"
          /></a>
        </aside>
        <aside class="column is-9 section download">
          <a href="#"><img src="~/assets/BtnAppStore.png"/></a>
          <a href="#"><img src="~/assets/BtnGooglePlay.png"/></a>
        </aside>
      </section>
      <section class="main-content columns">
        <aside class="column is-12 section">
          Sapien Interactive &copy; {{ year }}
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
  // background-image: url('~assets/Stitching.png');
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

  .navbar-menu a.nuxt-link-exact-active {
    border-bottom: solid 1px #f80290;
  }
}

.main-content {
  min-height: inherit;
}

footer {
  font-size: 14px;
  background-image: url('../assets/images/Map@2x.png');
  background-repeat: no-repeat;
  background-position: top right;
  padding: 100px 40px;
  background-size: 50%;

  .logoWrapper {
    vertical-align: top;
  }

  .strapline {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }

  .social {
    border-top: solid 1px #242424;

    p {
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 10px;
    }

    a {
      margin-right: 10px;
    }
  }

  .download {
    img {
      width: 150px;
      margin-top: 30px;
    }
  }

  .footerNav {
    p {
      font-size: 18px;
      color: #fff;
      text-transform: uppercase;
      margin: 55px 0 30px 0;

      strong {
        color: #fff;
      }
    }

    ul {
      li {
        a {
          color: #8d8a8a;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
