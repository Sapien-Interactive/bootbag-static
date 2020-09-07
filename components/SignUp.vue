<template>
  <section class="yellowSection  has-text-centered">
    <p>
      <span>Join The Revolution</span><strong>Register To Become A Scout</strong
      ><button
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
            class="column"
            placeholder="Enter Email Address here..."
          />
          <button :disabled="sending" type="submit">
            <img v-if="sending" src="~/assets/spinner.svg" />
            <span v-else="!sending">Register Now</span>
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
export default {
  name: 'SignUp',

  data() {
    return {
      sending: false,
      success: false,
      email: '',
      showPopup: false
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
.yellowSection {
  background-color: #fff000;
  text-align: center;

  p {
    display: inline-block;

    span {
      padding: 7px 0;
      color: #000;
      display: inline-block;
      font-size: 16px;
    }

    strong {
      border-left: solid 1px #000;
      padding-left: 10px;
      margin-left: 10px;
      font-size: 16px;
    }

    button {
      background-color: #267efc;
      border: solid 1px #267efc;
      color: #fff;
      padding: 11px 20px;
      width: 100%;
      outline: none;
      font-size: 16px;
      text-transform: uppercase;
    }
  }

  .modal-content {
    background-color: #fff;
    width: 90%;
    color: #000;
    padding-top: 20px;
    font-size: 20px;

    .subTitle,
    .title {
      font-size: 20px;
      text-transform: uppercase;
      margin: 0;
      padding: 0 20px;
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
      margin-top: -60px;
      float: left;
    }

    .popupRight {
      float: right;
    }

    input {
      border: none;
      border-bottom: solid 1px #ccc;
      color: #ccc;
      width: 80%;
      margin: 0 10%;
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
    }
  }
}

@media only screen and (min-width: 560px) {
  .yellowSection {
    p {
      button {
        width: auto;
        margin-left: 20px;
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
    }
  }
}
</style>
