<template>
  <div class="main">
    <iframe
      src="https://player.vimeo.com/video/456135341?autoplay=true&loop=true"
      frameborder="0"
      allow="autoplay; fullscreen; loop"
      allowfullscreen
    ></iframe>
    <section class="main-content homeWrapper">
      <div class="container is-12 homePageWrapper">
        <section class="section">
          <div class="coming-soon">
            <h1>
              The ultimate platform for fans to scout and transfer football
              players, allowing users to benefit from their performance with the
              chance of financial rewards.
            </h1>
          </div>
          <div class="columns has-text-centered ticketWrapper">
            <div class="column ticket">
              <img src="~/assets/images/Search-player-icon@2x.png" />

              <p class="text">
                Football's very first,<br /><strong
                  ><br />real-time scouting game.</strong
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
        </section>
      </div>
      <SignUp />
      <Footer />
    </section>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import SignUp from '~/components/SignUp'
export default {
  name: 'HomePage',
  components: {
    Footer,
    SignUp
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
      this.sending = true

      try {
        const response = await fetch(`${window.location.origin}/api/register`, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrer: 'no-referrer',
          body: JSON.stringify({
            email: this.email
          })
        })

        await response.json()

        this.success = response.status === 200
      } catch (error) {
        this.success = false
      } finally {
        this.sending = false
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
    padding: 0 1.5rem 3rem 1.5rem;
  }
}

.homeWrapper {
  margin-top: 30vh;
}

.button {
  text-transform: uppercase;
}

@media only screen and (min-width: 560px) {
  iframe {
    height: 100%;
  }

  .homeWrapper {
    margin-top: 100vh;
  }
}
</style>
