<template>
  <div>
    <section class="main-content columns article">
      <section class="section terms">
        <TermsText />
      </section>
    </section>
    <Footer />
    <FixedFooter />
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import FixedFooter from '~/components/FixedFooter'
import TermsText from '~/components/TermsText'
export default {
  name: 'Terms',
  components: {
    Footer,
    FixedFooter,
    TermsText
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
