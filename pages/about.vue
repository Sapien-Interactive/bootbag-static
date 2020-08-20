<template>
  <div>
    <section class="main-content columns">
      <section class="section">
        <div>
          <h1>About</h1>

          Bootbag was formed out of a passion for live Football and the fans
          that make it. Our love for Football, blended with the romance that it
          provides has driven us to build Bootbag; a place fans can truly put
          their football knowledge and inner geek to unearth talent before their
          friends and other Bootbag scouts. We’re proud to make Bootbag the
          first real-life scouting game and we hope you enjoy the fun of pitting
          your knowledge against other fans.
          <br /><br />

          As fans ourselves we hope you like our game, and gain yourself some
          bragging rights amongst your friends in the process!

          <br /><br />
          <img src="../assets/images/stamp.png" class="stamp" /><br /><br />
          Bootbag Team
        </div>
      </section>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  name: 'About',
  components: {
    Footer
  }
}
</script>
