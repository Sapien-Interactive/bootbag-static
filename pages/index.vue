<template>
  <div class="main">
    <section class="main-content">
      <div class="container is-12 aspect-ratio-box">
        <client-only>
          <vueVimeoPlayer
            :autoplay="true"
            :loop="true"
            video-id="456135341"
            allowfullscreen
          />
        </client-only>
      </div>
      <div class="container is-12 homePageWrapper">
        <section class="section">
          <div class="coming-soon">
            <h2>
              Register To Become A Scout.
            </h2>
          </div>
          <div class="coming-soon">
            <div v-if="!sending && success">
              <p>
                You have Successfully Registered for Bootbag, keep an eye on
                your emails for more details!
              </p>
            </div>
            <form v-else @submit.prevent="sendEmail">
              <div class="columns">
                <div class="column is-two-thirds">
                  <input
                    v-model="email"
                    type="email"
                    class="column"
                    placeholder="Email Address"
                  />
                </div>
                <div class="column">
                  <button
                    :disabled="sending"
                    type="submit"
                    class="column button"
                  >
                    <img v-if="sending" src="~/assets/spinner.svg" />
                    <span v-else="!sending">Register Now</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="coming-soon">
            <h1 class="strapline">
              The ultimate platform for fans to scout and transfer football
              players, users benefit from their performance with the chance of
              real financial reward.
            </h1>
          </div>
          <div class="columns has-text-centered ticketWrapper">
            <div class="column ticket">
              <img src="~/assets/images/Search-player-icon@2x.png" />

              <p class="text">
                Football's very first,<br /><strong
                  >real-time<br />scouting game.</strong
                >
              </p>
              <img src="../assets/images/ticket-left.png" class="ticketLeft" />
              <img
                src="../assets/images/ticket-right.png"
                class="ticketRight"
              />
              <p class="bottom">
                18 Million UK Football Fans
              </p>
            </div>
            <div class="column ticket">
              <img src="~/assets/images/Pick-Roster-icon@2x.png" />
              <p class="text">
                Choose from over
                <strong>7500<br />players from<br />across the world.</strong>
              </p>
              <img src="../assets/images/ticket-left.png" class="ticketLeft" />
              <img
                src="../assets/images/ticket-right.png"
                class="ticketRight"
              />
              <p class="bottom">3.5 Billion Global Football Fans*</p>
            </div>
            <div class="column ticket">
              <img src="~/assets/images/Watch-Match-Vision-icon@2x.png" />
              <p class="text">
                Watch the action.<br />Find the players,<br /><strong
                  >Beat the competition.</strong
                >
              </p>
              <img src="../assets/images/ticket-left.png" class="ticketLeft" />
              <img
                src="../assets/images/ticket-right.png"
                class="ticketRight"
              />
              <p class="bottom">Compete To Be The Best</p>
            </div>
          </div>
        </section>
      </div>
      <SignUp />
      <Footer />
      <FixedFooter />
    </section>
  </div>
</template>

<script>
import { vueVimeoPlayer } from 'vue-vimeo-player'
import Footer from '~/components/Footer'
import FixedFooter from '~/components/FixedFooter'
import SignUp from '~/components/SignUp'
import { UserService } from '~/services'

export default {
  name: 'HomePage',
  components: {
    FixedFooter,
    Footer,
    SignUp,
    vueVimeoPlayer
  },

  data() {
    return {
      sending: false,
      success: false,
      email: ''
    }
  },

  methods: {
    async sendEmail() {
      if (this.email.trim() !== '') {
        this.sending = true

        try {
          const res = await UserService.register(this.email)

          this.sending = false

          this.success = res.status === 200
          this.email = ''
        } catch (error) {
          this.success = false
        } finally {
          this.sending = false
        }
      }
    }
  }
}
</script>

<style lang="scss">
iframe {
  width: 100%;
  height: 45vh;
  position: absolute;
  top: 0;
  left: 0;
}

.homePageWrapper {
  .section {
    //padding: 0 1.5rem 3rem 1.5rem;
  }
}

.homeWrapper {
  margin-top: 30vh;
}

.button {
  text-transform: uppercase;
}

.button {
  cursor: pointer;
}

.aspect-ratio-box::before {
  content: '';
  width: 1px;
  margin-left: -1px;
  float: left;
  height: 0;
  padding-top: 70%;
}

.aspect-ratio-box::after {
  content: '';
  display: table;
  clear: both;
}

.yellowSection {
  display: none;
}

@media only screen and (min-width: 560px) {
  iframe {
    height: 90%;
  }

  .homeWrapper {
    margin-top: 80vh;
  }

  .strapline {
    width: 60% !important;
    display: block;
  }

  .aspect-ratio-box::before {
    content: '';
    width: 1px;
    margin-left: -1px;
    float: left;
    height: 0;
    padding-top: 30%; //591.44px / 1127.34px * 100%;
  }

  .yellowSection {
    display: block;
  }
}
</style>
