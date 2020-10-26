<template>
  <section class="main-content columns social">
    <aside class="column is-3">
      <p>Follow Us</p>
      <p>
        <a href="https://www.facebook.com/bootbag" target="_blank">
          <img src="~/assets/images/facebook-new@3x.png"
        /></a>

        <a href="https://twitter.com/bootbag2" target="_blank"
          ><img src="~/assets/images/twitter-new@3x.png"
        /></a>
        <a href="https://www.instagram.com/bootbag/" target="_blank"
          ><img src="~/assets/images/instagram-new@3x.png"
        /></a>
      </p>
    </aside>
    <!-- <aside class="column is-9 download">
      <a href="#" class="ios"
        ><img src="~/assets/images/Btn_AppStore@2x.png" class="socialImg"
      /></a>
      <a href="#" class="android"
        ><img src="~/assets/images/BtnGooglePlay@2x.png" class="socialImg"
      /></a>
    </aside> -->
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
  padding: 0;

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

  .ios,
  .android {
    width: 45%;
    display: none;
    margin: 0;
  }

  .ios {
    margin-right: 8%;
  }
}

// .contact {
//   .social {
//     padding: 20px;
//   }
// }

@media only screen and (min-width: 560px) {
  .social {
    .ios,
    .android {
      width: 150px;
      margin: 10px 0 0 0;
    }
  }
}
</style>
