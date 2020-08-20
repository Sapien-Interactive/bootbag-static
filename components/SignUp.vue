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
