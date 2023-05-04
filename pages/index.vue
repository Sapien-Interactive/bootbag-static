<template>
  <main class="main">
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
              <div>
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
              </div>
              <p class="bottom">
                18 Million UK Football Fans
              </p>
            </div>
            <div class="column ticket">
              <div>
                <img src="~/assets/images/Pick-Roster-icon@2x.png" />
                <p class="text">
                  Scout players from <br />England's divisions,<br />
                  <strong>Top 4 and the WSL!</strong>
                </p>
                <img
                  src="../assets/images/ticket-left-new.png"
                  class="ticketLeft"
                />
                <img
                  src="../assets/images/ticket-right-new.png"
                  class="ticketRight"
                />
              </div>
              <p class="bottom">3.5 Billion Global Football Fans*</p>
            </div>
            <div class="column ticket">
              <div>
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
              </div>
              <p class="bottom">Compete To Be The Best</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  </main>
</template>

<script>
// import { vueVimeoPlayer } from 'vue-vimeo-player'
import Footer from '~/components/Footer'
import { UserService } from '~/services'

export default {
  name: 'HomePage',
  components: {
    Footer
    // vueVimeoPlayer
  },

  data() {
    return {
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
  aspect-ratio: 16 / 9;
  width: 100%;
}

.video {
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    button {
      color: white;
      font-weight: bold;
      text-align: center;
      font-size: 21px;
      line-height: 1.2em;
      text-transform: uppercase;
      position: relative;
    }

    transition: opacity 0.4s;

    span {
      color: #267efc;
    }
  }

  .player {
    position: relative;
    width: 100%;
    margin: 0 auto;
  }

  .poster {
    width: 100%;
    margin: 0 auto;
    position: relative;

    h3 {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

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
    .poster {
      display: none;
    }
  }
}

.wrap {
  position: relative;
  z-index: 5;
  width: 100%;

  section.section-first {
    padding-top: 0px;
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

.mobile {
  display: block;
  width: 127%;
  background-color: #fff000;
  color: #000000;
  position: relative;
  margin-left: -20%;
  padding-left: 10%;

  h2 {
    font-size: 23px;
    line-height: 23px;
  }

  span {
    display: inline-block;
    padding: 4px 0 2px 0;
  }

  span:first-child {
    background-color: #000;
    color: #fff000;
    display: block;
  }
}

.desktop {
  display: none;
}

@media only screen and (min-width: 560px) {
  .wrap {
    position: relative;
    z-index: 5;
    width: 100%;
    background-color: black;
  }

  section.section-first {
    padding-top: 20px !important;
    padding-bottom: 0px !important;
  }

  .video {
    display: flex;
    flex-direction: column;

    .player {
      width: 65%;
    }

    h1 {
      button {
        position: relative;
      }

      transition: opacity 0.4s;

      span {
        color: #267efc;
      }
    }

    .poster {
      width: 80%;

      img {
      }

      h3 {
        margin-top: 0;

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
      position: relative;
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
