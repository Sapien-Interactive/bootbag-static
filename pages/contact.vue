<template>
  <div class="contact">
    <section class="main-content">
      <section class="section contactContent">
        <h1>Contact</h1>
        <p class="email">
          <a href="mailto:info@bootbag.co">info@bootbag.co</a>
        </p>
        <p class="muted">
          <strong>Sapien Interactive Limited</strong><br />
          T/A Bootbag<br />New Derwent House<br />69-73 Theobolds Road<br />London,
          WC1X 8TA<br />United Kingdom
        </p>
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

<style lang="scss">
.contact {
  height: 100vh;
  background-image: url('../assets/images/map-uk-contact-us@2x.png');
  background-repeat: no-repeat;
  background-position: right 100px;
  background-size: 100%;
}

.contactLogo {
  width: 100%;
  text-align: center;

  img {
    width: 250px;
  }
}

.contactContent {
  h1,
  p {
    text-align: center;
  }
}

.email {
  font-weight: bold;
  margin-bottom: 10px;
}

@media only screen and (min-width: 560px) {
  .contact {
    background-size: 70%;
  }

  .contactContent {
    h1,
    p {
      text-align: left;
    }
  }
}
</style>
