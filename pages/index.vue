<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        Kotaro Chiba
      </h1>
      <h2 class="subtitle">
        Hello My Profile page :)
      </h2>
      <links/>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Links from '~/components/Links.vue'

export default {
  components: {
    Logo,
    Links
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-weight: 400;
  font-size: 36px;
  color: #333;
}
.subtitle {
  font-weight: 400;
  font-size: 24px;
  color: #333;
}
</style>
