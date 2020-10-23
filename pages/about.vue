<template>
  <div>
    <section class="main-content columns">
      <section class="section about">
        <div>
          <h1>About</h1>

          Bootbag has been designed by Sapien Interactive; combining a passion
          for football with a desire to bring a new real-time fantasy concept to
          the world. It has been our intention to create a platform that
          celebrates both the men’s and women’s professional game, and a belief
          that players from the lower leagues of the football pyramid are as
          crucial as the well known players. Football is a universal language,
          and we hope that Bootbag helps translate your enthusiasm and skill for
          finding players via a winning roster into something that enhances your
          experience as a football fan.
          <br /><br />
          <img src="../assets/images/stamp.png" class="stamp" /><br /><br />
          Bootbag Team
        </div>
      </section>
    </section>
    <Footer />
    <FixedFooter />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import FixedFooter from '~/components/FixedFooter'
export default {
  name: 'About',
  components: {
    Footer,
    FixedFooter
  }
}
</script>

<style lang="scss">
.about {
  padding: 3rem 40px;

  h1,
  p {
    text-align: left;
  }

  p {
    text-transform: none;
    margin-bottom: 20px;
  }
}
</style>
