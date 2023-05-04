<template>
  <div class="coming-soon mobile">
    <h2 v-if="!sending && success">
      <span>Breaking News!</span> <span>You Are Now Registered.</span>
    </h2>
    <h2 v-else>
      <span>Live</span>
      <span>Register for the Head Scout position.</span>
    </h2>
  </div>
  <div class="coming-soon desktop">
    <h2>
      Register for the Head Scout position.
    </h2>
  </div>
  <div class="coming-soon">
    <div v-if="!sending && success">
      <p>
        Congratulations, you have been hired as the Head Scout. Keep an
        eye on your emails for more details!
      </p>
    </div>
    <form v-else @submit.prevent="sendEmail">
      <div class="columns">
        <div class="column is-two-thirds">
          <input
            v-model="email"
            type="email"
            class="column input"
            placeholder="Email Address"
          />
          <span v-if="error" class="error">
            {{ error }}
          </span>
        </div>
        <div class="column">
          <button
            :disabled="sending"
            type="submit"
            class="button is-primary"
          >
            <img v-if="sending" src="~/assets/spinner.svg" />
            <span v-else>Register Now</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Footer from '~/components/Footer'
import { UserService } from '~/services'

export default {
  name: 'SignUpInput',
  data() {
    return {
      sending: false,
      success: false,
      email: '',
      error: ''
    }
  },
  methods: {
    async sendEmail() {
      this.error = ''
      if (this.email.trim() !== '') {
        this.sending = true
        try {
          const res = await UserService.register(this.email)
          const { status } = res
          if (status === 400) {
            this.error = 'Email is already registered'
          }
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
  .error {
    display: inline-block;
    margin-top: 8px;
    color: $signage-negative;
  }
</style>