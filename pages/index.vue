<template>
  <div>
    <section class="section">
      <div class="coming-soon">
        <img src="~/assets/icon.svg" width="25%" alt="Bootbag Ltd - Icon" />
        <img src="~/assets/bootbag.svg" width="25%" alt="Bootbag Ltd - Logo" />
        <h1>Football fantasy app, coming soon...</h1>
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
.coming-soon {
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  > * {
    margin-bottom: 1rem;
  }
}
</style>
