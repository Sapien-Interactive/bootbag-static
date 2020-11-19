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
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
          </div>
          <div class="column is-4">
            <p><strong>Shop</strong></p>
            <ul>
              <li>
                <a
                  href="https://shop.bootbag.co/products/bootbag-shirt"
                  target="_blank"
                  >Alisha Lehmann Bootbag Shirt</a
                >
              </li>
              <li>
                <a href="http://shop.bootbag.co/cart">Basket</a>
              </li>
              <li>
                <router-link to="/delivery-costs">Delivery Costs</router-link>
              </li>
              <li>
                <router-link to="/shop-policy">Shop Policy</router-link>
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
      <aside class="column is-12 legal">
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
  },
  props: {
    showGlobe: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss">
footer {
  font-size: 14px;
  background-image: url('../assets/images/Map@2x.png');
  background-repeat: no-repeat;
  background-position: top right;
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
