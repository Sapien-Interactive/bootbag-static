<template>
  <section :class="cls" class="yellowSection  has-text-centered">
    <p>
      <span>Join The Revolution</span
      ><strong>Register To Become A Scout</strong>
      <button
        v-on:click="showPopup = !showPopup"
        class="modal-button"
        data-target="modal"
        aria-haspopup="true"
      >
        Register Now
      </button>
    </p>
    <div
      id="modal"
      v-bind:class="[showPopup ? 'modal is-active' : '', 'modal']"
    >
      <div class="modal-background"></div>
      <div class="modal-content">
        <p class="title">Join The Revolution.</p>
        <p class="subTitle">Register To Become A Scout.</p>
        <img src="../assets/images/popup-circle-left.png" class="popupLeft" />
        <img src="../assets/images/popup-circle-right.png" class="popupRight" />
        <div v-if="!sending && success">
          <p>
            You have Successfully Registered for Bootbag, keep an eye on your
            emails for more details!
          </p>
        </div>
        <form v-else @submit.prevent="sendEmail">
          <input
            v-model="email"
            type="email"
            placeholder="Enter email here..."
          />
          <span v-if="error" class="error">{{ error }}</span>
          <button :disabled="sending" type="submit">
            <img v-if="sending" src="~/assets/spinner.svg" />
            <span v-else>Register Now</span>
          </button>
        </form>
      </div>
      <button
        v-on:click="showPopup = !showPopup"
        class="modal-close is-large"
        aria-label="close"
      ></button>
    </div>
  </section>
</template>

<script>
import { UserService } from '~/services'
export default {
  name: 'SignUp',
  props: {
    home: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sending: false,
      success: false,
      email: '',
      showPopup: false,
      isReady: false,
      scrolled: false,
      error: ''
    }
  },
  computed: {
    cls() {
      return {
        'is-visible': this.scrolled && this.home,
        static: !this.home
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 150
    },
    async sendEmail() {
      this.sending = true
      this.error = ''

      try {
        const res = await UserService.register(this.email)

        const { status } = res

        if (status === 400) {
          this.error = 'email is already registered'
        }

        this.sending = false

        this.success = res.status === 200
        this.email = ''
      } catch (error) {
        this.success = false
      } finally {
        this.sending = false
      }

      this.sending = false
    }
  }
}
</script>

<style lang="scss">
.yellowSection {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color: #fff000;
  text-align: center;

  // transform: translateY(100%);
  bottom: -150px;
  transition: bottom 0.3s ease-out;

  &.is-visible,
  &.static {
    //transform: translateY(0%);
    bottom: 0px;
  }

  p {
    display: inline-block;

    span,
    strong,
    button {
      font-size: 16px;
    }

    span {
      padding: 7px 0;
      color: #000;
      display: inline-block;
    }

    .error {
      color: red;
    }

    strong {
      border-left: solid 1px #000;
      padding-left: 10px;
      margin-left: 10px;
    }

    button {
      background-color: #267efc;
      border: solid 1px #267efc;
      color: #fff;
      padding: 11px 20px;
      width: 100%;
      outline: none;
      text-transform: uppercase;
      cursor: pointer;
    }

    /*
@keyframes pulse {
0% {
transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
}

70% {
transform: scale(1);
box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
}

100% {
transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
}
}*/
  }

  .modal.is-active {
    .modal-content {
      transform: translateY(0px);
      opacity: 1;
    }
  }

  .modal-content {
    background-color: #fff;
    width: 90%;
    color: #000;
    padding-top: 20px;
    font-size: 20px;
    min-height: 280px;

    transition: transform 1s ease-out, opacity 1s;
    transform: translateY(20px);
    opacity: 0;

    .subTitle,
    .title {
      font-size: 20px;
      text-transform: uppercase;
      margin: 0;
      padding: 0 20px;
      width: 80%;
      text-align: center;
    }

    .subTitle {
      font-weight: bold;
      border-bottom: dotted 1px #666;
      padding-bottom: 30px;
      margin-bottom: 30px;
    }

    .popupLeft,
    .popupRight {
      position: relative;
      margin-top: 60px;
      float: left;
    }

    .popupRight {
      float: right;
    }

    input[type='email'] {
      border: none;
      border-bottom: solid 1px #ccc;
      color: #000000;
      width: 80%;
      margin: 0 10%;
      background-image: url('../assets/images/ball-icon.png');
      background-repeat: no-repeat;
      background-position: right 15px;
    }

    input[type='email']:focus {
      background-color: #efefef;
      border-bottom: solid 1px #ccc;
      outline: none;
      color: #000000;
    }

    button {
      background-color: #267efc;
      border: none;
      color: #fff;
      padding: 15px 20px;
      margin-top: 30px;
      outline: none;
      width: 100%;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: bold;
      background-image: url('../assets/images/button-rip.png');
      background-repeat: repeat-x;
      background-size: 2%;
      cursor: pointer;
      position: absolute;
      left: 0px;
      bottom: 0px;
    }
  }
}

@media only screen and (min-width: 560px) {
  .yellowSection {
    p {
      span,
      strong,
      button {
        font-size: 21px;
      }

      button {
        width: auto;
        margin-left: 20px;
        font-weight: bold;
      }
    }

    .modal-content {
      width: 400px;

      .subTitle {
        width: 100%;
        text-align: center;
      }

      form {
        width: 100%;
      }

      .popupLeft,
      .popupRight {
        margin-top: -60px;
      }
    }
  }

  .modal-close {
    top: 100px;
  }
}
</style>
