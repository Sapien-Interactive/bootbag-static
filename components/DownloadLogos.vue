<template>
  <section class="container">
    <div>
      <h1 class="header">Download Bootbag now</h1>
    </div>
    <div class="logos-container">
      <a
        href="https://apps.apple.com/us/app/bootbag/id1492795782"
        target="_blank"
      >
        <img
          src="~/assets/appleStoreLogo.svg"
          alt="App Store Logo"
          class="apple"
        />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.bootbagltd.bootbag"
        target="_blank"
      >
        <img
          src="~/assets/images/Google-Play.png"
          class="google"
          alt="Google Play Logo"
        />
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'DownloadLogos'
}
</script>

<style lang="scss">
.logos-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.apple {
  height: 71px;
  margin-bottom: -10px;
}

.container {
  padding: 20px 40px 0;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.header {
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 24px;
}

.google {
  height: 75px;
}

@media only screen and (min-width: 560px) {
  .logos-container {
    display: flex;
    align-items: center;
    flex-direction: row;
  }

  .apple {
    height: 63px;
    margin: 0;
  }
}
</style>
