<template>
  <div>
    <section class="main-content columns article">
      <section class="section about">
        <div>
          <h1>About</h1>

          <p>
            Bootbag was formed out of a passion for live Football and the fans
            that make it. Our love for Football, blended with the romance that
            it provides has driven us to build Bootbag; a place fans can truly
            put their football knowledge and inner geek to unearth talent before
            their friends and other Bootbag scouts. We’re proud to make Bootbag
            the first real-life scouting game and we hope you enjoy the fun of
            pitting your knowledge against other fans.
          </p>
          <h4>
            <img
              src="../assets/images/stamp.png"
              class="stamp"
              alt=""
            /><br />Bootbag Team
          </h4>
        </div>
      </section>
    </section>
    <SignUp />
    <Footer />
    <FixedFooter />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import SignUp from '~/components/SignUp'
import FixedFooter from '~/components/FixedFooter'
export default {
  name: 'About',
  components: {
    Footer,
    FixedFooter,
    SignUp
  }
}
</script>

<style lang="scss">
.about {
  padding: 3rem 40px;

  h1,
  p {
    text-align: left;
    line-height: 1.3em;
  }

  h1 {
    font-weight: bold;
    font-size: 24px;
    line-height: 1.2em;
    text-transform: uppercase;
    text-align: center;
  }

  h4 {
    font-weight: bold;
    font-size: 18px;
    line-height: 1.2em;
    text-transform: uppercase;
    text-align: center;

    img {
      margin-bottom: 0.5em;
    }
  }

  p {
    text-transform: none;
    margin-bottom: 3em;
  }
}
</style>
