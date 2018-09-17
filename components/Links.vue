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
<style scoped lnag="postcss">
@keyframes vertical {
    0% { transform:translateY(0px); }
    100% { transform:translateY(-3px); }
}
@keyframes vertical-out {
    0% { transform:translateY(-3px); }
    100% { transform:translateY(0px); }
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
    background-color: #fff;
    transition: .3s ease; 
    animation: vertical-out .5s ease-out forwards;
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
    &:hover {
        animation: vertical .3s ease-out forwards;
        &.github {
            color: #fff;
            background-color: #ebb251;
        }
        &.soundcloud {
            color: #fff;
            background-color: #cd5655;
        }
        &.instagram {
            color: #fff;
            background-color: #08968f;
        }
        &.twitter {
            color: #fff;
            background-color: #526aa9;
        }
    }
}
</style>

