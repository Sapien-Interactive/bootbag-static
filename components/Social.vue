<template>
  <section class="main-content columns social">
    <aside class="column is-3 section">
      <p>Follow Us</p>
      <a href="https://www.facebook.com/bootbag" target="_blank">
        <img src="~/assets/images/facebook@2x.png"
      /></a>

      <a href="https://twitter.com/bootbag2" target="_blank"
        ><img src="~/assets/images/twitter@2x.png"
      /></a>
      <a href="https://twitter.com/bootbag2" target="_blank"
        ><img src="~/assets/images/instagram@2x.png"
      /></a>
      <a href="https://twitter.com/bootbag2" target="_blank"
        ><img src="~/assets/images/youtube@2x.png"
      /></a>
    </aside>
    <aside class="column is-9 section download">
      <a href="#"
        ><img src="~/assets/images/Btn_AppStore@2x.png" class="socialImg"
      /></a>
      <a href="#"
        ><img src="~/assets/images/BtnGooglePlay@2x.png" class="socialImg"
      /></a>
    </aside>
  </section>
</template>

<script>
export default {
  name: 'Social'
}
</script>

<style lang="scss" scoped>
.social {
  border-top: solid 1px #242424;
  padding: 0px 0px;

  p {
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  a {
    margin-right: 10px;

    img {
      width: 40px;
    }

    img.socialImg {
      width: 150px;
      margin-top: 25px;
    }
  }
}
</style>
