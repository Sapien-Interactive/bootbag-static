<template>
  <div class="main">
    <iframe src="https://shop.bootbag.co/products/bootbag-shirt"></iframe>
    <section class="main-content homeWrapper">
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
export default {
  name: 'Shirt',
  components: {
    Footer
  }
}
</script>

<style lang="scss">
iframe {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

.homeWrapper {
  margin-top: 30vh;
}

.button {
  text-transform: uppercase;
}

@media only screen and (min-width: 560px) {
  .homeWrapper {
    margin-top: 100vh;
  }
}
</style>
