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
          <h3>Watch</h3>
        </button>
      </div>
      <div v-if="isPlaying" class="player">
        <iframe
          src="https://player.vimeo.com/video/576805134?color=ff0086&title=0&byline=0&portrait=0&autoplay=true"
          class="video-iframe"
          frameborder="0"
          allow="autoplay; fullscreen"
          allowfullscreen
        ></iframe>
      </div>
      <h1>
        <button @click="playVideo">
          The ultimate platform for fans<br />to scout and transfer players
          <!-- <br /><br /><span
            >Click to find out more.</span
          > -->
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
        <section class="section section-first">
          <div class="columns has-text-centered ticketWrapper">
            <div class="column ticket">
              <img src="~/assets/images/Search-player-icon@2x.png" />

              <p class="text">
                Football's very first,<br /><strong
                  >real-time<br />scouting game.</strong
                >
              </p>
              <img
                src="../assets/images/ticket-left-new.png"
                class="ticketLeft"
              />
              <img
                src="../assets/images/ticket-right-new.png"
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
              <img
                src="../assets/images/ticket-left-new.png"
                class="ticketLeft"
              />
              <img
                src="../assets/images/ticket-right-new.png"
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
              <img
                src="../assets/images/ticket-left-new.png"
                class="ticketLeft"
              />
              <img
                src="../assets/images/ticket-right-new.png"
                class="ticketRight"
              />
              <p class="bottom">Compete To Be The Best</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
// import { vueVimeoPlayer } from 'vue-vimeo-player'
import Footer from '~/components/Footer'

export default {
  name: 'HomePage',
  components: {
    Footer
    // vueVimeoPlayer
  },

  data() {
    return {
      sending: false,
      success: false,
      email: '',
      video: '',
      isPlaying: false,
      opacity: 1,
      error: ''
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
    // window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const st = window.scrollY
      this.opacity = 1 - (1 / window.innerHeight) * st
    },
    playVideo() {
      this.isPlaying = true
    }
  }
}
</script>

<style lang="scss">
.video-iframe {
  width: 100%;
  height: 100%;
}

.error {
  color: red;
}

.video {
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 55vh;

  h1 {
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0%;
    z-index: 2;
    margin-bottom: 0;

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

  .player {
    width: 100%;
    margin-top: 65px;
  }

  .poster {
    padding-top: 45.5%;
    transition: opacity 0.4s;
    position: absolute;
    top: 50%;
    left: 0;
    width: 150%;
    transform: translate(-16.4%, -60%);

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
    }

    h3 {
      position: absolute;
      left: 50%;
      bottom: -15%;
      color: white;
      font-weight: bold;
      text-align: center;
      font-size: 30px;
      line-height: 1.2em;
      text-transform: uppercase;
      padding-top: 60px;
      background-image: url(/play.png);
      background-repeat: no-repeat;
      background-position: top center;
      background-size: auto 50%;
      transform: translateX(-50%);
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
  // margin-top: 50vh;
  background-color: #181829;

  section.section-first {
    padding-top: 0px;
  }
}

// .homePageWrapper {
//   .section {
//     //padding: 0 1.5rem 3rem 1.5rem;
//   }
// }

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

@media only screen and (min-width: 560px) {
  .wrap {
    position: relative;
    z-index: 5;
    width: 100%;
    margin-top: 75vh;
  }

  section.section-first {
    padding-top: 20px !important;
    padding-bottom: 0px !important;
  }

  .video {
    position: fixed;
    min-height: 75vh;

    .player {
      margin-top: 105px;
    }

    h1 {
      position: absolute;
      width: 40%;
      bottom: 30px;
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
      left: 10%;
      width: 80%;
      transform: translateY(-40%);

      img {
        position: absolute;
        top: 7%;
        left: 0;
        width: 100%;
      }

      h3 {
        bottom: 40%;

        &:hover {
          background-image: url(/play-over.png);
        }
      }
    }

    button {
      outline: none;
      border: 0;
      padding: 0;
      background-color: transparent;
      cursor: pointer;
    }
  }

  .homeWrapper {
    margin-top: 80vh;
  }

  .ticketWrapper {
    margin-top: 80px;
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
