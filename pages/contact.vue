<template>
  <div class="contact">
    <section class="main-content">
      <section>
        <p class="contactLogo">
          <img src="../assets/images/contact-logo.png" />
        </p>
      </section>
      <section class="section">
        <div>
          <h1>Contact</h1>
          <p>
            <strong
              ><a href="mailto:info@bootbag.co">info@bootbag.co</a></strong
            >
          </p>
          <p class="muted">
            <strong>Sapien Interactive Limited</strong><br />
            T/A Bootbag<br />New Derwent House<br />69-73 Theobolds Road<br />London,
            WC1X 8TA<br />United Kingdom
          </p>
        </div>
      </section>
    </section>
    <Social />
    <SignUp />
  </div>
</template>

<script>
import Social from '~/components/Social'
import SignUp from '~/components/SignUp'
export default {
  name: 'HomePage',
  components: {
    Social,
    SignUp
  }
}
</script>
