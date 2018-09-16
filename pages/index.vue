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
      <div class="links">
        <ul>
          <li><a href="https://github.com/uruha" target="_blank">GitHub</a></li>
          <li><a href="https://soundcloud.com/ur_uha" target="_blank">Sound Cloud</a></li>
          <li><a href="https://www.instagram.com/ur_uha/" target="_blank">Instagram</a></li>
          <li><a href="https://twitter.com/ur_uha" target="_blank">Twitter</a></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
}
.subtitle {
  font-weight: 400;
  font-size: 24px;
}
</style>
