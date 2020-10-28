<template>
  <div class="main">
    <div
      :class="isPlaying ? 'is-playing' : null"
      :style="videoStyle"
      class="video"
    >
      <div class="poster">
        <button @click="playVideo">
          <img src="/poster.jpg" alt="Bootbag" />
        </button>
      </div>
      <div v-html="video" class="player" />
      <h1>
        <button @click="playVideo">
          The ultimate platform for fans<br />to scout and transfer players<br /><br /><span
            >Click to find out more.</span
          >
        </button>
      </h1>
    </div>
    <!-- <div class="container is-12 aspect-ratio-box">
        <client-only>
          <vueVimeoPlayer
            :autoplay="true"
            :loop="true"
            video-id="456135341"
            allowfullscreen
          />
        </client-only>
      </div> -->
    <div class="wrap">
      <div class="container is-12 homePageWrapper">
        <section class="section homePageSection">
          <div class="coming-soon mobile">
            <h2><span>Live</span> Register To Become A Scout.</h2>
          </div>
          <div class="coming-soon desktop">
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
                <div class="column mobileForm">
                  <button
                    :disabled="sending"
                    type="submit"
                    class="column button"
                  >
                    <img v-if="sending" src="~/assets/spinner.svg" />
                    <span v-else>Register Now</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- <div class="coming-soon">
            <h1 class="strapline">
              The ultimate platform for fans to scout and transfer football
              players, users benefit from their performance with the chance of
              real financial reward.
            </h1>
          </div> -->
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
    </div>
  </div>
</template>

<script>
// import { vueVimeoPlayer } from 'vue-vimeo-player'
import Footer from '~/components/Footer'
import FixedFooter from '~/components/FixedFooter'
import SignUp from '~/components/SignUp'
import { UserService } from '~/services'

export default {
  name: 'HomePage',
  components: {
    FixedFooter,
    Footer,
    SignUp
    // vueVimeoPlayer
  },

  data() {
    return {
      sending: false,
      success: false,
      email: '',
      video: '',
      isPlaying: false,
      opacity: 1
    }
  },
  computed: {
    videoStyle() {
      return {
        opacity: this.opacity
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const st = window.scrollY
      this.opacity = 1 - (1 / window.innerHeight) * st
    },
    playVideo() {
      this.isPlaying = true
      this.video = `<div style="padding:56.25% 0 0 0;position:relative;">
                        <iframe src="https://player.vimeo.com/video/456135341?color=ff0086&title=0&byline=0&portrait=0&autoplay=true" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                        </div>`
    },
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
// iframe {
//   width: 100%;
//   height: 45vh;
//   position: absolute;
//   top: 0;
//   left: 0;
// }

.video {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  // position: relative;
  min-height: 70vh;

  .player {
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    transform: translateY(-50%);
  }

  h1 {
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0%;
    z-index: 2;

    button {
      color: white;
      font-weight: bold;
      text-align: center;
      font-size: 21px;
      line-height: 1.2em;
      text-transform: uppercase;
    }

    transition: opacity 0.4s;

    span {
      color: #267efc;
    }
  }

  .poster {
    padding-top: 45.5%;
    transition: opacity 0.4s;
    position: absolute;
    top: 50%;
    left: 0;
    width: 150%;
    transform: translate(-17%, -50%);

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }
  }

  button {
    outline: none;
    border: 0;
    padding: 0;
    background-color: transparent;
    cursor: pointer;
  }

  &.is-playing {
    .poster,
    h1 {
      opacity: 0;
      pointer-events: none;
    }
  }
}

.wrap {
  position: relative;
  z-index: 5;
  width: 100%;
  margin-top: 70vh;
  background-color: black;
}


.homePageSection {
  padding: 20px 1.5rem !important;
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

.mobile {
  display: block;
  width: 127%;
  background-color: #fff000;
  color: #000000;
  position: relative;
  margin-left: -20%;
  padding-left: 12%;

  h2 {
    font-size: 22px;

    span {
      background-color: #000;
      color: #fff000;
      display: inline-block;
      padding: 0 5px;
    }
  }
}

.mobileForm {
  padding: 5px 0.75rem 0.75rem 0.75rem;
}

.desktop,
.yellowSection {
  display: none;
}

@media only screen and (min-width: 560px) {
  iframe {
    height: 90%;
  }

  .wrap {
    position: relative;
    z-index: 5;
    width: 100%;
    margin-top: 100vh;
    background-color: black;
  }

  .video {
    min-height: 100vh;

    .player {
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);
    }

    h1 {
      position: absolute;
      width: 40%;
      bottom: 100px;
      left: 50%;
      z-index: 2;

      button {
        color: white;
        font-weight: bold;
        text-align: center;
        transform: translateX(-50%);
        font-size: 24px;
        line-height: 1.2em;
        text-transform: uppercase;
      }

      transition: opacity 0.4s;

      span {
        color: #267efc;
      }
    }

    .poster {
      padding-top: 45.5%;
      transition: opacity 0.4s;
      position: absolute;
      top: 50%;
      left: 0;
      width: 100%;
      transform: translateY(-50%);

      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
    }

    button {
      outline: none;
      border: 0;
      padding: 0;
      background-color: transparent;
      cursor: pointer;
    }
  .homePageSection {
    padding: 0 1.5rem !important;
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

  .mobile {
    display: none;
  }

  .desktop {
    display: block;
    width: 100%;
    text-align: center;

    h2 {
      text-align: center;
    }
  }
}
</style>
