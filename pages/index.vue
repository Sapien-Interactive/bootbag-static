<template>
  <div>
    <section class="videoPlaceholder">
      VIDEO GOES HERE
    </section>
    <section class="section">
      <div class="coming-soon">
        <h1>Show rival scouts you are the best.</h1>
        <hr />
        <h2>
          Select the Biggest Improving players across 14 Divisions for your
          roster.
        </h2>
        <hr />
        <p>Buy before they peak.<br />Sell before they drop.</p>
        <p class="blue">Join the revolution. Register to become a scout.</p>
        <form @submit.prevent="sendEmail" class="container">
          <div v-if="!sending && success">
            <p>
              You have Successfully Registrated for Bootbag, keep an eye on your
              emails for more details!
            </p>
          </div>
          <div v-else class="columns">
            <input
              v-model="email"
              type="email"
              class="column"
              placeholder="Email Address"
            />
            <button :disabled="sending" type="submit" class="column">
              <img v-if="sending" src="~/assets/spinner.svg" />
              <span v-else="!sending">Register Now</span>
            </button>
          </div>
        </form>
        <p class="pink">Download soon on...</p>
        <p class="download">
          <img src="~/assets/BtnGooglePlay.png" />
          <img src="~/assets/BtnAppStore.png" />
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',

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
        const response = await fetch(`${window.location.origin}/api/contact`, {
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
.videoPlaceholder {
  height: 60vh;
  text-align: center;
}

.coming-soon {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  > * {
    margin: 1rem 0px;
  }
}

p,
h2,
h1 {
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
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

  input[type='email'] {
    width: 100%;
    padding: 10px;
    border: solid 1px #ffffff;
    background-color: #000000;
    color: #ffffff;
    font-size: 18px;
    display: inline-block;
    margin-bottom: 20px;
  }

  button[type='submit'] {
    width: 100%;
    font-size: 18px;
    background-color: #f80290;
    border: solid 1px #f80290;
    padding: 10px 20px;
    color: #ffffff;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 20px;

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

@media only screen and (min-width: 560px) {
  form {
    width: 75%;
  }
}

@media only screen and (min-width: 768px) {
  form {
    width: 50%;

    button[type='submit'] {
      margin-left: 10px;
    }
  }
}
</style>
