<template>
  <footer :class="showGlobe ? null : 'no-globe'">
    <section class="main-content columns">
      <aside class="column is-4 logoWrapper">
        <LogoSmall class="logo" />
        <p class="strapline">football's premier scouting game</p>
      </aside>
      <aside class="column is-8">
        <div class="columns is-mobile footerNav">
          <div class="column is-4">
            <p><strong>About</strong></p>
            <ul>
              <li>
                <router-link to="/about">About</router-link>
              </li>
              <li>
                <router-link to="/how-to-play">How To Play</router-link>
              </li>
              <li>
                <router-link to="/how-to-scout">How To Scout</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
          <div class="column is-4">
            <p><strong>Legal</strong></p>
            <ul>
              <li>
                <router-link to="/terms">Terms</router-link>
              </li>
              <li>
                <router-link to="/competition">Competition</router-link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </section>
    <Social />
    <section class="main-content columns">
      <aside class="column is-12 legal">
        Sapien Interactive &copy; {{ year }}
      </aside>
    </section>
  </footer>
</template>
<script>
import LogoSmall from '~/components/LogoSmall'
import Social from '~/components/Social'
export default {
  name: 'Footer',
  components: {
    LogoSmall,
    Social
  },
  props: {
    showGlobe: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
footer {
  font-size: 14px;
  background-image: url('../assets/images/Map@2x.png');
  background-repeat: no-repeat;
  background-position: top center;
  padding: 0px 40px 100px 40px;
  background-size: 50%;

  &.no-globe {
    background-image: none;
  }

  .logoWrapper {
    vertical-align: top;
    text-align: center;
    padding-bottom: 60px;
  }

  .strapline {
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    text-transform: none;
  }

  .columns.is-mobile {
    display: block;

    > div {
      width: 100% !important;
      padding-left: 0px;
    }
  }

  .footerNav {
    p {
      font-size: 18px;
      color: #fff;
      text-transform: uppercase;
      margin: 0;
      text-align: left;

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

        a:hover {
          color: #ffffff;
        }
      }
    }
  }

  .legal {
    text-align: center;
  }
}

@media only screen and (min-width: 560px) {
  .footerNav {
    p {
      margin: 55px 0 30px 0;
    }
  }

  footer {
    background-position: top right;
    padding: 100px 40px 40px 40px;
    padding-bottom: 0;

    .columns.is-mobile {
      display: flex;

      > div {
        width: 33.33% !important;
        padding-left: 0.75rem;
      }
    }

    .logoWrapper {
      text-align: left;
    }

    .legal {
      text-align: left;
    }
  }
}
</style>
