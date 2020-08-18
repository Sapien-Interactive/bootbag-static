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

<style lang="scss" scoped>
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

.section {
  h1 {
    font-weight: bold;
    font-size: 20px;
    text-transform: uppercase;
  }

  .muted strong,
  .muted {
    color: #fff;
    font-family: 'Rajdhani-Regular';
  }
}

.social {
  border-top: solid 1px #242424;
  padding: 40px 10px;
}

@media only screen and (min-width: 560px) {
  .contact {
    background-size: 70%;
  }
}
</style>
