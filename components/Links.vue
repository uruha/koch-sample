<template>
  <div class="links">
    <ul>
      <li><a class="github" href="https://github.com/uruha" target="_blank">GitHub</a></li>
      <li><a class="soundcloud" href="https://soundcloud.com/ur_uha" target="_blank">Sound Cloud</a></li>
      <li><a class="instagram" href="https://www.instagram.com/ur_uha/" target="_blank">Instagram</a></li>
      <li><a class="twitter" href="https://twitter.com/ur_uha" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>
<style scoped>
:root {
    --white: #fff;
}
.links {
    padding: 2rem;
}
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
}
a {
    text-decoration: none;
    color: #333;
    display: inline-block;
    padding: .5rem;
    margin: 1px;
    &.github {
        border: 1px solid #ebb251;
    }
    &.soundcloud {
        border: 1px solid #cd5655;
    }
    &.instagram {
        border: 1px solid #08968f;
    }
    &.twitter {
        border: 1px solid #526aa9;
    }
}
</style>

