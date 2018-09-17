<template>
  <section class="container" :style="styles">
    <div>
      <logo/>
      <h1 class="title">
        <a
          href=""
          @mouseover="changeDark"
          @mouseout="changeWhite">
          Kotaro Chiba
        </a>
      </h1>
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
  },
  data() {
    return {
      styles: {
        '--txtColor': '#333',
        '--bgc': '#fff'
      }
    }
  },
  methods: {
    changeDark: function() {
      this.styles['--bgc'] = '#000';
      this.styles['--txtColor'] = '#fff';
    },
    changeWhite: function() {
      this.styles['--bgc'] = '#fff';
      this.styles['--txtColor'] = '#040000';
    }
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
  background-color: var(--bgc);
  transition: .3s ease; 
}
.title {
  font-weight: 200;
  font-size: 36px;
  a {
    text-decoration: none;
    color: var(--txtColor);
  }
}
</style>
