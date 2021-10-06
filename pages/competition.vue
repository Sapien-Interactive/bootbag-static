<template>
  <div>
    <section class="main-content columns article">
      <section class="section terms">
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
</style>
