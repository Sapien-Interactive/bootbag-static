<template>
  <div :class="cls" class="fixed">
    <ul>
      <li><nuxt-link to="/" class="tab-watch">Watch</nuxt-link></li>
      <li class="hide">
        <a
          class="tab-shop"
          href="https://shop.bootbag.co/products/bootbag-shirt"
          target="_blank"
          >Shop</a
        >
      </li>
      <li><nuxt-link class="tab-info" to="/about">About</nuxt-link></li>
      <li><nuxt-link to="/" class="tab-user">Sign up</nuxt-link></li>
      <li><nuxt-link to="/terms" class="tab-terms">T&Cs</nuxt-link></li>
    </ul>
    <!-- <ul>
      <li>
        <a href="/"
          ><img src="~/assets/images/footer-watch.png" /><br />Watch</a
        >
      </li>
      <li>
        <a href="https://shop.bootbag.co/products/bootbag-shirt"
          ><img src="~/assets/images/footer-shirt.png" /><br />Shop</a
        >
      </li>
      <li>
        <a href="/terms"
          ><img src="~/assets/images/footer-tac.png" /><br />T&C's</a
        >
      </li>
      <li>
        <a href="/about"
          ><img src="~/assets/images/footer-i.png" /><br />About</a
        >
      </li>
      <li>
        <a href="/"
          ><img src="~/assets/images/footer-signup.png" /><br />Sign Up</a
        >
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false
    }
  },
  computed: {
    cls() {
      return {
        'is-visible': this.scrolled
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50
    }
  }
}
</script>

<style lang="scss">
.hide {
  display: none;
}

.fixed {
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 0;
  background-color: #3e3c3c;

  transform: translateY(100%);
  transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1); /* easeOutQuint */

  &.is-visible {
    transform: translateY(0);
  }

  ul {
    list-style: none;
    display: flex;
    width: 100%;
    margin: 0;
    padding: 0;

    li {
      box-sizing: border-box;
      width: 20%;
      margin: 0;
      padding: 12px 0 8px;

      a {
        box-sizing: border-box;
        display: inline-block;
        width: 100%;
        padding-top: 35px;
        text-align: center;
        font-weight: bold;
        color: white;
        background-position: top center;
        background-size: auto 30px;
        background-repeat: no-repeat;
        font-size: 14px;

        opacity: 0.3;

        // &.nuxt-link-exact-active {
        //   opacity: 1;
        // }

        &.tab-info {
          background-image: url(/tabs/info@3x.png);
          background-size: auto 27px;
        }

        &.tab-watch {
          background-image: url(/tabs/watch@3x.png);
        }

        &.tab-shop {
          background-image: url(/tabs/roster@3x.png);
        }

        &.tab-user {
          background-image: url(/tabs/user@3x.png);
        }

        &.tab-terms {
          background-image: url(/tabs/terms@3x.png);

          background-size: auto 25px;
        }
      }

      a:hover {
        color: #ffffff;
      }
    }
  }
}

@media only screen and (min-width: 560px) {
  .fixed {
    display: none;
  }
}
</style>
