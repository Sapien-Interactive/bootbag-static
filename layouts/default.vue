<template>
  <div class="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <div class="logoWrapper">
          <a href="/"><LogoSmall class="logo"/></a>
        </div>
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
      <ul>
        <li>
          <nuxt-link @click.native="isOpen = !isOpen" to="/about"
            >About</nuxt-link
          >
        </li>
        <li>
          <nuxt-link @click.native="isOpen = !isOpen" to="/contact"
            >Contact</nuxt-link
          >
        </li>
        <li>
          <a
            href="https://shop.bootbag.co/products/bootbag-shirt"
            target="_blank"
            >Shop</a
          >
        </li>
      </ul>
      <!-- <a
        @click="isOpen = !isOpen"
        href="http://shop.bootbag.co/cart"
        target="_blank"
        >Basket</a
      > -->

      <!-- <a @click="isOpen = !isOpen" href="/terms">Terms</a>
      <a @click="isOpen = !isOpen" href="/delivery-costs">Delivery Costs</a>
      <a @click="isOpen = !isOpen" href="/returns-refunds">Refunds & Returns</a> -->
    </div>
    <nuxt />
    <cookie-law theme="dark-lime"></cookie-law>
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
      isOpen: false
    }
  },
  head() {
    return {
      title: "Bootbag - Football's Premier Scouting Game",
      meta: [
        {
          name: 'description',
          content: "Bootbag - Football's Premier Scouting Game"
        },
        {
          name: 'og:description',
          content: "Bootbag - Football's Premier Scouting Game"
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
p,
button,
input,
body {
  font-family: 'Rajdhani';
  font-display: 'swap';
}

html,
body {
  background-color: #000000;
}

.navbar {
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: left;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .navbar-brand {
    width: 100%;
    padding-top: 10px;
    display: block;

    .logoWrapper {
      padding-left: 0px;
      text-align: center;
      width: 100%;

      // .logo {
      //   // margin-left: 1rem;
      // }
    }
  }

  .navbar-burger {
    position: absolute;
    top: 10px;
    right: 0px;
    color: #ffffff;

    span {
      width: 24px;

      &:nth-child(1) {
        top: calc(50% - 8px);
      }

      &:nth-child(3) {
        top: calc(50% + 6px);
      }
    }

    &.is-active {
      span {
        &:nth-child(1) {
          top: calc(50% - 7px);
        }

        &:nth-child(3) {
          top: calc(50% + 3px);
        }
      }
    }
  }
}

.navbar-burger {
  // display: none;
}

.main-content {
  min-height: inherit;
}

.article {
  width: 100%;
  margin: 0 auto;
  padding: 100px 10px;
}

.main-menu {
  background-color: black;
  position: fixed;
  top: 62px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  height: 95vh;
  padding-top: 50px;
  display: none;
  z-index: 9999;

  ul {
    li {
      text-transform: uppercase;
      font-weight: bold;
      font-size: 18px;
      padding-top: 10px;

      a:hover {
        color: #8d8a8a;
      }
    }
  }

  a {
    display: block;
    width: 100%;
    text-align: center;

    &.nuxt-link-active {
      color: #267efc;
    }
  }
}

.main-menu.is-active {
  display: block;
}

.section {
  h1 {
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
  }

  .stamp {
    width: 100px;
  }
}

.section {
  h1 {
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
  }

  .muted strong,
  .muted {
    color: #fff;
  }
}

.social {
  border-top: solid 1px #242424;
  padding: 40px 10px;
}

.main {
  width: 100%;
  padding-top: 0px;
}

.coming-soon {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 20px;

  &.mobile {
    margin-bottom: 2em;
  }

  form {
    margin: 0 0 10px 0;
  }

  h1 {
    width: 100%;
    text-align: center;
  }

  h2 {
    font-size: 24px;
  }

  .strapline {
    width: 100%;
    display: block;
  }
}

p,
h2,
h1 {
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
}

h1 {
  margin-bottom: 30px;
}

h2 {
  font-weight: bold;
}

p.blue {
  color: #0eb4a7;
}

hr {
  background-color: #0eb4a7;
  height: 1px;
  width: 200px;
}

form {
  width: 100%;

  column {
    padding: 0;
  }

  input[type='email'] {
    width: 100%;
    padding: 10px;
    border: solid 1px #ffffff;
    background-color: #ffffff;
    color: #333333;
    font-size: 18px;
    display: inline-block;
    margin-bottom: 0;
  }

  button[type='submit'] {
    font-size: 18px;
    background-color: #267efc;
    border: solid 1px #267efc;
    padding: 10px 0;
    color: #ffffff;
    display: inline-block;
    margin-bottom: 0;
    width: 100%;
    font-weight: bold;

    img {
      max-height: 17px;
    }
  }
}

.download {
  img {
    width: 49%;
    display: inline-block;
  }
}

.pink {
  color: #f80290;
}

.ticketWrapper {
  margin: 60px 0 40px 0;

  .ticket {
    background-color: #242323;
    margin: 20px 0 60px 0;
    padding: 10px 0 0 0;
    border-radius: 5px;

    &:last-child {
      margin-bottom: 20px;
    }

    p {
      margin: 0;
      padding: 10px;
      text-align: center;
    }

    img {
      width: 60px;
      margin-top: -60px;
    }

    img.ticketLeft,
    img.ticketRight {
      position: relative;
      float: left;
      width: 20px !important;
      margin-top: -90px;
    }

    img.ticketRight {
      float: right;
    }

    .text {
      height: 120px;
      color: #fff;

      strong {
        color: #fff;
      }
    }

    .seperator {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .bottom {
      font-size: 16px;
      margin: 0;
      text-transform: uppercase;
      background-color: #535353;
      padding: 10px 0;
      background-image: url('../assets/images/Group 1444@2x.png');
      background-repeat: no-repeat;
      background-position: top;
      background-size: 100%;
    }
  }
}

@media only screen and (min-width: 560px) {
  p,
  h2,
  h1 {
    text-align: left;
  }

  form {
    width: 75%;
    margin-bottom: 40px;
  }

  .ticketWrapper {
    .ticket {
      margin: 20px 20px;

      p {
        padding: 10px;
      }
    }
  }

  .coming-soon {
    h1 {
      width: 80%;
    }

    .strapline {
      width: 60% !important;
      display: block;
    }
  }
}

#vimeo-player-1 {
  margin-top: -60px;
}

@media only screen and (min-width: 768px) {
  form {
    width: 50%;
  }

  input[type='email'] {
    margin-bottom: 20px;
  }

  button[type='submit'] {
    margin-bottom: 20px;
  }

  #vimeo-player-1 {
    margin-top: 0px;
  }

  .navbar {
    position: absolute;
    padding: 20px;
  }

  .navbar-burger {
    display: none;
  }

  .article {
    width: 60%;
    margin: 0 auto;
    padding-top: 100px;
  }

  .main-menu {
    position: fixed;
    top: 10px;
    right: 30px;
    padding: 0;
    display: block;
    width: auto;
    height: auto;
    background-color: transparent;

    ul {
      li {
        display: inline-block;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 18px;
        margin-left: 20px;
        padding-top: 10px;

        a:hover {
          color: #8d8a8a;
        }
      }
    }
  }
}
</style>
