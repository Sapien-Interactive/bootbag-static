<template>
  <div>
    <section class="main-content columns article">
      <section class="section terms">
        <div class="tab-wrapper">
          <button
            href=" #general"
            :class="[activeTab ? 'tab-active' : '', 'tab tab-active']"
            @click="activeTab = !activeTab"
          >
            General
          </button>
          <button
            href="#alisha"
            :class="[activeTab ? 'tab-active' : '', 'tab']"
            @click="activeTab = !activeTab"
          >
            Alisha
          </button>
          <button
            href="#minigames"
            :class="[activeTab ? 'tab-active' : '', 'tab']"
            @click="activeTab = !activeTab"
          >
            Mini Games
          </button>
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

.tab {
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  padding: 10px 20px;
  text-decoration: none;
  // margin: 4px 100px;
  cursor: pointer;
  border-radius: 28px;
  border: 2px solid transparent;

  &:hover,
  &:focus {
    color: $brand-pink;
    border: 2px solid $brand-pink;
  }
}

.tab-active {
  background-color: $brand-pink;
  border: 2px solid $brand-pink;

  &:hover,
  &:focus {
    border-color: $white;
    border: 2px solid $white;
    color: $white;
  }
}

.tab-wrapper {
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
}
</style>
