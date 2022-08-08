<template>
  <div>
    <section class="main-content columns article">
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
