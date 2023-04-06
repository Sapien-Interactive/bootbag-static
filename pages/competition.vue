<template>
  <div>
    <section class="main-content columns article">
      <section class="section terms">
        <div class="tab-wrapper">
          <a
            onClick="setTimeout(()=>{window.location = '#general' }, 500)"
            class="tab"
          >
            General
          </a>
          <a
            onClick="setTimeout(()=>{window.location = '#alisha' }, 500)"
            class="tab"
          >
            Alisha
          </a>
          <a
            onClick="setTimeout(()=>{window.location = '#minigames' }, 500)"
            class="tab"
          >
            Mini Games
          </a>
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
  },
  data() {
    return {
      activeTab: false
    }
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

.tab {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  cursor: pointer;
  color: $white;
  margin-right: 30px;

  &:hover,
  &:focus {
    color: $brand-pink;
    text-decoration: underline;
  }
}

.tab-wrapper {
  display: flex;
  margin-bottom: 20px;
}
</style>
