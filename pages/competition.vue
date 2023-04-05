<template>
  <div>
    <section class="main-content columns article">
      <section class="section terms">
        <div class="mother-goose">
          <a href="#general" class="goose">General</a>
          <a href="#alisha" class="goose">Alisha</a>
          <a href="#minigames" class="goose">Mini Games</a>
        </div>

        <CompetitionText />
      </section>
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import CompetitionText from '~/components/CompetitionText'
export default {
  name: 'Competition',
  components: {
    Footer,
    CompetitionText
  }
}
</script>
<style lang="scss">
.terms {
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

.mother-goose {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}

.goose {
  //background-color: $background-dark;
  width: 100%;
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
}

a:hover,
a:focus {
  color: $brand-pink;
  text-decoration: underline;
}

a {
  display: block;
  width: 100%;
  text-align: center;

  &.nuxt-link-active {
    color: $brand-pink;
  }
}
</style>
