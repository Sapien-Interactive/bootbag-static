<template>
  <footer>
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
                <router-link to="https://shop.bootbag.co">Shop</router-link>
              </li>
              <li>
                <router-link to="/about">About</router-link>
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
            </ul>
          </div>
        </div>
      </aside>
    </section>
    <Social />
    <section class="main-content columns">
      <aside class="column is-12 section">
        Sapien Interactive &copy; 2020
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
  }
}
</script>

<style lang="scss">
footer {
  font-size: 14px;
  background-image: url('../assets/images/Map@2x.png');
  background-repeat: no-repeat;
  background-position: top right;
  padding: 100px 40px 40px 40px;
  background-size: 50%;

  .logoWrapper {
    vertical-align: top;
    text-align: center;
  }

  .strapline {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
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
}

@media only screen and (min-width: 560px) {
  footer {
    padding: 100px 40px;
  }

  .footerNav {
    p {
      margin: 55px 0 30px 0;
    }
  }

  footer {
    .logoWrapper {
      text-align: left;
    }
  }
}
</style>
