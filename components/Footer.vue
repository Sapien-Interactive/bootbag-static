<template>
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
              <li>
                <router-link to="/">Home</router-link>
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
              <li>
                <router-link to="/privacyPolicy">Privacy Policy</router-link>
              </li>
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
