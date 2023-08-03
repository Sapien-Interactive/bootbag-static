<template>
  <div class="how-to-play">
    <h1>How To Play</h1>
    <div class="phone">
      <iframe
        src="https://player.vimeo.com/video/851240541?color=ff0086&title=0&byline=0&portrait=1&playsinline=false"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        width="250"
      />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  name: 'HowToPlay',
  components: {
    Footer
  },
  data() {
    return {
      isPlaying: false
    }
  }
}
</script>

<style lang="scss">
.how-to-play {
  h1 {
    display: none;
    font-weight: bold;
    font-size: 24px;
    line-height: 1.2em;
    text-transform: uppercase;
    text-align: center;
    margin-top: 24px;
    margin-bottom: 48px;

    @media only screen and (min-width: 560px) {
      display: block;
    }
  }

  .phone {
    display: flex;
    justify-content: center;
    height: 550px;
    background-image: url('../assets/images/phone.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 24px auto 64px;
  }
}
</style>
