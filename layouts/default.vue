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
      <a @click="isOpen = !isOpen" href="/">Home</a>
      <a @click="isOpen = !isOpen" href="https://shop.bootbag.co">Shop</a>
      <a @click="isOpen = !isOpen" href="/about">About</a>
      <a @click="isOpen = !isOpen" href="/contact">Contact</a>
      <a @click="isOpen = !isOpen" href="/terms">Terms</a>
    </div>
    <nuxt />
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

body {
  background-color: #000000 !important;
}

.navbar {
  background-color: #000000;
  background-repeat: no-repeat;
  background-position: left;

  .navbar-brand {
    width: 100%;
    padding-top: 10px;

    .logoWrapper {
      padding-left: 52px;
      text-align: center;
      width: 100%;

      .logo {
        width: 60px !important;
        padding: 10px;
      }
    }
  }

  .navbar-burger {
    color: #ffffff;
  }
}

.navbar-burger {
  display: block;
}

.main-content {
  min-height: inherit;
}

.main-menu {
  background-color: #000000;
  position: absolute;
  top: 52px;
  width: 100%;
  text-align: center;
  font-size: 20px;
  height: 95vh;
  padding-top: 50px;
  display: none;
  z-index: 9999;

  a {
    display: block;
    width: 100%;
    text-align: center;
    padding: 10px 0;
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
}

.coming-soon {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 20px;

  h1 {
    width: 100%;
    text-align: center;
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
  margin: 20px 0 40px 0;

  .ticket {
    background-color: #242323;
    margin: 20px 0 40px 0;
    padding: 10px 0 0 0;
    border-radius: 5px;

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
  }

  .ticketWrapper {
    .ticket {
      margin: 20px 20px;
    }
  }

  .coming-soon {
    h1 {
      width: 100%;
    }
  }
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
}
</style>
