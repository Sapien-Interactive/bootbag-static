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
        <form class="container">
          <div class="columns">
            <input type="email" class="column" placeholder="Email Address" />
            <input type="submit" class="column" value="Register Now" />
          </div>
        </form>
        <p class="pink">Download Now</p>
        <p class="download">
          <a href="#" target="_blank"><img src="~assets/BtnGooglePlay.png"/></a>
          <a href="#" target="_blank"><img src="~assets/BtnAppStore.png"/></a>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
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
    font-size: 18px;
    display: inline-block;
    margin-bottom: 20px;
  }

  input[type='submit'] {
    width: 100%;
    font-size: 18px;
    background-color: #f80290;
    border: solid 1px #f80290;
    padding: 10px 20px;
    color: #ffffff;
    border-radius: 5px;
    display: inline-block;
    margin-bottom: 20px;
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

    input[type='submit'] {
      margin-left: 10px;
    }
  }
}
</style>
