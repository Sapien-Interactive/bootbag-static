<template>
  <div class="contact">
    <section class="main-content">
      <section class="section contactLogo">
        <img src="~/assets/bootbag.svg" />
        <p>football's premier scouting game</p>
      </section>
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
  height: 100%;
  background-image: url('../assets/images/map-uk-contact-us@2x.png');
  background-repeat: no-repeat;
  background-position: right 120px;
  background-size: 90%;
}

.contactLogo {
  width: 100%;
  text-align: center;
  padding-top: 60px;
  padding-bottom: 30px;

  img {
    width: 150px;
  }

  p {
    width: 100%;
    text-align: center;
    text-transform: none;
    color: #d4af37;
    font-size: 14px;
    font-weight: bold;
  }
}

.contactContent {
  h1,
  p {
    text-align: center;
    margin-bottom: 10px;
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
