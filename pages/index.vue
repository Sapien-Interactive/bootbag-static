<template>
  <div class="main">
    <section class="main-content">
      <div class="container is-12">
        <section class="videoPlaceholder">
          VIDEO GOES HERE
        </section>
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
                  >real-time scouting game.</strong
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
                <strong>2600<br />players from across the world.</strong>
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
            <form v-else @submit.prevent="sendEmail" class="container">
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
                  <button :disabled="sending" type="submit" class="column">
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
<style lang="scss" scoped>
@font-face {
  font-family: 'Rajdhani-Regular';
  src: url('../assets/fonts/Rajdhani-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.videoPlaceholder {
  height: 60vh;
  text-align: center;
}

.main {
  width: 100%;
}

.coming-soon {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  margin-top: 20px;

  h1 {
    width: 70%;
  }
}

p,
h2,
h1 {
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  font-family: 'Rajdhani-Regular';
}

h1 {
  margin-bottom: 30px;
}

h2 {
  font-weight: bold;
}

p.blue {
  color: #0eb4a7;
}

hr {
  background-color: #0eb4a7;
  height: 1px;
  width: 200px;
}

form {
  width: 100%;

  column {
    padding: 0;
  }

  input[type='email'] {
    width: 100%;
    padding: 10px;
    border: solid 1px #ffffff;
    background-color: #ffffff;
    color: #333333;
    font-size: 18px;
    display: inline-block;
    margin-bottom: 0;
  }

  button[type='submit'] {
    font-size: 18px;
    background-color: #267efc;
    border: solid 1px #267efc;
    padding: 10px 20px;
    color: #ffffff;
    display: inline-block;
    margin-bottom: 0;
    width: 100%;

    img {
      max-height: 17px;
    }
  }
}

.download {
  img {
    width: 49%;
    display: inline-block;
  }
}

.pink {
  color: #f80290;
}

.ticketWrapper {
  margin: 20px 0 40px 0;

  .ticket {
    background-color: #242323;
    margin: 20px 0px 40px 0px;
    padding: 10px 0 0 0;
    border-radius: 5px;

    p {
      margin: 0;
      padding: 10px 0;
    }

    img {
      width: 60px;
      margin-top: -60px;
    }

    img.ticketLeft,
    img.ticketRight {
      position: relative;
      float: left;
      width: 20px !important;
      margin-top: -90px;
    }

    img.ticketRight {
      float: right;
    }

    .text {
      height: 120px;
      color: #fff;

      strong {
        color: #fff;
      }
    }

    .seperator {
      width: 100%;
      margin: 0;
      padding: 0;
    }

    .bottom {
      margin: 0;
      text-transform: uppercase;
      background-color: #535353;
      padding: 10px 0;
      background-image: url('../assets/images/Group 1444@2x.png');
      background-repeat: no-repeat;
      background-position: top;
      background-size: 100%;
    }
  }
}

@media only screen and (min-width: 560px) {
  form {
    width: 75%;
  }

  .ticketWrapper {
    .ticket {
      margin: 20px 20px;
    }
  }
}

@media only screen and (min-width: 768px) {
  form {
    width: 50%;
  }

  input[type='email'] {
    margin-bottom: 20px;
  }

  button[type='submit'] {
    margin-bottom: 20px;
  }
}
</style>
