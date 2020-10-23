<template>
  <div :class="cls" class="fixed">
    <ul>
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
    </ul>
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
    display: inline-block;
    width: 100%;
    margin: 0;
    padding: 0;

    li {
      display: inline-block;
      width: 19%;
      margin: 0;
      padding: 0;

      a {
        display: inline-block;
        width: 100%;
        text-align: center;
        background-color: #3e3c3c;
        color: #848282;
        padding: 5px;
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
